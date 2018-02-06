import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Name } from '@app-core/models';
import {Store, ActionsSubject} from '@ngrx/store';

import {State} from '../store';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import * as fromNames from '@app-names-store'
import * as namesActions from '@app-names-store/actions/names-actions'


@Component({
  selector: 'app-name-edit',
  templateUrl: './name-edit.component.html',
  styleUrls: ['./name-edit.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameEditComponent implements OnInit, OnDestroy {

  name$: Observable<Name>;
  redirectSub: Subscription;

  constructor(
      public store: Store<State>,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private actionsSubject: ActionsSubject

  ) { }

  ngOnInit() {

    this.name$ = this.store.select(fromNames.getCurrentName);

    this.redirectSub = this.actionsSubject
        .filter(action => action.type === namesActions.PATCH_SUCCESS)
        .filter((action: namesActions.PatchSuccess) => action.payload.id === +this.activatedRoute.snapshot.params['nameId'])
        .subscribe((action: namesActions.PatchSuccess) => this.router.navigate(['/names', action.payload.id]));

    this.activatedRoute.params.subscribe(params => {
      this.store.dispatch(new namesActions.Load(+params['nameId']));
    });

  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

  submitted(name: Name) {
    this.store.dispatch(new namesActions.Patch(name));
  }

}
