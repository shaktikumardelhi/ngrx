import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NamesComponent} from './names.component';
import {NameEditComponent} from './name-edit/name-edit.component';
import {NameNewComponent} from './name-new/name-new.component';
import {NamesIndexComponent} from './names-index/names-index.component';
import {SharedModule} from '@app-core/modules/shared.module';
import {NamesRoutingModule} from './names-routing.module';
import {StoreModule} from '@ngrx/store';
import * as fromNames from './store'
import {EffectsModule} from '@ngrx/effects';
import {NamesEffects} from './store/effects/names-effects';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NamesRoutingModule,
    StoreModule.forFeature('names', fromNames.reducers),
    EffectsModule.forFeature([NamesEffects])
  ],
  declarations: [
    NamesComponent,
    NameEditComponent,
    NameNewComponent,
    NamesIndexComponent
  ]
})
export class NamesModule { }
