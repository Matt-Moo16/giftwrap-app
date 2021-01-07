import React from 'react'
import { Link } from 'react-router-dom'
import './SignUpForm.css'


function SignUpForm() {
    return (
        <>
            <header>
                <h1><Link to='/'>Giftwrap</Link></h1>
            </header>
            <div className='SignUpDiv'>  
                <form className='SignUpForm'>
                    <div className='name'>
                        <label htmlFor='SignUp_name'>
                            Name:
                        </label>
                        <input type='text'
                        name='name'
                        id='SignUp_name'/>
                    </div>
                    <div className='email'>
                        <label htmlFor='SignUp_email'>
                            Email:
                        </label>
                        <input 
                        type='email'
                        name='email'
                        id='SignUp_email'/>
                    </div>
                    <div className='password'>
                        <label htmlFor='SignUp_password'>
                            Password:
                        </label>
                        <input 
                        type='password'
                        name='password'
                        id='SignUp_password' /> 
                    </div>
                    <div className='confirmPassword'>
                        <label htmlFor='SignUp_confirmPassword'>
                            Confirm Password:
                        </label>
                        <input 
                        type='password'
                        name='confirmPassword'
                        id='SignUp_confirmPassword'/>
                    </div>
                    <div className='button'>
                        <input type='button' value='Sign Up' /> 
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUpForm