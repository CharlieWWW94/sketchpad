import LoginPanel from '../LoginPanel/LoginPanel';
import RegisterPanel from '../RegisterPanel/RegisterPanel';
import { Link } from 'react-router-dom';
import lotus from '../../assets/lotus.png';
import { useSelector } from 'react-redux';
import { selectLoggedInState } from '../../redux/slices/userSlice';
import './Navbar.scss';

export default function Navbar() {
  const isLoggedIn = useSelector(state => selectLoggedInState(state))
  console.log('here', isLoggedIn);

  const userButtons = (
    <button className="button">
      User
    </button>
  );

  const noUserButtons = (
    <>
      <RegisterPanel />
      <LoginPanel />
    </>
  )

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
            {isLoggedIn ? userButtons : noUserButtons}
          </div>
        </div>
      </div>
    </nav >
  )
}
