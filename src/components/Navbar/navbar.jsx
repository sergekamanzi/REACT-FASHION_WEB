import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav'>
      <div className='logo'><h2>Rivo</h2></div>
      
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className='links'>
        <ul className={isOpen ? 'active' : ''}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="">Shop</Link></li>
          <li><Link to="">Features</Link></li>
          <li><Link to="">Contacts</Link></li>
        </ul>
      </div>
      
      <div className='login'>
        <FaShoppingBag style={{ color: '#224F34', width: '32px', height: '32px' }} />
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
