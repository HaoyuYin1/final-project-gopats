import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { SharingService } from '../service/sharing.service';
import { Email } from './../model/email';
import { User } from './../model/user';
import { SignUpUser } from './../model/sign-up-user';
import { Router } from '@angular/router';
import { NavbarComponent } from './../navbar/navbar.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  email: string;
  password: string;
  password2: string;
  phone:string;
  address:string;
  fname: string;
  lname: string;
  regexEmail = new RegExp(/^\w+\.?[\w-]*\.?[\w]\@\w+((-\w+)|(\w*))\.?[\w]*\.?[\w]{2,3}$/);
  regexName = new RegExp(/[a-zA-Z]+/);
  regexPassword = new RegExp(/[\w]{6,12}/);
  regexPhone = new RegExp(/[0-9]{10,11}/);
  user: User;
  ob: any;
  ob2: any;

  constructor(private userService: UserService, private sharingService: SharingService,
    private router: Router, private navbarcomponent: NavbarComponent) { }

  ngOnInit() {
  }

  submit() {
    if (!this.regexEmail.test(this.email)) {
      alert("Email is invalid!");
      return;
    }
    if (!this.regexName.test(this.fname)) {
      alert("First name is invalid!");
      return;
    }
    if (!this.regexName.test(this.lname)) {
      alert("Last name is invalid!");
      return;
    }
    if (!this.regexPassword.test(this.password)) {
      alert("Password is invalid!");
      return;
    }
    if (this.password2 != this.password) {
      alert("Passwords don't match!");
      return;
    }
    if (!this.regexPhone.test(this.phone)) {
      alert("Phone number is invalud!");
      return;
    }

    let signUpUser = new SignUpUser(this.email);
    this.ob = this.userService.checkUser(signUpUser);
    this.ob.subscribe(data => {
      if (data.length !== 0) {
        alert("This email has already been registered!");
      }
      else {
        let newuser = new User(null, this.password, this.fname, this.lname,
          this.phone, this.address, this.email, [], [700, 100, 1200], []);
        this.ob2 = this.userService.createUser(newuser);
        this.ob2.subscribe(data2 => {
          alert("You have successfully registered!\n\nNavigating to log-in page...");
          this.router.navigateByUrl('log-in').then(e => {

          });
        });
      }
    });

  }
}
