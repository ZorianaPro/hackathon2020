import { all } from 'redux-saga/effects';
import { ideasActionWatcher } from './ideas';

export default function* rootSaga() {
    yield all([ideasActionWatcher()]);
}
