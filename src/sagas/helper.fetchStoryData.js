import { all, call, put } from 'redux-saga/effects';

export function* fetchStoryData(stories, key, api, actionName) {
    const results = yield all(stories?.map((story) => call(api.fetchStory, story)));
    yield put(actionName({ [key]: results, hashId: key }));
}
