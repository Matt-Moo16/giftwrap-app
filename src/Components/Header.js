import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {

    return (
        <nav className='header'>
            <h1>
                <Link to='/user_id/home'>
                    Giftwrap
                </Link>
            </h1>
            <button>
                <Link to='/'>
                    Sign Out
                </Link>
            </button>
        </nav>
    )
}

export default Header