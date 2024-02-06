import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="link-items-container">
    <Link to="/" className="link-item">
      <li>Home</li>
    </Link>
    <Link to="/about" className="link-item">
      <li>About</li>
    </Link>
  </ul>
)

export default Header
