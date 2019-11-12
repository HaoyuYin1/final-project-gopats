import { Component, OnInit, Input, Inject, Injectable } from '@angular/core';
import { User } from './../model/user';
import { Account } from './../model/account';
import { UserService } from './../service/user.service';
import { BankService } from './../service/bank-service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { NavbarComponent } from './../navbar/navbar.component';
declare var gapi: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  un: string;
  pw: string;
  ob: any;
  account: string;


  constructor(private bankService: BankService, private router: Router, private navbarcomponent: NavbarComponent) { }


  showUser() {
    let account = new Account(this.account);
    this.ob = this.bankService.getBills(account);
    this.ob.subscribe(data => {
      if (data.length == 0) {
        alert("Wrong credentials!");
      }
      else {
        console.log(data);
      }
    })
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'light',
        'onsuccess': param => this.onSignIn(param)
    });
  }

  onSignIn(googleUser) {
    console.log('?' );
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    // this.navbarcomponent.showLogSign = false;
  }

  signOut() {
    // var auth2 = gapi.auth2.getAuthInstance();
    // auth2.signOut().then(function () {
    //   console.log('User signed out.');
    // });
    console.log('User signed out.');
    // this.navbarcomponent.showLogSign = false;
  }

// public onSignIn(googleUser) {
//     var user : User = new User();

//     ((u, p) => {
//         u.id            = p.getId();
//         u.name          = p.getName();
//         u.email         = p.getEmail();
//         u.imageUrl      = p.getImageUrl();
//         u.givenName     = p.getGivenName();
//         u.familyName    = p.getFamilyName();
//     })(user, googleUser.getBasicProfile());

//     ((u, r) => {
//         u.token         = r.id_token;
//     })(user, googleUser.getAuthResponse());

//     user.save();
//     this.goHome();
// };




}
