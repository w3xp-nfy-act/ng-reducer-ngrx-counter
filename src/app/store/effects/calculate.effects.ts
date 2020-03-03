import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { ActionsUnion, increment, decrement, reset } from '../actions/calculate.actions';

@Injectable()
export class CounterEffects {

  constructor(private actions$: Actions<ActionsUnion>) { }

  @Effect({ dispatch: false })
  logger$ = this.actions$.pipe(
    ofType(increment.type, decrement.type, reset.type),
    tap(action => {
      console.log(action);
    }),
  )
}