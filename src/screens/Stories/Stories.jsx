import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Paginator from '../../components/Paginator/Paginator';
import Story from '../../components/Story/Story';
import {
    getInitialStoriesRequest,
    getStoriesPerPageRequest,
    refreshStoriesListRequest,
} from '../../redux/reducers/storiesReducer';
import './Stories.css';

export default function Stories() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { search } = useLocation();
    const pageParam = (search && +search.split('=')[1]) || 1;
    const { stories, storyIds, isLoading } = useSelector((state) => state.stories);

    useEffect(() => {
        if (!storyIds?.length) {
            dispatch(getInitialStoriesRequest({ pageNumber: pageParam }));
        }
    }, [dispatch, pageParam, storyIds]);

    const handlePaginator = (direction, pageNumber) => {
        if (direction === 'next') {
            navigate({ pathname: '/stories', search: `?page=${pageNumber}` });
            dispatch(getStoriesPerPageRequest({ pageNumber }));
            return;
        }

        navigate({ pathname: '/stories', search: `?page=${pageNumber}` });
        dispatch(getStoriesPerPageRequest({ pageNumber }));
    };

    const handleRefreshData = () => {
        dispatch(refreshStoriesListRequest({ pageNumber: pageParam }));
    };

    return (
        <div>
            <Header isDisableButton={isLoading} handleRefreshData={handleRefreshData} />
            <ul className="story-list">
                {!isLoading &&
                    stories[pageParam]?.map((story, index) => (
                        <React.Fragment key={story.id}>
                            <Story story={story} index={index} />
                            <hr />
                        </React.Fragment>
                    ))}
                {isLoading && <p>Loading ...</p>}
            </ul>
            <footer className="footer">
                <Paginator isDisableButton={isLoading} page={pageParam} handlePaginator={handlePaginator} />
            </footer>
        </div>
    );
}
