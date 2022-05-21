import { all, call, put, take } from 'redux-saga/effects';
import api from '../api/api';
import {
    getStoriesRequest,
    setStoryIdsSuccess,
    setStoriesSuccess,
    setStoriesFailed,
} from '../redux/reducers/storiesReducer';

function paginate(array, pageSize, pageNumber) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

export function* fetchStoryData(stories) {
    const results = yield all(stories.map((story) => call(api.fetchStory, story)));
    yield put(setStoriesSuccess(results));
}

const perChunk = 20; // items per chunk

const chunkArray = (inputArray) =>
    inputArray.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
    }, []);
// fetchStoriesFlow saga handler

export function* fetchInitialStoriesFlow() {
    while (true) {
        yield take(getStoriesRequest.type);
        try {
            const response = yield call(api.fetchStories);
            const chunkResponse = yield chunkArray(response);
            yield put(setStoryIdsSuccess(chunkResponse));
            yield call(fetchStoryData, chunkResponse[0]);
        } catch (e) {
            yield put(setStoriesFailed(e.message));
        }
    }
}
