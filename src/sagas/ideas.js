import { put, takeLatest, call } from 'redux-saga/effects';
import { fetchAllIdeas, result, error } from '../components/App/actions';
import ideaService from '../services/idea';

export const fetchAllIdeasCall = async () => {
  try {
    const response = await ideaService.get();
    return await response.json();
  } catch (e) {
    catchError(e);
  }
};

export const catchError =  function* (e) {
  yield put(error(e));
};

export const getAllIdeas = function* () {
  const ideasAll = yield call(fetchAllIdeasCall);
  yield put(result(ideasAll));
};

export const ideasActionWatcher = function* () {
  yield takeLatest(fetchAllIdeas, getAllIdeas);
};