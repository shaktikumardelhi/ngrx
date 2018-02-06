import * as fromNames from './reducers/names-reducer'
import * as fromRoot from '@app-root-store';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface NamesState {
  names: fromNames.State
}

export interface State extends fromRoot.State {
  names: NamesState
}

export const reducers = {
  names: fromNames.reducer
};

export const getNamesRootState = createFeatureSelector<NamesState>('names');

export const getNamesState = createSelector(
    getNamesRootState,
    state => state.names
);

export const getSelectedNameId = createSelector(
  getNamesState,
  fromNames.getCurrentNameId
);

export const {
  selectAll: getAllNames,
  selectEntities: getNameEntities
} = fromNames.namesAdapter.getSelectors(getNamesState);

export const getCurrentName = createSelector(
  getNameEntities,
  getSelectedNameId,
  (entities, id) => id && entities[id]
);
