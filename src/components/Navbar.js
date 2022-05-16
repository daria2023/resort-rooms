import React from 'react';
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import logo from '../images/logo.svg';

const Navbar = () => {
    
    const [isOpen,setIsOpen] = React.useState(false);
    const onButtonClick = ()=>{
        setIsOpen(!isOpen);
    }

  return (
    <nav className='navbar'>
        <div className='nav-header'>
            <Link to='/'><img src={logo} alt="logo" /></Link>
            <button className='nav-btn' onClick={onButtonClick}><FaBars className='nav-icon'/></button>
        </div>
         <ul className={`${isOpen ? 'nav-links show-nav' : 'nav-links'}`}>
            <Link to='/'>Home</Link>
            <Link to='/rooms'>Rooms</Link>
        </ul>
    </nav>
  )
}

export default Navbar