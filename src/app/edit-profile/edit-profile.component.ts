import { Component, OnInit, Input, Inject, Injectable } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SharingService } from '../service/sharing.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  fname: string;
  lname: string;
  phone: string;
  address: string;
  password: string;
  email: string;
  ob: any;
  user: User;
  regexEmail = new RegExp(/^\w+\.?[\w-]*\.?[\w]\@\w+((-\w+)|(\w*))\.?[\w]*\.?[\w]{2,3}$/);
  regexName = new RegExp(/[a-zA-Z]+/);
  regexPassword = new RegExp(/[\w]{6,12}/);
  regexPhone = new RegExp(/[0-9]{10,11}/);

  private user2: Array<object> = [];

  constructor(private userService: UserService, private router: Router,
    private sharingService: SharingService, private location: Location) {
  }

  update() {
    if (!this.regexName.test(this.fname)) {
      alert("First name is invalid!");
      return;
    }
    if (!this.regexName.test(this.lname)) {
      alert("Last name is invalid!");
      return;
    }
    if (!this.regexPhone.test(this.phone)) {
      alert("Phone number is invalid!");
      return;
    }

    let newUser = new User(this.user._id, this.user.password, this.fname, this.lname,
    this.phone, this.address, this.user.email, this.user.account, this.user.budget, this.user.accounts)
    this.ob = this.userService.updateUser(this.user._id, newUser);
    this.ob.subscribe((data) => {
      this.router.navigateByUrl('user-mainpage').then(e => {
        if (e) {
          console.log("Update successfully!");
        } else {
          console.log("Update failed!");
        }
      });
    })
  }

  ngOnInit() {
    this.user = this.sharingService.fetch();
  }


  back() {
    this.location.back();
  }

}
