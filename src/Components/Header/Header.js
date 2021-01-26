import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import TokenService from '../TokenService'
class Header extends Component {
    render() {
        return (
            <nav className='header'>
                    <Link to={`/authenticated/${this.props.userId}`}>
                        <h1>Giftwrap</h1>
                    </Link>
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