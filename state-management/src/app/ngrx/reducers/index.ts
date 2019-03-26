import {
  ActionReducerMap,
} from '@ngrx/store';
import {Farm} from "../../models/farm";
import {Chicken} from "../../models/chicken";
import {Cow} from "../../models/cow";
import {farmReducer} from "./farm.reducer";


export interface AppState {
  farms:Farm[],
  //chicken:{[id:number]:Chicken},
  //cow:{[id:number]:Cow}
}

export const reducers: ActionReducerMap<AppState> = {
  farms:farmReducer,

};

// ------------------ SELECTORS ------------------------------ //

export const selectFarms = (state:AppState)=>{
  return state.farms;
}



