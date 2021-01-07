import React from 'react'
import { NavLink } from 'react-router-dom';
import './NamesList.css'

function NamesList(props) {
    return (
        <div className='NamesList'>
           <li>
               <ul>
                    <NavLink to='/user_id/name_id'>Name</NavLink>
               </ul>
           </li>
        </div>
    )
}

export default NamesList
