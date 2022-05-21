import { createSlice } from '@reduxjs/toolkit';

export const storiesSlice = createSlice({
    name: 'stories',
    initialState: {
        storyIds: {},
        stories: {},
        errorMessage: '',
        isLoading: false,
    },
    reducers: {
        getInitialStoriesRequest: (state) => {
            state.isLoading = true;
        },
        getStoriesPerPageRequest: (state) => {
            state.isLoading = true;
        },
        refreshStoriesListRequest: (state) => {
            state.isLoading = true;
        },
        setStoryIdsSuccess: (state, action) => {
            state.storyIds = action.payload;
            state.isLoading = false;
        },
        setStoriesSuccess: (state, action) => {
            const { hashId, removeHashId } = action.payload;

            if (state.stories[hashId]) {
                state.isLoading = false;
                return;
            }

            if (removeHashId) {
                delete state.stories[removeHashId];
                return;
            }

            state.stories = { ...state.stories, [hashId]: action.payload[hashId] };
            state.isLoading = false;
        },
        setStoriesFailed: (state, action) => {
            state.errorMessage = action.payload.message;
            state.isLoading = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    getInitialStoriesRequest,
    getStoriesPerPageRequest,
    refreshStoriesListRequest,
    setStoryIdsSuccess,
    setStoriesSuccess,
    setStoriesFailed,
} = storiesSlice.actions;

export default storiesSlice.reducer;
