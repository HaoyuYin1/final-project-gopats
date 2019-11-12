import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Account } from '../model/account';
import { SharingService } from '../service/sharing.service';
import { UserService } from '../service/user.service';
import { Location } from '@angular/common';
import { BankService } from '../service/bank-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  account: string;
  user: User;
  ob: any;


  constructor(private sharingService: SharingService, private userService: UserService,
    private location: Location, private bankService: BankService, private router: Router) {

  }
  ngOnInit() {
    this.user = this.sharingService.fetch();

  }

  addCard() {
    if(this.user.account==null||this.user.account==""){this.user.account = []};

    if(this.user.accounts.includes(this.account)){
      alert("This card has already been added!");
      return;
    }
    let userAccount=[];
    userAccount = this.user.accounts;
    userAccount.push(this.account);

    let newUser = new User(this.user._id, this.user.password, this.user.fname, this.user.lname,
      this.user.phone, this.user.address, this.user.email, this.user.account, this.user.budget, userAccount)


    // update user.account attribute
    this.ob = this.userService.updateUser(this.user._id, newUser);
    this.ob.subscribe(data => {

    });
    this.sharingService.save(newUser);

    this.bankService.getBills(new Account(this.account))
    .subscribe(data=> {

        if(data[0]==undefined) {
          alert("Card is not found or we don't support this card!");
        } else{
          this.sharingService.addAccount(data[0]);
          this.sharingService.saveCurrentAcc(data[0]);
          this.router.navigate(['/user-mainpage/']);
        }

    });




  }

  back() {
    this.router.navigate(['/user-mainpage/']);
  }






}
