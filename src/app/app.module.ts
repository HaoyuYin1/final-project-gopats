import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { UserMainpageComponent } from './user-mainpage/user-mainpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { UserService } from './service/user.service';
import { SharingService } from './service/sharing.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { OverviewComponent } from './overview/overview.component';
import { BudgetComponent } from './budget/budget.component';
import { TransctionComponent } from './transction/transction.component';
import { BudgetService } from './service/budget.service';
import { CardComponent } from './card/card.component';
import { RemoveCardComponent } from './remove-card/remove-card.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignUpComponent,
    LogInComponent,
    UserMainpageComponent,
    PageNotFoundComponent,
    TestComponent,
    EditProfileComponent,
    ContactPageComponent,
    OverviewComponent,
    BudgetComponent,
    TransctionComponent,
    CardComponent,
    RemoveCardComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, SharingService,BudgetService],
  bootstrap: [AppComponent],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
