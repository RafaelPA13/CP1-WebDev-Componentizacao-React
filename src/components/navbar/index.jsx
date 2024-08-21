import { Link } from 'react-router-dom';
import './styles.css';
import PropTypes from 'prop-types';

function Navbar({ items, onMenuClick, selectedItem }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {items.map((item) => (
          <li key={item} className="navbar-item">
            <Link
              to={item === 'Home' ? '/' : item.toLowerCase()}
              className={`navbar-link ${
                selectedItem.toLowerCase() === item.toLowerCase() ? 'navbar-selected' : ''
              }`}
              onClick={() => onMenuClick(item)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  onMenuClick: PropTypes.func,
  selectedItem: PropTypes.string,
};

export default Navbar;
