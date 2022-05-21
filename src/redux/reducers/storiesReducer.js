import { createSlice } from '@reduxjs/toolkit';

export const storiesSlice = createSlice({
    name: 'stories',
    initialState: {
        storyIds: {},
        stories: [],
        errorMessage: '',
    },
    reducers: {
        getStoriesRequest: () => {},
        setStoryIdsSuccess: (state, action) => {
            state.storyIds = action.payload;
        },
        setStoriesSuccess: (state, action) => {
            state.stories = action.payload;
        },
        setStoriesFailed: (state, action) => {
            state.errorMessage = action.payload.message;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getStoriesRequest, setStoryIdsSuccess, setStoriesSuccess, setStoriesFailed } = storiesSlice.actions;

export default storiesSlice.reducer;
