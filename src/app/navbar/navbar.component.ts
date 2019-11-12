import { Component, OnInit } from '@angular/core';
import { SharingService } from '../service/sharing.service';
import { User } from './../model/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showLogSign: boolean = true;
  showLogOutEdit: boolean = false;
  user;

  constructor(private sharingService: SharingService) { }

  ngOnInit() {
  }

  logout() {
    this.showLogSign = true;
    this.showLogOutEdit = false;
    this.sharingService.logOut();
  }
}
