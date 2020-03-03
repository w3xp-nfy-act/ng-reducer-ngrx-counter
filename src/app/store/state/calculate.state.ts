import { createSelector } from '@ngrx/store';

export type State = {
  counter: number;
}

export const initialState: State = {
  counter: 0
};
