import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Account } from '../model/account';
import { SharingService } from '../service/sharing.service';
import { UserService } from '../service/user.service';
import { Location } from '@angular/common';
import { BankService } from '../service/bank-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-card',
  templateUrl: './remove-card.component.html',
  styleUrls: ['./remove-card.component.scss']
})
export class RemoveCardComponent implements OnInit {

  user: User;
  ob: any;
  account: any;

  constructor(private sharingService: SharingService, private userService: UserService,
    private location: Location, private bankService: BankService, private router: Router) { }

  ngOnInit() {
    this.user = this.sharingService.fetch();
    this.account = this.sharingService.fetchCurrentAcc();
  }

  remove() {
    this.user.account = "";
    this.sharingService.save(this.user);
    this.sharingService.saveAccount(undefined);
    this.userService.updateUser(this.user._id, this.user)
      .subscribe(data => {
        this.location.back();
      });
  }

  removeAcc() {

    // remove acc from user
    this.user.accounts.splice( this.user.accounts.indexOf(this.account.account), 1 );
    // remove acc from sharing service
    this.sharingService.removeAccount(this.account);
    // update user to sharing service
    this.sharingService.save(this.user);
    // update db user
    this.userService.updateUser(this.user._id, this.user)
    .subscribe(data => {
      this.router.navigate(['/user-mainpage/']);

    });
  }

  back(){
    this.router.navigate(['/user-mainpage/']);
  }
}
