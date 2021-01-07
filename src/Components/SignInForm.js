import React from 'react';
import './SignInForm.css'
import {Link} from 'react-router-dom'



function SignInForm() {
    return (
        <>
            <header>
                <h1><Link to='/'>Giftwrap</Link></h1>
            </header>
            <form className='SignInForm'>
                <div className='email'>
                    <label htmlFor='SignIn_email'>
                        Email: 
                    </label>
                    <input
                    type='email' 
                    name='email'
                    id='SignIn_email'/>
                </div>
                <div className='password'>
                    <label htmlFor='SignIn_password'>Password:</label>
                    <input 
                    type='password'
                    name='password'
                    id='SignIn_password'/> 
                </div>
                <div className='button'>
                    <input type='button' value='Sign In' /> 
                </div>
            </form>
            <div className='link'>
                <Link to='/signUp'>Sign Up Here!</Link>
            </div>
         </> 
    );
}

export default SignInForm