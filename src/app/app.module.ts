import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { AssignmentComponent } from './assignment/assignment.component';
import { CockpitComponent } from './new/cockpit/cockpit.component';
import { ServerElementComponent } from './new/server-element/server-element.component';
import { GameControlComponent } from './newassignment/game-control/game-control.component';
import { OddComponent } from './newassignment/odd/odd.component';
import { EvenComponent } from './newassignment/even/even.component';
import { RxjsConceptsComponent } from './rxjs-concepts/rxjs-concepts.component';
@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    AssignmentComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    RxjsConceptsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
