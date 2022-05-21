import { all, fork } from 'redux-saga/effects';
import { fetchInitialStoriesFlow } from './getStoriesFlow';

export default function* rootSaga() {
    yield all([yield fork(fetchInitialStoriesFlow)]);
    // code after all-effect
}
