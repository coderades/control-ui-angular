import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './_layouts/base/base.component';
import { CenterComponent } from './_layouts/center/center.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FinderComponent } from './finder/finder.component';
import { HomeComponent } from './home/home.component';
import { UserSignInComponent } from './user/user-sign-in/user-sign-in.component';
import { UserComponent } from './user/user.component';
import { UserFindComponent } from './user/user-find/user-find.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'finder', component: FinderComponent },
      { path: 'home', component: HomeComponent },
      { path: 'user', component: UserComponent },
      { path: 'user-find', component: UserFindComponent },
      { path: 'user-profile', component: UserProfileComponent },
    ],
  },
  {
    path: '',
    component: CenterComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '', component: CenterComponent },
      { path: 'login', component: UserSignInComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
