import { useState } from "react"
import lotus from '../../assets/lotus.png';

export default function LoginPanel() {

  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => isActive ? setIsActive(false) : setIsActive(true);
  const dropDownClasses = () => {
    return isActive ? "dropdown is-right is-active" : "dropdown is-right"
  };

  const loginButton = (
    <button className="button login-button" onClick={toggleIsActive}>
      <strong>Log in</strong>
    </button>
  )

  const loginForm = (
    <form className="login-form form">
      <div>
        <label className="label white-text">Email</label>
        <input className="input" type="text"></input>
      </div>
      <div className="mt-10">
        <label className="label white-text">Password</label>
        <input className="input" type="password"></input>
      </div>
      <button className="button submit-button white-text" type="submit">
        <strong>Submit</strong>
      </button>
    </form>
  )

  return (
    <div className={dropDownClasses()}>
      <div className="dropdown-trigger">
        {loginButton}
      </div>
      <div className="dropdown-menu" role="menu">
        <div className="dropdown-content dropdown-content-container">
          <div className="dropdown-item dropdown-item-container">
            <img src={lotus} className="lotus-image" />
            <p className="title is-6 white-text">Log in to your Account</p>
            {loginForm}
          </div>
        </div>
      </div>
    </div>
  )
}
