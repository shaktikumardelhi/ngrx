import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {SharedModule} from './core/modules/shared.module';

import * as fromRoot from '@app-root-store';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(fromRoot.reducers), 
    EffectsModule.forRoot([]), 
    StoreDevtoolsModule.instrument({ maxAge: 20 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
