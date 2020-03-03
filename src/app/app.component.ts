import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>{{subtitle}}</h2>
    <app-first></app-first>
    <app-second></app-second>
    <app-third></app-third>
    <p><br></p>
    <app-ngrx-ov-md></app-ngrx-ov-md>
  `,
  styles: []
})
export class AppComponent {
  title = 'State management with reducer pattern via NgRx.';
  subtitle = 'Example:';
}
