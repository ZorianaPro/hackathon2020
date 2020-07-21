import { put, all, takeLatest, fork, call } from 'redux-saga/effects';
import { actions, result, error } from '../components/Ideas/actions';
import ideaService from '../services/idea';

export const fetchAllIdeas = async () => {
    try {
        const response = await ideaService.get();
        return await response.json();
    } catch (e) {
        catchError(e)
    }
};

export const fetchFakeIdeas = async () => {
    try {
        const response = await ideaService.ideasMock();
        return await response;
    } catch (e) {
        catchError(e)
    }
};

export function* catchError(e) {
    yield put(error(e))
}

export function* getAllIdeas() {
    const ideasAll = yield call(fetchAllIdeas);
    yield put(result(ideasAll))
}

export function* getFakeIdeas() {
    const ideasAll = yield call(fetchFakeIdeas);
    yield put(result(ideasAll))
}

export function* ideasActionWatcher() {
    yield takeLatest(actions.fetchAllIdeas, getAllIdeas);
    yield takeLatest(actions.fetchFakeIdeas, getFakeIdeas)
}