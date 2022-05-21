import { call, put, take, select } from 'redux-saga/effects';
import api from '../api/api';
import { setStoriesSuccess, setStoriesFailed, getStoriesPerPageRequest } from '../redux/reducers/storiesReducer';
import { fetchStoryData } from './helper.fetchStoryData';

// getStoriesPerPageFlow saga handler
export function* getStoriesPerPageFlow() {
    while (true) {
        const { payload } = yield take(getStoriesPerPageRequest.type);
        const { pageNumber } = payload;
        const { storyIds, stories } = yield select((state) => state.stories);
        const isStoryExist = stories[pageNumber]?.length;

        try {
            if (isStoryExist) {
                yield put(setStoriesSuccess({ hashId: `${pageNumber}` }));
            }
            if (!isStoryExist) {
                yield call(fetchStoryData, storyIds[pageNumber - 1], `${pageNumber}`, api, setStoriesSuccess);
            }
        } catch (e) {
            yield put(setStoriesFailed(e.message));
        }
    }
}
