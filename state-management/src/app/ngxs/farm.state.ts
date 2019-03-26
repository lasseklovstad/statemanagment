import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AddFarm, DeleteFarms} from "./farm.action";
import {Farm} from "../models/farm";

export interface FarmStateModel {
  farms:Farm[];
}

@State<Farm[]>({
  name: 'farms',
  defaults: []
})
export class FarmState {
  @Action(AddFarm)
  addFarm(ctx: StateContext<Farm[]>, action: AddFarm) {
    const state = ctx.getState();
    ctx.setState([...state,action.farm])
  }

  @Action(DeleteFarms)
  deleteFarms(ctx:StateContext<Farm[]>){
    ctx.setState([])
  }

  @Selector()
    static farms(state:Farm[]){
    return state;
  }

}
