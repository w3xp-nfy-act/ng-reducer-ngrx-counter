import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store';
import * as CounterActions from '../../store/actions/calculate.actions';

@Component({
  selector: 'app-second',
  template: `
    <h2>{{ title }} works!</h2>
    <div class="counter">
      <span>{{ counter$ | async }}</span>
    </div>
    <button (click)="decrement()">
      Decrement once
    </button>
  `,
  styles: []
})
export class DecrementComponent implements OnInit {
  title = 'DECREMENT component';

  counter$ = this.store.pipe(
    select(state => state.counter.counter),
  );

  constructor(private store: Store<AppState>) { }

  decrement() {
    this.store.dispatch(CounterActions.decrement(-1));
  }


  ngOnInit() { }
}
