import {Action} from "@ngrx/store";
import {Farm} from "../../models/farm";

export enum FarmActionTypes {
  Add = '[Farm] Add',
}

export class AddFarm implements Action {
  readonly type = FarmActionTypes.Add;

  constructor(public payload: { farm:Farm}) {}
}

export type FarmActionUnion = AddFarm;
