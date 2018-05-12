import * as actions from "./pizza.actions";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { createFeatureSelector } from "@ngrx/store";

export interface Pizza {
  id: string;
  size: string;
}

//pizza adapter
export const pizzaAdapter = createEntityAdapter<Pizza>();

export interface State extends EntityState<Pizza> {}

// inital State
const defaultPizza = {
  ids: ["123"],
  entities: {
    "123": {
      id: "123",
      size: "small"
    }
  }
};

export const initialState: State = pizzaAdapter.getInitialState(defaultPizza);

//Reducers

export function pizzaReducer(
  state: State = initialState,
  action: actions.PizzaActions
) {
  switch (action.type) {
  }
}
