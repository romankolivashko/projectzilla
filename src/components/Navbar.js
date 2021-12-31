import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../assets/logo2.svg'

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className='logo'>
          <img src={Logo} alt="dino logo" />
          <span>The Project - zilla</span>
        </li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  )
}
