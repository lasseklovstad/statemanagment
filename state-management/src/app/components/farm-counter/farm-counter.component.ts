import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Farm} from "../../models/farm";
import {Select} from "@ngxs/store";
import {FarmState} from "../../ngxs/farm.state";

@Component({
  selector: 'app-farm-counter',
  templateUrl: './farm-counter.component.html',
  styleUrls: ['./farm-counter.component.css']
})
export class FarmCounterComponent implements OnInit {

  @Select(FarmState.farms)farms$:Observable<Farm[]>;

  constructor() { }

  ngOnInit() {

  }

}
