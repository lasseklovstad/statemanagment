import {
  ActionReducerMap,
} from '@ngrx/store';
import {Farm} from "../../models/farm";
import {Chicken} from "../../models/chicken";
import {Cow} from "../../models/cow";
import {farmReducer, FarmState} from "./farm.reducer";


export interface AppState {
  farm:FarmState,
  //chicken:{[id:number]:Chicken},
  //cow:{[id:number]:Cow}
}

export const reducers: ActionReducerMap<AppState> = {
  farm:farmReducer,

};

// ------------------ SELECTORS ------------------------------ //

export const selectFarms = (state:AppState)=>{
  return Object.keys(state.farm).map((id:string)=>state.farm[id]);
}



