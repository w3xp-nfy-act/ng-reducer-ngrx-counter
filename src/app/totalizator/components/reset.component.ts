import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store';
import * as CounterActions from '../../store/actions/calculate.actions';

@Component({
  selector: 'app-third',
  template: `
    <h2>{{ title }} works!</h2>
    <div class="counter">
      <span>{{ counter$ | async }}</span>
    </div>
    <button (click)="reset()">
      Reset state
    </button>
  `,
  styles: []
})
export class ResetComponent implements OnInit {
  title = 'RESET component';

  counter$ = this.store.pipe(
    select(state => state.counter.counter),
  );

  constructor(private store: Store<AppState>) { }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }

  ngOnInit() { }

}
