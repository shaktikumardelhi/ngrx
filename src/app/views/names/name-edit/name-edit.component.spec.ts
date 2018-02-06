import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameEditComponent } from './name-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import * as fromNames from '@app-names-store'
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {Actions} from '@ngrx/effects';
import {NamesEffects} from '../store/effects/names-effects';
import {HttpClientModule} from '@angular/common/http';
import {NameFormComponent} from '@app-core/components/name-form/name-form.component';
import {NamesService} from '@app-core/services/names.service';
import * as fromRoot from '@app-root-store'


describe('NameEditComponent', () => {
  let component: NameEditComponent;
  let fixture: ComponentFixture<NameEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameEditComponent, NameFormComponent ],
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
        {
          provide: ActivatedRoute,
          useValue: {
            params: Observable.of({nameId: 1})
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
