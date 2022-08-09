import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
    return (
        <div>
            <Link to='/'>
                <img src={logo} alt='cocktail db logo' className='logo' />
            </Link>
            <ul className='nav-links'>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
