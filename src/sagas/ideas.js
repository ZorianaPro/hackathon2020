import { put, all, takeLatest, fork, call } from 'redux-saga/effects';
import { actions, result, error } from '../components/Ideas/actions';
import ideaService from '../services/idea';

export const fetchIdeas = async () => {
    try {
        const response = await ideaService.get();
        return await response.json();
    } catch (e) {
        catchError(e)
    }
};

export function* catchError(e) {
    yield put(error(e))
}

export function* getIdeas() {
    const ideasAll = yield call(fetchIdeas);
    yield put(result(ideasAll))
}

export function* ideasActionWatcher() {
    yield takeLatest(actions.fetchAllIdeas, getIdeas)
}