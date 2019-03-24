import {Farm} from "../models/farm";

export class AddFarm {
  static readonly type = '[Farm] Add Farm';
  constructor(public farm:Farm) {}
}

export class DeleteFarms {
  static readonly type = '[Farm] Delete Farm';
  constructor() {}
}
