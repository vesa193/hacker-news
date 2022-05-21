import { call, put, take } from 'redux-saga/effects';
import api from '../api/api';
import {
    getInitialStoriesRequest,
    setStoryIdsSuccess,
    setStoriesSuccess,
    setStoriesFailed,
} from '../redux/reducers/storiesReducer';
import { chunkArray } from '../util/util';
import { fetchStoryData } from './helper.fetchStoryData';

// getInitialStoriesFlow saga handler
export function* getInitialStoriesFlow() {
    while (true) {
        const { payload } = yield take(getInitialStoriesRequest.type);
        const { pageNumber } = payload;
        try {
            const response = yield call(api.fetchStories);
            const chunkResponse = yield chunkArray(response);
            yield put(setStoryIdsSuccess(chunkResponse));
            yield call(fetchStoryData, chunkResponse[pageNumber - 1], `${pageNumber}`, api, setStoriesSuccess);
        } catch (e) {
            yield put(setStoriesFailed(e.message));
        }
    }
}
