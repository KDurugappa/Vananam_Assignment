import React, { useState } from 'react'
import { Link,useLocation } from 'react-router-dom';
import '../components/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPage = useLocation().pathname;

  console.log(currentPage);
  
  return (
    <>
      <div className='main-Navi'>
        <header className='header'>
          <div className='logo'>
            <Link to="/">
              <img src="https://cdn.prod.website-files.com/655ee83490ee606011d69523/658d456ecd9d5a68c7e4041c_Group.svg" alt="" />
            </Link>
          </div>
          <div className='test-search-bar'>
            <input type="text" placeholder='search...' />
            <button type='button'>Search</button>
          </div>
          <nav className='navbar'>
            <ul className={isOpen ? "display" : ""} >
              <div className="menu-bar" onClick={() => setIsOpen(false)}>
                <FontAwesomeIcon icon={faXmark} className='close-btn' />
              </div>
              <li className='nav-item'><Link to="/" className={currentPage === '/' ? 'active' : ' '} >Home</Link></li>
              <li className='nav-item'><Link to="/products" className={currentPage === '/products' ? 'active' : ' '}>Products</Link></li>
              <li className='nav-item'><Link to="/about" className={currentPage === '/about' ? 'active' : ' '}>About</Link></li>
              <li className='nav-item'><Link to="/contact" className={currentPage === '/contact' ? 'active' : ' '}>Contact</Link></li>
            </ul>
          </nav>
          <div className="menu-bar" onClick={() => setIsOpen(true)}>
            <FontAwesomeIcon icon={faBars} className='menu-btn' />
            
          </div>
        </header>
      </div>
    </>
  )
}

export default Header;
