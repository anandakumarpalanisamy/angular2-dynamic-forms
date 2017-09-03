import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MdTabsModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question.component';

@NgModule({
  declarations: [
    AppComponent, 
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [    
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MdTabsModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdSelectModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
