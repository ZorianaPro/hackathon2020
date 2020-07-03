import { put, all, takeLatest, fork, call } from 'redux-saga/effects';
import { actions, result, error } from '../components/Ideas/actions';

export const fetchIdeas = async () => {
    try {
        const responce = await fetch(`http://localhost:8082/ideas`);
        return await responce.json();
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