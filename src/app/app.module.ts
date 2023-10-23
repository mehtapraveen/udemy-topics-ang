import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingService } from './logging.service';
import { AccountServices } from './accounts.service';
import { ActiveUsersComponent } from './assignment/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment/inactive-users/inactive-users.component';
import { UserService } from './user.service';
import { CounterService } from './counter.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoggingService, AccountServices, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
