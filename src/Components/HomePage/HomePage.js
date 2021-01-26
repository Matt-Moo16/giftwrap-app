import React from 'react'
import {Link} from 'react-router-dom'
import './HomePage.css'

function HomePage() {
    return (
        <div className='HomePage'>
            <header>
                <h1>Giftwrap</h1>
            </header>
            <div className='diff-color'>
            <img src='https://i.postimg.cc/MGjWJr2v/Person2-removebg-preview.png' width='200'></img>
                <h2>Your all-in-one gift solution</h2>
                <p>Manage your Christmas, Holiday, Birthday or any other gifting occasion in one easy convient location.</p>
                <button >
                <Link to='/signIn'
                className='get-started'>Get Started</Link>
            </button>
            </div>
            <div>
                <h2>How It Works</h2>
            </div>
            <div className='image-div'>
                <div className='box'>
                    <h3>Add Names</h3>
                    <img src='https://i.postimg.cc/mrq4rxWQ/Lady-at-computer-removebg-preview.png'></img>
                </div>
                <div className='box'>
                    <h3>Add Gifts</h3>
                    <img src='https://i.postimg.cc/nr7X0cTc/Present2-removebg-preview.png'></img>
                </div>
                <div className='box'>
                    <h3>We Do The Rest</h3>
                    <img src='https://i.postimg.cc/dVskvF4D/People1-removebg-preview.png'></img>
                </div>
            </div>
            
            <img src='https://i.postimg.cc/4y8C9zkD/Flower1-removebg-preview.png' width='200'></img>
            <img className='confetti-image' src='https://i.postimg.cc/Ss31FD4N/Confetti-removebg-preview.png' width='200'></img>
        </div>
    )
}

export default HomePage