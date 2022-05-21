import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Header.css';

export default function Header({ refreshData, handleRefreshData, isDisableButton }) {
    return (
        <header className="header">
            <nav>
                <b>HackerNews</b>
                <Button
                    isDisabled={isDisableButton}
                    label="Refresh data"
                    handleButton={() => handleRefreshData(!refreshData)}
                />
            </nav>
        </header>
    );
}

Header.defaultProps = {
    isDisableButton: false,
    refreshData: false,
    handleRefreshData: () => null,
};

Header.propTypes = {
    isDisableButton: PropTypes.bool,
    refreshData: PropTypes.bool,
    handleRefreshData: PropTypes.func,
};
