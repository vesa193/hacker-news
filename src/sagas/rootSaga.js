import { all, fork } from 'redux-saga/effects';
import { getInitialStoriesFlow } from './getInitialStoriesFlow';
import { getStoriesPerPageFlow } from './getStoriesPerPageFlow';
import { refreshStoriesListFlow } from './refreshStoriesListFlow';

export default function* rootSaga() {
    yield all([
        yield fork(getInitialStoriesFlow),
        yield fork(getStoriesPerPageFlow),
        yield fork(refreshStoriesListFlow),
    ]);
    // code after all-effect
}
