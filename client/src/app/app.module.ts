import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HoldingstableComponent } from './holdingstable/holdingstable.component';

@NgModule({
  declarations: [
    AppComponent,
    HoldingstableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
