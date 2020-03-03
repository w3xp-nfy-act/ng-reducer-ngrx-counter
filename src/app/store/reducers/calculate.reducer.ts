import { ActionsUnion, increment, decrement, reset} from '../actions/calculate.actions';
import { State, initialState } from '../state/calculate.state';

// Create our reducer that will handle changes to the state
export function reducer(state = initialState, action: ActionsUnion): State {
  switch (action.type) {
    case increment.type: {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    case decrement.type: {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    case reset.type: {
      return {
        ...state,
        counter: 0,
      };
    }
    default: {
      return state;
    }
  }
}