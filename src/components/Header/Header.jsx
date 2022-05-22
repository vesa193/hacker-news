import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Header.css';

export default function Header({ handleRefreshData, isDisableButton }) {
    return (
        <header className="header">
            <nav>
                <b>HackerNews</b>
                <Button isDisabled={isDisableButton} label="Refresh data" handleButton={handleRefreshData} />
            </nav>
        </header>
    );
}

Header.defaultProps = {
    isDisableButton: false,
    handleRefreshData: () => null,
};

Header.propTypes = {
    isDisableButton: PropTypes.bool,
    handleRefreshData: PropTypes.func,
};
