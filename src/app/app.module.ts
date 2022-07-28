import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {CockpitCcomponent} from "./cockpit/cockpit.component";
import {ServerElementComponent} from "./server-element/server-element.component"
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    CockpitCcomponent,
    ServerElementComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
