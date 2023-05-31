import './MyPadsButton.scss'
import { Link } from 'react-router-dom';
import { GiNotebook } from 'react-icons/gi';

export default function MyPadsButton() {
  return (
    <button
      className='button has-text-weight-bold is-rounded pad-button'
      style={{ border: 'none' }}
    >
      <Link className='pad-link' to="/pads_page">
        My Pads
        <GiNotebook size={25} style={{ marginLeft: 10 }} />
      </Link>
    </button>
  )
}
