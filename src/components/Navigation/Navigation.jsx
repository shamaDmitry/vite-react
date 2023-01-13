import { NavLink } from "react-router-dom";

import './navStyle.css'

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink to={'/'} className='nav-item'>Home</NavLink>
      <NavLink to={'/shows'} className='nav-item'>Shows</NavLink>
      <NavLink to={'/gallery'} className='nav-item'>Gallery</NavLink>
    </nav>
  );
}

export default Navigation;