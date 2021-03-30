import { takeEvery, put } from 'redux-saga/effects';

export enum LoadingType {
  SET_LOADING = 'SET_LOADING',
}

export interface LoadingActionIF {
  type: LoadingType;
}

export interface LoadingReducerIF {
  type: LoadingType;
  isLoading: boolean;
}

export interface LoadingResultIF {
  type: LoadingType;
  action: LoadingReducerIF;
}

const setLoading = (action: LoadingReducerIF): LoadingResultIF => ({ type: LoadingType.SET_LOADING, action });

const initialState = {
  isLoading: false,
  type: '',
};

const loadingReducer = (state = initialState, action: LoadingReducerIF) => {
  switch (action.type) {
    case LoadingType.SET_LOADING:
      return { ...state, isLoading: action.isLoading, type: action.type };
    default:
      return state;
  }
};

function* onSetLoading(action: LoadingReducerIF) {
  yield put(setLoading(action));
}

function* loadingSaga() {
  yield takeEvery(LoadingType.SET_LOADING, onSetLoading);
}

export { loadingReducer, setLoading, loadingSaga };
