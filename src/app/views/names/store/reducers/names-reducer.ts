import { Name } from '@app-core/models';
import {EntityState, createEntityAdapter} from '@ngrx/entity';
import * as namesActions from '@app-names-store/actions/names-actions'
import {Update} from '@ngrx/entity/src/models';

export const namesAdapter = createEntityAdapter<Name>({
  selectId: (name: Name) => name.id,
  sortComparer: false
});

export interface State extends EntityState<Name> {
  currentNameId?: number
}

export const INIT_STATE: State = namesAdapter.getInitialState({
  currentNameId: undefined
});



export function reducer(
  state: State = INIT_STATE,
  {type, payload}: namesActions.All
){

  switch (type) {

    case namesActions.SET_CURRENT_CONTACT_ID : {
      return {...state, currentNameId: payload}
    }


    case namesActions.LOAD_ALL_SUCCESS : {
      return {...state, ...namesAdapter.addAll(payload as Name[], state)}
    }

    case namesActions.LOAD_SUCCESS || namesActions.CREATE_SUCCESS : {
      return {...state, ...namesAdapter.addOne(payload as Name, state)}
    }

    case namesActions.PATCH_SUCCESS : {
      return {
        ...state,
        ...namesAdapter.updateOne(payload as Update<Name>, state)
      }
    }

    case namesActions.DELETE_SUCCESS : {
      return {...state, ...namesAdapter.removeOne(payload as number, state)}
    }

    default: {
      return state;
    }

  }
}

export const getCurrentNameId = (state: State) => state.currentNameId;
