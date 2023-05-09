import { useState } from "react"
import lotus from '../../assets/lotus.png';

export default function RegisterPanel() {

  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => isActive ? setIsActive(false) : setIsActive(true);
  const dropDownClasses = () => {
    return isActive ? "dropdown is-right is-active" : "dropdown is-right"
  };

  return (
    <div className={dropDownClasses()} style={{ marginRight: 10 }}>
      <div className="dropdown-trigger">
        <button className="button" style={{ backgroundColor: '#FA5252', border: 'none' }} onClick={toggleIsActive}>
          <strong style={{ color: 'white' }}>Sign up</strong>
        </button>
      </div>
      <div className="dropdown-menu" role="menu">
        <div className="dropdown-content" style={{ backgroundColor: '#fafafa', width: '20rem' }}>
          <div className="dropdown-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <img src={lotus} style={{ width: 40, minHeight: 40 }} />

            <strong className="title is-5 has-text-weight-bold" style={{ color: '#2F4858' }}>Create Account</strong>
            <article className="message is-primary">
              <div className="message-body" style={{ minWidth: '100%' }}>
                Sign up to access all our great features <strong>completely free</strong>.
              </div>
            </article>
            <form className="form" style={{ width: '100%' }}>
              <div>
                <label className="label" style={{ color: '#2F4858' }} >Email
                  <span style={{ color: '#FA5252' }}>*</span>
                </label>
                <input className="input" type="text"></input>
              </div>
              <div style={{ marginTop: 10 }}>
                <label className="label" style={{ color: '#2F4858' }}>Password
                  <span style={{ color: '#FA5252' }}>*</span>
                </label>
                <input className="input" type="password"></input>
              </div>
              <div style={{ marginTop: 10 }}>
                <label className="label" style={{ color: '#2F4858' }}>Confirm Password
                  <span style={{ color: '#FA5252' }}>*</span>
                </label>
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
