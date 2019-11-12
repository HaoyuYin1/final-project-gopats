import { Injectable } from '@angular/core';
import { SharingService } from './sharing.service';
import { UserService } from './user.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  ob: any;
  user = this.sharingService.fetch();
  budgets = [
    ['Total', 0],
    ['Grocery', 0],
    ['Gas', 0],
    ['Others', 0]
  ];

  getBudgets() {
    this.budgets[1][1] = this.user.budget[0];
    this.budgets[2][1] = this.user.budget[1];
    this.budgets[3][1] = this.user.budget[2];
    this.budgets[0][1] = this.user.budget[0] + this.user.budget[1] + this.user.budget[2];
    return this.budgets;
  }

  getCategory() {
    return ["Total", "Grocery", "Gas", "Others"];
  }

  setBudgets(user) {
    this.ob =  this.userService.updateUser(user._id, user);
    this.ob.subscribe((data) => {

    })

  }

  constructor(private sharingService: SharingService, private userService: UserService) { }
}
