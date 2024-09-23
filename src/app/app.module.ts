import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, BrowserModule, FormsComponent
  ],
})
export class AppModule { }
