import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import { Name } from '@app-core/models';
import {ActionsSubject, Store} from '@ngrx/store';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';

import * as namesActions from '../store/actions/names-actions'
import * as fromRoot from '@app-root-store';

@Component({
  selector: 'app-name-new',
  templateUrl: './name-new.component.html',
  styleUrls: ['./name-new.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameNewComponent implements OnInit, OnDestroy {

  redirectSub: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private actionsSubject: ActionsSubject
  ) { }

  ngOnInit() {
    this.redirectSub = this.actionsSubject
        .asObservable()
        .filter(action => action.type === namesActions.CREATE_SUCCESS)
        .subscribe((action: namesActions.CreateSuccess) => this.router.navigate(['/names', action.payload.id]));

  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

  submitted(name: Name) {
    let flag = true;
    if (flag) {
      this.store.dispatch(new namesActions.Create(name));
    }
    
  }

}
