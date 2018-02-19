import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenericFormModule } from 'ngw-generic-forms';
import { TextareaIeIssueComponent } from './textarea-ie-issue/textarea-ie-issue.component';
import { AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    TextareaIeIssueComponent,
  ],
  imports: [
    BrowserModule,
    GenericFormModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
