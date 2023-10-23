import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './users/user/user.component';
import { ServerService } from './server.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGaurd } from './auth-gaurd.service';
import { AuthService } from './auth-service';
import { CanDeactivateGaurd } from './servers/edit-server/can-deactive-gaurd.service';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ServerResolver } from './servers/server/server-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    ServersComponent,
    ErrorMessageComponent



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [ServerService, AuthGaurd, AuthService, CanDeactivateGaurd, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
