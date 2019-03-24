import {Action, Selector, State, StateContext} from "@ngxs/store";
import {FarmState} from "../ngrx/reducers/farm.reducer";
import {AddFarm, DeleteFarms} from "./farm.action";
import {Farm} from "../models/farm";

@State<FarmState>({
  name: 'farm',
  defaults: {}
})
export class FarmState1 {
  @Action(AddFarm)
  addFarm(ctx: StateContext<FarmState>, action: AddFarm) {
    ctx.setState({
      ...ctx.getState(),
      [action.farm.id]: action.farm
    })
  }
  @Action(DeleteFarms)
  deleteFarms(ctx:StateContext<FarmState>){
    ctx.setState({})
  }

  @Selector()
    static farms(state:FarmState){
    return Object.keys(state).map((id:string)=>state[id]);
  }

}
