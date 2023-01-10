import { Link } from "react-router-dom";

import './navStyle.css'

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to={'/home'} className='nav-item'>Home</Link>
      <Link to={'/gallery'} className='nav-item'>Gallery</Link>
    </nav>
  );
}

export default Navigation;