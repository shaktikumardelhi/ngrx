import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Name } from '@app-core/models';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameListComponent implements OnInit {


  @Input() names: Name[];
  @Output() onEdit = new EventEmitter<Name>();
  @Output() onDelete = new EventEmitter<Name>();

  namesTrackByFn = (index: number, name: Name) => name.id;

  constructor() {}

  ngOnInit() {}

  editName(name: Name) {
    this.onEdit.emit(name)
  }

  deleteName(name: Name) {
    this.onDelete.emit(name)
  }

}
