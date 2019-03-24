import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Farm} from "../../models/farm";
import {Select} from "@ngxs/store";
import {FarmState1} from "../../ngxs/farm.state";

@Component({
  selector: 'app-farm-counter',
  templateUrl: './farm-counter.component.html',
  styleUrls: ['./farm-counter.component.css']
})
export class FarmCounterComponent implements OnInit {

  @Select(FarmState1.farms)farms$:Observable<Farm[]>;

  constructor() { }

  ngOnInit() {
    //this.farms$ = this.store.pipe(select(selectFarms));
  }

}
