import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function Paginator({ page, handlePaginator }) {
    const { storyIds } = useSelector((state) => state.stories);
    let pageNumber = page;
    const limit = storyIds.length;

    return (
        <div>
            <button
                type="button"
                disabled={pageNumber === 1}
                onClick={() => handlePaginator('prev', (pageNumber -= 1))}
            >
                PREV
            </button>
            <button
                type="button"
                disabled={pageNumber === limit}
                onClick={() => handlePaginator('next', (pageNumber += 1))}
            >
                NEXT
            </button>
        </div>
    );
}

Paginator.defaultProps = {
    page: 1,
    handlePaginator: () => null,
};

Paginator.propTypes = {
    page: PropTypes.number,
    handlePaginator: PropTypes.func,
};
