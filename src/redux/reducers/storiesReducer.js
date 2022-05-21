import { createSlice } from '@reduxjs/toolkit';

export const storiesSlice = createSlice({
    name: 'stories',
    initialState: {
        storyIds: {},
        stories: {},
        errorMessage: '',
    },
    reducers: {
        getInitialStoriesRequest: () => {},
        getStoriesPerPageRequest: () => {},
        setStoryIdsSuccess: (state, action) => {
            state.storyIds = action.payload;
        },
        setStoriesSuccess: (state, action) => {
            const { hashId } = action.payload;

            if (state.stories[hashId]) return;
            state.stories = { ...state.stories, [hashId]: action.payload[hashId] };
        },
        setStoriesFailed: (state, action) => {
            state.errorMessage = action.payload.message;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    getInitialStoriesRequest,
    getStoriesPerPageRequest,
    setStoryIdsSuccess,
    setStoriesSuccess,
    setStoriesFailed,
} = storiesSlice.actions;

export default storiesSlice.reducer;
