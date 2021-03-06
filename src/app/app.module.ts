import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './store';

import { IncrementComponent, DecrementComponent, ResetComponent } from './totalizator';
import { AppMarkdownComponent, } from './app-md.component';

import { CounterEffects } from './store/effects/calculate.effects';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    IncrementComponent,
    DecrementComponent,
    ResetComponent,
    AppMarkdownComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CounterEffects]),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
