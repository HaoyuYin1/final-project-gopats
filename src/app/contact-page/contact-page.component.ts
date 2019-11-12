import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { SharingService } from '../service/sharing.service';
import { Email } from './../model/email';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  subject: string;
  content: string;
  email: Email;
  ob: any;
  bool = false;

  constructor(private userService: UserService, private sharingService: SharingService) { }

  ngOnInit() {
  }

  sendEmail() {
    let u = this.sharingService.fetch();
    let ct = u ? this.content + " \n\n\nfrom " + u.fname + " " + u.lname + "  " + u.email : this.content;
    this.email = new Email(null, this.subject, ct);
    this.ob = this.userService.send(this.email);
    this.ob.subscribe(data => {
      this.bool = false;
    });
    this.subject = "";
    this.content = "";
    this.bool = true;

  }

}
