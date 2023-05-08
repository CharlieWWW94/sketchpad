import LoginPanel from '../LoginPanel/LoginPanel';
import lotus from '../../assets/lotus.png';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#2F4858' }} className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src={lotus} style={{ width: 40, minHeight: 40 }} />
        </a>
      </div >

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button" style={{ backgroundColor: '#FA5252', border: 'none' }}>
              <strong style={{ color: 'white' }}>Sign up</strong>
            </a>
            <LoginPanel />
          </div>
        </div>
      </div>
    </nav >
  )
}
