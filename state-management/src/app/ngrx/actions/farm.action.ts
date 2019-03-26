import {Action} from "@ngrx/store";
import {Farm} from "../../models/farm";

export enum FarmActionTypes {
  Add = '[Farm] Add',
  DeleteAll = '[Farm] Delete All',
}

export class AddFarm implements Action {
  readonly type = FarmActionTypes.Add;

  constructor(public payload: { farm: Farm }) {
  }
}

export class DeleteFarms implements Action {
  readonly type = FarmActionTypes.DeleteAll;

  constructor() {
  }
}

export type FarmActionUnion = AddFarm | DeleteFarms;
