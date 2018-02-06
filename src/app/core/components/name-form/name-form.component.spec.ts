import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameFormComponent } from './name-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('NameFormComponent', () => {
  let component: NameFormComponent;
  let fixture: ComponentFixture<NameFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameFormComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
