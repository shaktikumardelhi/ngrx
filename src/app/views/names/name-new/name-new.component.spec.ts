import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameNewComponent } from './name-new.component';
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromNames from '@app-names-store'
import {RouterTestingModule} from '@angular/router/testing';
import {Actions} from '@ngrx/effects';
import {NamesEffects} from '../store/effects/names-effects';
import {HttpClientModule} from '@angular/common/http';
import {NameFormComponent} from '@app-core/components/name-form/name-form.component';
import {NamesService} from '@app-core/services/names.service';
import * as fromRoot from '@app-root-store'


describe('NameNewComponent', () => {
  let component: NameNewComponent;
  let fixture: ComponentFixture<NameNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameNewComponent, NameFormComponent ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'names': combineReducers(fromNames.reducers)
        }),
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        NamesEffects,
        Actions,
        NamesService,
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
