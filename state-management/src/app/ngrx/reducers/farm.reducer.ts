import {Farm} from "../../models/farm";
import {FarmActionTypes, FarmActionUnion} from "../actions/farm.action";


export const initialFarmState:Farm[] = [];

export function farmReducer(
  state=initialFarmState,
  action:FarmActionUnion
):Farm[]{
  switch (action.type) {
    case FarmActionTypes.Add:
      return [...state,action.payload];
    case FarmActionTypes.DeleteAll:
      return [];
    default:
      return state;
  }
}
