import { useState } from "react"
import { useDispatch } from "react-redux";
import { loginToAccount } from "../../redux/slices/userSlice";
import lotus from '../../assets/lotus.png';
import './LoginPanel.scss'

export default function LoginPanel() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({})
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => isActive ? setIsActive(false) : setIsActive(true);
  const dropDownClasses = () => {
    return isActive ? "dropdown is-right is-active" : "dropdown is-right"
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const submitRegistration = async (e) => {
    e.preventDefault();
    const { username, pw } = inputs;
    if (pw.length && username.length) {
      dispatch(loginToAccount(username, pw));
    }
  };

  const loginButton = (
    <button className="button login-button" onClick={toggleIsActive}>
      <strong>Log in</strong>
    </button>
  )

  const loginForm = (
    <form className="login-form form" onSubmit={submitRegistration}>
      <div>
        <label className="label white-text">Username</label>
        <input
          name="username"
          className="input"
          type="text"
          onChange={handleChange}
        ></input>
      </div>
      <div className="mt-10">
        <label className="label white-text">Password</label>
        <input
          name="pw"
          className="input"
          type="password"
          onChange={handleChange}
        ></input>
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
