import { Component, OnInit, Input } from '@angular/core';
import { SharingService } from '../service/sharing.service';
import { User } from '../model/user';
import { ChangeDetectorRef } from '@angular/core';
import { UserService } from './../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-mainpage',
  templateUrl: './user-mainpage.component.html',
  styleUrls: ['./user-mainpage.component.scss']
})
export class UserMainpageComponent implements OnInit {

  account;
  user2: User;

  constructor(private sharingService: SharingService, private cdref: ChangeDetectorRef,
    private userService: UserService, private router: Router) {  }

  ngOnInit() {
    this.user2 = this.sharingService.fetch();
  }

  ngAfterContentChecked() {
    this.account = this.sharingService.fetchAccount();
    this.cdref.detectChanges();
  }

  changeAccount(a){
    this.sharingService.saveCurrentAcc(a);
    this.router.navigate(['/user-mainpage/']);
  }

  removeAccount(a){
    this.sharingService.saveCurrentAcc(a);
    this.router.navigate(['/user-mainpage/removeCard']);
  }

}
