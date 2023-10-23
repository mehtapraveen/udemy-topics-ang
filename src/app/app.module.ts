import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ApiService } from './api.service';
import { AuthInterfaceService } from './auth-interceptor';
import { LoginInterfaceService } from './login-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterfaceService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterfaceService,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
