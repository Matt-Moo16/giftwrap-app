import React from 'react'
import { Link } from 'react-router-dom'
import './GiftList.css'

function GiftList(props) {
    return (
        <div className='GiftList'>
            <h2>Name</h2>
            <li>
                <ul>
                    <img src='#' alt='Image from OG Tag' />
                    <h2>Title from OG Tag</h2>
                    <a href='#' target='_blank'>Link from OG Tag</a>
                    <p>Description from OG Tag</p>
                    <h3>Price</h3>
                    <button type='delete'>Delete Gift</button>
                </ul>
            </li>
            <button>
                <Link to='/user_id/add_gift'>Add Gift</Link>
            </button>
        </div>
    )
}

export default GiftList