import { Component, OnInit, Input, Inject, Injectable } from '@angular/core';
import { User } from './../model/user';
import { LoginUser } from './../model/login-user';
import { UserService } from './../service/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NavbarComponent } from './../navbar/navbar.component';
import { SharingService } from '../service/sharing.service';
import { BankService } from '../service/bank-service.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Account } from '../model/account';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  un: string;
  pw: string;
  ob: any;

  data2: any;

  initialCurrentAcc = false;

  constructor(private userService: UserService, private router: Router,
     private navbarcomponent: NavbarComponent, private sharingService: SharingService,  private bankService: BankService) {
    this.navbarcomponent.showLogSign = true;
    this.navbarcomponent.showLogOutEdit = false;
    sharingService.logOut();
   }

  auth() {
    let loginUser = new LoginUser(this.un, this.pw);
    this.ob = this.userService.authenticate(loginUser);
    this.ob.subscribe((data: any) => {
      if (data.length == 0) {
        alert("Wrong credentials!");
      }
      else {
        this.sharingService.save(data[0]);


        data[0].accounts.forEach(element => {
          this.bankService.getBills(new Account(element))
        .subscribe((data2)=> {

          if(data2[0]!=undefined) {
            this.sharingService.addAccount(data2[0]);
            if (this.initialCurrentAcc == false) {
              this.sharingService.saveCurrentAcc(data2[0]);
              this.initialCurrentAcc = true;
            }
          }

        });
        });


        this.router.navigateByUrl('user-mainpage').then(e => {
          if (e) {
            this.navbarcomponent.showLogSign = false;
            this.navbarcomponent.showLogOutEdit = true;
          } else {
          }
        });
      }
    })
  }

  ngOnInit() {
  }

}
