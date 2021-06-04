import { Link } from 'react-router-dom';
import StyleHeader from './StyleHeader';

function Header() {
  return (
    <StyleHeader>
      <div className="header">
        <Link to="/">
          <figure>
            <img className="logo" src="/images/logo/logo.png" alt="" />
            <figcaption> WAYNE DANZA</figcaption>
          </figure>
        </Link>

        <ul>
          <li>
            <Link to="/Artist"> ARTIST </Link>
          </li>
          <li>
            <Link to="/Artworks"> ARTWORKS </Link>
          </li>
          <li>
            <Link to="/Show"> SHOW </Link>
          </li>
          <li>
            <Link to="/Press"> PRESS </Link>
          </li>
          <li>
            <Link to="/Contact"> CONTACT </Link>
          </li>
        </ul>
      </div>
    </StyleHeader>
  );
}

export default Header;
