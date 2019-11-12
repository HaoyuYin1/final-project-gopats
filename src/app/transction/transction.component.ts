import { Component, OnInit } from '@angular/core';
import { testuser } from '../testUser';
import { BankService } from "../service/bank-service.service";
import { Observable } from 'rxjs';
import { Account } from './../model/account';
import { SharingService } from '../service/sharing.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-transction',
  templateUrl: './transction.component.html',
  styleUrls: ['./transction.component.scss']
})
export class TransctionComponent implements OnInit {

  user;
  trans;
  account;
  month:Array<string> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  currentMonth:string = this.month[new Date().getMonth()];

  constructor(private transService: BankService, private sharingService: SharingService,
  private location: Location) { }

  ngOnInit() {
    this.user = this.sharingService.fetch();
    this.account = this.sharingService.fetchCurrentAcc();
    this.trans = this.account.transactions;
  }

  back(){
    this.location.back();
  }

}
