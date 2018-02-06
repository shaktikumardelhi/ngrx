import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as fromRoot from '@app-root-store'
import * as fromNames from '@app-names-store'
import { NamesIndexComponent } from './names-index.component';
import {combineReducers, StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import {NameListComponent} from '@app-core/components/name-list/name-list.component';


describe('NamesIndexComponent', () => {
  let component: NamesIndexComponent;
  let fixture: ComponentFixture<NamesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [ NamesIndexComponent, NameListComponent ],
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'names': combineReducers(fromNames.reducers)
        }),
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
