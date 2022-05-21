import { all, fork } from 'redux-saga/effects';
import { getInitialStoriesFlow } from './getInitialStoriesFlow';
import { getStoriesPerPageFlow } from './getStoriesPerPageFlow';

export default function* rootSaga() {
    yield all([yield fork(getInitialStoriesFlow), yield fork(getStoriesPerPageFlow)]);
    // code after all-effect
}
