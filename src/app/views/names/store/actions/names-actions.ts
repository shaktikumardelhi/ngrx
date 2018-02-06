import {Action} from '@ngrx/store';
import { Name } from '@app-core/models';
import {Update} from '@ngrx/entity/src/models';


export const LOAD_ALL = '[Names] LOAD ALL';
export const LOAD_ALL_SUCCESS = '[Names] LOAD ALL SUCCESS';

export const LOAD = '[Names] LOAD';
export const LOAD_SUCCESS = '[Names] LOAD SUCCESS';

export const CREATE = '[Names] CREATE';
export const CREATE_SUCCESS = '[Names] CREATE SUCCESS';

export const PATCH = '[Names] PATCH';
export const PATCH_SUCCESS = '[Names] PATCH SUCCESS';

export const DELETE = '[Names] DELETE';
export const DELETE_SUCCESS = '[Names] DELETE SUCCESS';

export const FAILURE = '[Names] FAILURE';

export const SET_CURRENT_CONTACT_ID = '[Names] SET CURRENT CONTACT ID';

export class SetCurrentNameId implements Action {
  readonly type = SET_CURRENT_CONTACT_ID;
  constructor(public payload: number) {}
}

export class LoadAll implements Action {
  readonly type = LOAD_ALL;
  constructor(public payload = null) {}
}

export class Load implements Action {
  readonly type = LOAD;
  constructor(public payload: number) {}
}

export class Create implements Action {
  readonly type = CREATE;
  constructor(public payload: Name) {}
}


export class Patch implements Action {
  readonly type = PATCH;
  constructor(public payload: Name) {}
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public payload: number) {}
}

export class LoadAllSuccess implements Action {
  readonly type = LOAD_ALL_SUCCESS;
  constructor(public payload: Name[]) {}
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public payload: Name) {}
}

export class CreateSuccess implements Action {
  readonly type = CREATE_SUCCESS;
  constructor(public payload: Name) {}
}

export class PatchSuccess implements Action {
  readonly type = PATCH_SUCCESS;
  constructor(public payload: Update<Name>) {}
}

export class DeleteSuccess implements Action {
  readonly type = DELETE_SUCCESS;
  constructor(public payload: number) {}
}

export class Failure implements Action {
  readonly type = FAILURE;
  constructor (public payload: {concern: 'CREATE' | 'PATCH', error: any}) {}
}

export type All =
    | SetCurrentNameId
    | LoadAll
    | Load
    | Create
    | Patch
    | Delete
    | LoadAllSuccess
    | LoadSuccess
    | PatchSuccess
    | CreateSuccess
    | DeleteSuccess
    | Failure
