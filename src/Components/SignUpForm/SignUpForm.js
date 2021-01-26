import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './SignUpForm.css'
import ApiService from '../APIService'
import ValidationError from '../ValidationError'


class SignUpForm extends Component {

    constructor(props) {
        super(props)
        this.state={
            name: {
                value: '',
                touched: false
            },
            email: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            },
            confirmPassword: {
                value: '',
                touched: false
            },
            hasError: false,
            error: ''
        }
    } 

    updateName(name) {
        this.setState({name: {value: name, touched: true}})
    }

    updateEmail(email) {
        this.setState({email: {value: email, touched: true}})
    }

    updatePassword(password) {
        this.setState({password: {value: password, touched: true}})
    }

    updateConfirmPassword(confirmPassword) {
        this.setState({confirmPassword: {value: confirmPassword, touched: true}})
    }

    validateName() {
        const name = this.state.name.value.trim()
        if (name.length === 0) {
            return 'Name is required'
        }
    }

    validateEmail() {
        const email = this.state.email.value.trim()
        if (email.length === 0) {
            return 'Email is required'
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim()
        if (password.length === 0) {
            return 'Password is required'
        }
        if (password.length < 8 || password.length > 72) {
            return 'Password must be between 8 and 72 characters'
        }
    }

    validateConfirmPassword() {
        const confirmPassword = this.state.confirmPassword.value.trim()
        const password = this.state.password.value.trim()

        if (confirmPassword !== password) {
            return 'Passwords do not match'
        }
    }



    render() {
        const user = {name: this.state.name.value, email: this.state.email.value, password: this.state.password.value} 
        const nameError = this.validateName()
        const emailError = this.validateEmail()
        const passwordError = this.validatePassword()
        const confirmPasswordError = this.validateConfirmPassword()
        
        return (
            <>
                <header>
                    <Link to='/'><h1>Giftwrap</h1></Link>
                </header>
                <div className='center'>
                    <img src='https://i.postimg.cc/hjh2dp6L/Person3-removebg-preview.png'></img>
                </div>
                <div className='background'>
                    <div className='SignUpDiv'>  
                    {this.state.hasError && <ValidationError message={this.state.error}/>}
                        <form className='SignUpForm' >
                            <div className='name'>
                                <label htmlFor='SignUp_name'>
                                    Name:
                                </label>
                                <input type='text'
                                name='name'
                                id='SignUp_name'
                                onChange={e => this.updateName(e.target.value)}/>
                                {this.state.name.touched && <ValidationError message={nameError}/>}
                            </div>
                            <div className='email'>
                                <label htmlFor='SignUp_email'>
                                    Email:
                                </label>
                                <input 
                                type='email'
                                name='email'
                                id='SignUp_email'
                                onChange={e => this.updateEmail(e.target.value)} />
                                {this.state.email.touched && <ValidationError message={emailError}/>}
                            </div>
                            <div className='password'>
                                <label htmlFor='SignUp_password'>
                                    Password:
                                </label>
                                <input 
                                type='password'
                                name='password'
                                id='SignUp_password' 
                                onChange={e => this.updatePassword(e.target.value)}/>
                                {this.state.password.touched && <ValidationError message={passwordError}/>}
                            </div>
                            <div className='confirmPassword'>
                                <label htmlFor='SignUp_confirmPassword'>
                                    Confirm Password:
                                </label>
                                <input 
                                type='password'
                                name='confirmPassword'
                                id='SignUp_confirmPassword'
                                onChange={e => this.updateConfirmPassword(e.target.value)}/>
                                {this.state.confirmPassword.touched && <ValidationError message={confirmPasswordError}/>}
                            </div>
                            <div className='button'>
                                <button type='submit' 
                                onClick={e => {
                                    try {
                                        ApiService.postUser(user)
                                        }
                                        catch(err) {
                                            this.setState({hasError: true, error: err})
                                        }
                                        }}
                                        disabled={
                                            this.validateName() ||
                                            this.validateEmail() ||
                                            this.validatePassword() ||
                                            this.validateConfirmPassword() 
                                        }>
                                        Sign Up
                                </button> 
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default SignUpForm