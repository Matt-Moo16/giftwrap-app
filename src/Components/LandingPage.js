import React from 'react'
import NamesList from './NamesList'
import { Link } from "react-router-dom";
import './LandingPage.css'

function LandingPage() {
    return (
        <div className='LandingPage'>
            <NamesList /> 
            <button className='add_name_button'><Link to='/user_id/add_name'> Add Name</Link></button>
        </div>
    );
}

export default LandingPage