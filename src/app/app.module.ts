import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FinderComponent } from './finder/finder.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserFindComponent } from './user/user-find/user-find.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserSignInComponent } from './user/user-sign-in/user-sign-in.component';

import { BaseComponent } from './_layouts/base/base.component';
import { CenterComponent } from './_layouts/center/center.component';
import { NavbarComponent } from './_fragments/navbar/navbar.component';
import { SidenavComponent } from './_fragments/sidenav/sidenav.component';
import { DialogConfirmComponent } from './_fragments/dialog-confirm/dialog-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UserComponent,
    FinderComponent,
    DashboardComponent,
    UserFindComponent,
    UserProfileComponent,
    BaseComponent,
    CenterComponent,
    UserSignInComponent,
    SidenavComponent,
    DialogConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
