import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './StyleSheets/Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { VscAccount } from "react-icons/vsc";
import logo from '../images/Logo.png'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [open, setOpen] = useState(false);
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/" >
                <img src={logo} alt='ULingual Logo' />
                </Link>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               
            <div className="nav-search-item">
                <form name="search">
                    <input type="text" placeholder="Search..."></input>
                </form>
            </div>
                <li className="nav-item">
                    <Link to="/TutorsPage" >Tutors</Link>
                </li>
                <li className="nav-item">
                    <Link to= "/Pricing&Plans">Pricing & Plans</Link>
                </li>
                <li>
                    <div className='user-icon' onClick={()=>{setOpen(!open)}}>
                    <VscAccount size={40}/>
                    </div>
                    <div className={`drop-menu ${open? 'active' : 'inactive'}`}>
                        <ul>
                            <li className='drop-menu-item'>Dashboard</li>
                            <li className='drop-menu-item'>Profile</li>
                            <li className='drop-menu-item'>Sign Out</li>  
                        </ul>
                    </div>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={25} style={{ color: 'AAF0C1' }} />) : <FaBars size={25} style={{ color: 'AAF0C1' }} />}
            </div>
        </div>

    );
}

export default Navbar