import{ ActionReducerMap} from '@ngrx/store';
import { pizzaReducer} from '../pizza/pizza.reducer'

// Add all reducers here
export const reducers: ActionReducerMap<any> ={
  pizza: pizzaReducer
}
