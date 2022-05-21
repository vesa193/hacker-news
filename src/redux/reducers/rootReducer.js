import { combineReducers } from 'redux';
import storiesReducer from './storiesReducer';

export const rootReducer = combineReducers({
    stories: storiesReducer,
});
