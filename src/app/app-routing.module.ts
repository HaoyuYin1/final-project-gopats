import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from  './contact-page/contact-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserMainpageComponent } from './user-mainpage/user-mainpage.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { TestComponent } from './test/test.component';
import { OverviewComponent } from "./overview/overview.component";
import { BudgetComponent } from './budget/budget.component';
import { TransctionComponent } from './transction/transction.component';
import { CardComponent } from './card/card.component';
import { RemoveCardComponent } from './remove-card/remove-card.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'user-mainpage',
    component: UserMainpageComponent,
    children: [
      {
        path:'',
        component: OverviewComponent
      },
      {
        path:'transction',
        component: TransctionComponent
      },
      {
        path:'budget',
        component: BudgetComponent
      },
      {
        path:'card',
        component: CardComponent
      },
      {
        path:'removeCard',
        component: RemoveCardComponent
      },
    ]
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent
  },
  {
    path: 'contact-page',
    component: ContactPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
