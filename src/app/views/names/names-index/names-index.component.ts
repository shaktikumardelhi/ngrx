import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Name } from '@app-core/models';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';

import * as fromNames from '@app-names-store'
import * as namesActions from '@app-names-store/actions/names-actions'
import * as fromRoot from '@app-root-store';


@Component({
  selector: 'app-names-index',
  templateUrl: './names-index.component.html',
  styleUrls: ['./names-index.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NamesIndexComponent implements OnInit {

  names$: Observable<Name[]>;

  constructor(public store: Store<fromRoot.State>, private router: Router, private actR: ActivatedRoute) { }

  ngOnInit() {
    this.names$ = this.store.select(fromNames.getAllNames);
    this.store.dispatch(new namesActions.LoadAll());
  }

  editName(name: Name) {
    this.store.dispatch(new namesActions.SetCurrentNameId(name.id));
    this.router.navigate(['/names', name.id, 'edit'])
  }

  showName(name: Name) {
    this.store.dispatch(new namesActions.SetCurrentNameId(name.id));
    this.router.navigate(['/names', name.id])
  }

  deleteName(name: Name) {
    let flag = true;
    if (flag) {
      this.store.dispatch(new namesActions.Delete(name.id));
    }
  }

}
