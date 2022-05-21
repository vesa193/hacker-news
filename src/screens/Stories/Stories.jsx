import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Paginator from '../../components/Paginator/Paginator';
import Story from '../../components/Story/Story';
import { getInitialStoriesRequest, getStoriesPerPageRequest } from '../../redux/reducers/storiesReducer';

export default function Stories() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { search } = useLocation();
    const pageParam = (search && +search.split('=')[1]) || 1;
    // eslint-disable-next-line no-console
    console.log('pageParam', pageParam);
    const { stories, storyIds } = useSelector((state) => state.stories);

    useEffect(() => {
        if (!storyIds?.length) {
            dispatch(getInitialStoriesRequest({ pageNumber: pageParam }));
        }
    }, [dispatch, pageParam, storyIds]);

    const handlePaginator = (direction, pageNumber) => {
        // eslint-disable-next-line no-console
        console.log('eg', direction, pageNumber);
        if (direction === 'next') {
            navigate({ pathname: '/stories', search: `?page=${pageNumber}` });
            dispatch(getStoriesPerPageRequest({ pageNumber }));
            return;
        }

        navigate({ pathname: '/stories', search: `?page=${pageNumber}` });
        dispatch(getStoriesPerPageRequest({ pageNumber }));
    };

    return (
        <div>
            <Header />
            <ul>
                {stories[pageParam]?.map((story, index) => (
                    <React.Fragment key={story.id}>
                        <Story story={story} index={index} />
                        <hr />
                    </React.Fragment>
                ))}
            </ul>
            <footer className="footer">
                <Paginator page={pageParam} handlePaginator={handlePaginator} />
            </footer>
        </div>
    );
}
