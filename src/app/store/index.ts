import { State as CounterState } from './state/calculate.state';
import { reducer as counterReducer } from './reducers/calculate.reducer';

export type AppState = {
  counter: CounterState
};

export const reducers = {
  counter: counterReducer
}