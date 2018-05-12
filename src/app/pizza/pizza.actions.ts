import { Action } from "@ngrx/store";
import { Pizza } from "./pizza.reducer";

export const CREATE :'[Pizzas] Create'='[Pizzas] Create'
export const UPDATE     = '[Pizzas] Update'
export const DELETE     = '[Pizzas] Delete'

export class Create implements Action {
  public readonly type = CREATE;
  constructor(public pizza: Pizza) { }
}

export class Update implements Action {
  type = UPDATE;
  constructor(public id: string, public changes: Partial<Pizza>) {}
}

export class Delete implements Action {
  type = DELETE;
  constructor(public id: string) {}
}

export type PizzaActions = Create | Update | Delete;
