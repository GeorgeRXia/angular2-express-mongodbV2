import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {UIRouterModule} from "@uirouter/angular";

import { AddListComponent } from './add-list/add-list.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ChartComponent } from './Chart/chart.component';
import { ListService } from './services/list.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyOwnCustomMaterialModule} from './material-primeng/material-primeng.module';

import 'hammerjs';

import {FormControlsComponent} from './material/form-controls.component';
import { HomeComponent } from './home/home.component';
import {addListState, viewListState, chartState, homeState } from './states/states';
let INITIAL_STATES = [addListState, viewListState, chartState, homeState];
@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    ViewListComponent,
    FormControlsComponent,
    ChartComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    UIRouterModule.forRoot({ states: INITIAL_STATES, useHash: true })


  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
