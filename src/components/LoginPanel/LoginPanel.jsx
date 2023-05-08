import { useState } from "react"
import lotus from '../../assets/lotus.png';

export default function LoginPanel() {

  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => isActive ? setIsActive(false) : setIsActive(true);
  const dropDownClasses = () => {
    return isActive ? "dropdown is-right is-active" : "dropdown is-right"
  };

  return (
    <div className={dropDownClasses()}>
      <div className="dropdown-trigger">
        <button className="button" style={{ backgroundColor: '#D7F3FF', border: 'none' }} onClick={toggleIsActive}>
          <strong>Log in</strong>
        </button>
      </div>
      <div className="dropdown-menu" role="menu">
        <div className="dropdown-content" style={{ backgroundColor: '#2F4858', width: '20rem' }}>
          <div className="dropdown-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={lotus} style={{ width: 40, minHeight: 40 }} />
            <p className="title is-6" style={{ color: "white" }}>Log in to your Account</p>
            <form className="form" style={{ width: '100%' }}>
              <div>
                <label className="label" style={{ color: "white" }}>Email</label>
                <input className="input" type="text"></input>
              </div>
              <div style={{ marginTop: 10 }}>
                <label className="label" style={{ color: "white" }}>Password</label>
                <input className="input" type="password"></input>
              </div>
              <button className="button" style={{ backgroundColor: '#FA5252', border: "none", marginTop: 20, width: "100%" }} type="submit">
                <strong style={{ color: "white" }}>Submit</strong>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
