import { call, put, take, select } from 'redux-saga/effects';
import api from '../api/api';
import { setStoriesSuccess, setStoriesFailed, refreshStoriesListRequest } from '../redux/reducers/storiesReducer';
import { fetchStoryData } from './helper.fetchStoryData';

// refreshStoriesListFlow saga handler
export function* refreshStoriesListFlow() {
    while (true) {
        const { payload } = yield take(refreshStoriesListRequest.type);
        const { pageNumber } = payload;
        const { storyIds } = yield select((state) => state.stories);
        yield put(setStoriesSuccess({ removeHashId: pageNumber }));

        try {
            yield call(fetchStoryData, storyIds[pageNumber - 1], `${pageNumber}`, api, setStoriesSuccess);
        } catch (e) {
            yield put(setStoriesFailed(e.message));
        }
    }
}
