import { Component, OnInit } from '@angular/core';
import {select} from "@ngrx/store";
import {selectFarms, AppState} from "../../ngrx/reducers";
import {Farm} from "../../models/farm";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {Select, Store} from "@ngxs/store";
import {FarmState1} from "../../ngxs/farm.state";
import {AddFarm, DeleteFarms} from "../../ngxs/farm.action";

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  //farms$:Observable<Farm[]>;
  farmName = new FormControl('');
  @Select(FarmState1.farms) farms$:Observable<Farm[]>

  constructor(/*private store:Store<AppState>*/private store:Store) { }

  ngOnInit() {
    //this.farms$ = this.store.pipe(select(selectFarms));
  }

  public createFarm():void{
    let farm:Farm = new Farm();

    farm.id= new Date().getMilliseconds();
    farm.name = this.farmName.value;
    farm.chickens=[];
    farm.cows=[];
    /*
    //ngrx
    this.store.dispatch(new AddFarm({farm:farm}));
    */

    //ngxs
    this.store.dispatch(new AddFarm(farm))


    this.farmName.setValue('');
  }

  public deleteFarms():void{
    this.store.dispatch(new DeleteFarms());
  }
}
