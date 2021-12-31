import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../assets/logo3.svg'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';

export default function Navbar() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        <li className='logo'>
          <img src={Logo} alt="dino logo" />
          <span>The Project - zilla</span>
        </li>
        {!user && (
          <>
        <li><Link to="/login">Login</Link> </li>
        <li><Link to="/signup">Signup</Link> </li>
          </>
        )}

        {user && (
          <li>
          { !isPending && <button className="btn" onClick={logout}>Logout</button> }
          { isPending && <button className="btn" onClick={logout}>Logging...</button> }
          </li>
        )}
        </ul>
        
    </div>
  )
}
