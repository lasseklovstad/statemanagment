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
import {FarmState} from "./ngxs/farm.state";
import {NgxsModule} from "@ngxs/store";
import {Farm} from './models/farm';
import {environment} from '../environments/environment';


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
    NgxsModule.forRoot([
      FarmState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled:environment.production,
      maxAge:25
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
