import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignmentComponent } from './assignment/assignment.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { RfsAssignmentComponent } from './rfs-assignment/rfs-assignment.component';
import { PiCompComponent } from './pipes/pi-comp/pi-comp.component';
import { ShortenPipe } from './pipes/pi-comp/shorten.pipe';
import { FilterPipe } from './pipes/pi-comp/filter.pipe';
import { ReversepipePipe } from './reversepipe.pipe';
import { SortpipePipe } from './sortpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    RfsAssignmentComponent,
    PiCompComponent,
    ShortenPipe,
    FilterPipe,
    ReversepipePipe,
    SortpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
