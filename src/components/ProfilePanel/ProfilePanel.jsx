import { CgProfile } from 'react-icons/cg';

export default function ProfilePanel() {
  return (
    // Implement a dropdown here, eventually.
    <button className="button is-rounded" style={{ display: 'flex', justifyContent: 'space-between', justifyItems: 'space-between', backgroundColor: 'transparent', borderWidth: 2 }}>
      <p className='has-text-weight-bold has-text-white'>My Account</p>
      <CgProfile color='white' size={25} style={{ marginLeft: 10 }} />
    </button>
  )
}
