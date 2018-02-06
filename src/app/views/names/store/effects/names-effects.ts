import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';

import * as namesActions from '../actions/names-actions';


import {Actions, Effect} from '@ngrx/effects';
import { Name } from '@app-core/models';
import {NamesService} from '@app-core/services/names.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class NamesEffects {

  @Effect()
  loadAll$: Observable<Action> = this.actions$
      .ofType(namesActions.LOAD_ALL) 
      .startWith(new namesActions.LoadAll())
      .switchMap(() =>
          this.namesService.index() 
              .map((names: Name[]) => new namesActions.LoadAllSuccess(names))
      );

  @Effect()
  load$: Observable<Action> = this.actions$
      .ofType(namesActions.LOAD)
      .map( (action: namesActions.Load ) => action.payload)
      .switchMap((id) =>
          this.namesService.show(id)
              .mergeMap( (name: Name) => {
                return [
                    new namesActions.LoadSuccess(name),
                    new namesActions.SetCurrentNameId(name.id)
                ]
              })
      );

  @Effect()
  create$: Observable<Action> = this.actions$
      .ofType(namesActions.CREATE)
      .map((action: namesActions.Create) => action.payload)
      .switchMap((name) =>
          this.namesService.create(name)
              .map( (createdName: Name) => new namesActions.CreateSuccess(createdName))
              .catch(err => {
                alert(err['error']['error']['message']);
                return Observable.of(new namesActions.Failure({concern: 'CREATE', error: err}));
              })
      );

  @Effect()
  update$: Observable<Action> = this.actions$
      .ofType(namesActions.PATCH)
      .map((action: namesActions.Patch) => action.payload)
      .switchMap((name: Name) =>
          this.namesService.update(name)
              .map( (updatedName: Name) => new namesActions.PatchSuccess({id: updatedName.id, changes: updatedName}))
              .catch(err => {
                alert(err['error']['error']['message']);
                return Observable.of(new namesActions.Failure({concern: 'PATCH', error: err}));
              })
      );


  @Effect()
  destroy$: Observable<Action> = this.actions$
      .ofType(namesActions.DELETE)
      .map((action: namesActions.Delete) => action.payload)
      .switchMap((id: number) =>
          this.namesService.destroy(id)
              .map( () => new namesActions.DeleteSuccess(id))
      );

  constructor(
      private actions$: Actions,
      private namesService: NamesService
  ) {}


}
