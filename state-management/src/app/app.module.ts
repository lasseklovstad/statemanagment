import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmComponent } from './components/farm/farm.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import { FarmCounterComponent } from './components/farm-counter/farm-counter.component';
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./ngrx/reducers";
import {FarmState1} from "./ngxs/farm.state";
import {NgxsModule} from "@ngxs/store";


@NgModule({
  declarations: [
    AppComponent,
    FarmComponent,
    FarmCounterComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    StoreModule.forRoot(reducers),
    /*StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    */
    NgxsModule.forRoot([
      FarmState1
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
