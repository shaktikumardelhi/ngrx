import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { Name } from '@app-core/models';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameFormComponent implements OnInit, OnChanges {

  @Input() name: Name = {
    id: undefined,
    name: '',
    surname: '',
    birthDate: '',
    phone: '',
    city: '',
    street: '',
    number: 0
  };

  @Output() onSubmit = new EventEmitter<Name>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'id': [this.name.id],
      'name': [this.name.name],
      'surname': [this.name.surname],
      'birthDate': [this.name.birthDate],
      'phone': [this.name.phone],
      'city': [this.name.city],
      'street': [this.name.street],
      'number': [this.name.number]
    })
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.name) {
      this.form.patchValue(this.name);
    }
  }

  submit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }

  }

}
