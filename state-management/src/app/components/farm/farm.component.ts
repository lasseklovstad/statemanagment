import { Component, OnInit } from '@angular/core';
import {select,Store} from "@ngrx/store";
import {selectFarms, AppState} from "../../ngrx/reducers";
import {Farm} from "../../models/farm";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {DeleteFarms, AddFarm} from '../../ngrx/actions/farm.action';


@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  farms$:Observable<Farm[]>;
  farmName = new FormControl('');



  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.farms$ = this.store.pipe(select(selectFarms));
  }

  public createFarm():void{
    let farm:Farm = new Farm();

    farm.id= new Date().getMilliseconds();
    farm.name = this.farmName.value;
    farm.chickens=[];
    farm.cows=[];

    this.store.dispatch(new AddFarm(farm))


    this.farmName.setValue('');
  }

  public deleteFarms():void{
    this.store.dispatch(new DeleteFarms());
  }
}
