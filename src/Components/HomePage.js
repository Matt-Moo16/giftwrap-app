import React from 'react'
import {Link} from 'react-router-dom'
import './HomePage.css'

function HomePage() {
    return (
        <div className='HomePage'>
            <header>
                <h1>Giftwrap</h1>
            </header>
            <p>Welcome to Giftwrap!! Our goal is to make sure that you never have to worry about what to get friends and family for Christmas ever again.</p>
            <Link to='/signIn'>Get Started</Link>
        </div>
    )
}

export default HomePage