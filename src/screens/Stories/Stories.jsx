import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import Story from '../../components/Story/Story';
import { getStoriesRequest } from '../../redux/reducers/storiesReducer';

export default function Stories() {
    const dispatch = useDispatch();
    const { stories } = useSelector((state) => state.stories);
    // const [stories, setStories] = useState([]);

    useEffect(() => {
        // fetchStories();
        dispatch(getStoriesRequest());
    }, [dispatch]);

    return (
        <div>
            <Header />
            <ul>
                {stories?.map((story, index) => (
                    <React.Fragment key={story.id}>
                        <Story story={story} index={index} />
                        <hr />
                    </React.Fragment>
                ))}
            </ul>
            <footer className="footer">
                <button type="button">PREV</button>
                <button type="button">NEXT</button>
            </footer>
        </div>
    );
}
