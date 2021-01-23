import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import TokenService from '../TokenService'
class Header extends Component {
    render() {
        return (
            <nav className='header'>
                <h1>
                    <Link to={`/authenticated/${this.props.userId}`}>
                        Giftwrap
                    </Link>
                </h1>
                <button onClick={e => TokenService.clearAuthToken()}>
                    <Link to='/'>
                        Sign Out
                    </Link>
                </button>
            </nav>
        )
    }
}

export default Header