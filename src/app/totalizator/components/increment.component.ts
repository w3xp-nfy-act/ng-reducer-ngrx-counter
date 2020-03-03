import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store';
import * as CounterActions from '../../store/actions/calculate.actions';

@Component({
  selector: 'app-first',
  template: `
    <h3>{{ title }} works!</h3>
    <div class="counter">
      <span>{{ counter$ | async }}</span>
    </div>
    <button (click)="increment()">
      Increment once
    </button>
  `,
  styles: []
})
export class IncrementComponent implements OnInit {
  title = 'INCREMENT component';

  counter$ = this.store.pipe(
    select(state => state.counter.counter),
  );

  constructor(private store: Store<AppState>) { }

  increment() {
    this.store.dispatch(CounterActions.increment(1));
  }


  ngOnInit() { }
}
