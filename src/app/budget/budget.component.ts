import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../service/budget.service';
import { SharingService } from '../service/sharing.service';
import { User } from '../model/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  user: User;

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
  budgets;
  categroy;

  constructor(private budgetService: BudgetService, private sharingService: SharingService,
  private location: Location) { }

  ngOnInit() {
    this.categroy = this.budgetService.getCategory();
    this.budgets = this.budgetService.getBudgets();

    this.user = this.sharingService.fetch();
  }

  saveChange(){
    this.budgetService.setBudgets(this.user);
  }


  back(){
      this.location.back();
  }

}
