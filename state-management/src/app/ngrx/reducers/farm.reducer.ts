import {Farm} from "../../models/farm";
import {FarmActionTypes, FarmActionUnion} from "../actions/farm.action";

export interface FarmState{
[id:number]:Farm;
}
export const initialFarmState:FarmState = {};

export function farmReducer(
  state=initialFarmState,
  action:FarmActionUnion
):FarmState{
  switch (action.type) {
    case FarmActionTypes.Add:
      return {...state,[action.payload.farm.id]:action.payload.farm};
    case FarmActionTypes.DeleteAll:
      return {};
    default:
      return state;
  }
}
