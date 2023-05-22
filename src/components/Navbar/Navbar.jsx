import LoginPanel from '../LoginPanel/LoginPanel';
import RegisterPanel from '../RegisterPanel/RegisterPanel';
import { Link } from 'react-router-dom';
import lotus from '../../assets/lotus.png';
import { useState } from 'react';
import './Navbar.scss';

export default function Navbar() {
  // This can be removed now I've added the store;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="navbar navbar-color" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={lotus} className='lotus-image' />
        </Link>
      </div >
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <RegisterPanel />
            <LoginPanel setLoginStatus={setIsLoggedIn} />
          </div>
        </div>
      </div>
    </nav >
  )
}
