import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdDialogModule,
  MdToolbarModule,
  MdSidenavModule
} from '@angular/material';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    BrowserAnimationsModule,

    MdButtonModule,
    MdCheckboxModule,
    MdDialogModule,
    MdToolbarModule,
    MdSidenavModule
  ],
  entryComponents: [
    DialogExampleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
