import './Nav.css';
import imgSrc from './imgs/Icon.png';
import { Link } from '@reach/router';
import UserInterface from 'types/user';

const Nav: React.FC<{ user: UserInterface; logOut: React.MouseEventHandler }> = ({ user, logOut }) => {
  return (
    <>
      <nav id="HOME" className="navbar navbar-expand-lg navbar-dark navbar-custom ">
        <Link to="/">
          <img className="navbar-brand logo-image" src={imgSrc} alt="badge" />
        </Link>

        <ul className="nav-ul navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/">
              <a className="nav-link page-scroll" href="#HOME">
                HOME <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-services nav-link page-scroll" href="/#SERVICES">
              SERVICES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-book nav-link page-scroll" href="/#BOOK">
              BOOK
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-contact nav-link page-scroll" href="/#CONTACT">
              CONTACT US
            </a>
          </li>

          <li className="nav-item">
            {Object.keys(user).length !== 0 ? (
              <>
                <Link to="/profile">
                  <button className="user-btn nav-btn">Welcome {user.name}</button>
                </Link>
                <Link to="/logOut">
                  <button onClick={logOut} className=" nav-btn">
                    Log Out
                  </button>
                </Link>
              </>
            ) : (
              <Link to="/login">
                <button className="nav-login nav-btn">LOG IN</button>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
