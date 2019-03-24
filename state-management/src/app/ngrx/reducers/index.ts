import {
  ActionReducerMap,
} from '@ngrx/store';
import {Farm} from "../../models/farm";
import {Chicken} from "../../models/chicken";
import {Cow} from "../../models/cow";
import {farmReducer, FarmState} from "./farm.reducer";


export interface State {
  farm:FarmState,
  //chicken:{[id:number]:Chicken},
  //cow:{[id:number]:Cow}
}

export const reducers: ActionReducerMap<State> = {
  farm:farmReducer,

};

// ------------------ SELECTORS ------------------------------ //

export const selectFarms = (state:State)=>{
  return Object.keys(state.farm).map((id:string)=>state.farm[id]);
}



