import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectFarms, State} from "../../ngrx/reducers";
import {Farm} from "../../models/farm";
import {Observable} from "rxjs";
import {AddFarm} from "../../ngrx/actions/farm.action";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  farms$:Observable<Farm[]>;
  farmName = new FormControl('');

  constructor(private store:Store<State>) { }

  ngOnInit() {
    this.farms$ = this.store.pipe(select(selectFarms));
  }

  public createFarm():void{
    let farm:Farm = new Farm();

    farm.id= new Date().getMilliseconds();
    farm.name = this.farmName.value;
    farm.chickens=[];
    farm.cows=[];

    //ngrx
    this.store.dispatch(new AddFarm({farm:farm}));
    this.farmName.setValue('');
  }
}
