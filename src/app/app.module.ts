import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { ChildFormComponent } from './parent-form/child-form/child-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    ParentFormComponent,
    ChildFormComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
