import { createAction, union } from '@ngrx/store';

export const increment = createAction(
  '[Counter] Increment',
  (payload: number) => ({ payload })
);

export const decrement = createAction(
  '[Counter] DECREMENT',
  (payload: number) => ({ payload })
);

export const reset = createAction(
  '[Counter] Reset'
);

const actions = union({
  increment,
  decrement,
  reset,
});

export type ActionsUnion = typeof actions;
