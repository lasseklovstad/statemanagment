import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Farm} from "../../models/farm";
import {Select} from "@ngxs/store";
import {FarmState1} from "../../ngxs/farm.state";
import {selectFarms, AppState} from '../../ngrx/reducers';
import {Store, select} from '@ngrx/store';

@Component({
  selector: 'app-farm-counter',
  templateUrl: './farm-counter.component.html',
  styleUrls: ['./farm-counter.component.css']
})
export class FarmCounterComponent implements OnInit {
  public farms$:Observable<Farm[]>

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.farms$ = this.store.pipe(select(selectFarms));
  }

}
