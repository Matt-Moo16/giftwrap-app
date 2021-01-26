import React, {Component} from 'react';
import './SignInForm.css'
import {Link} from 'react-router-dom'
import ApiService from '../APIService'
import ValidationError from '../ValidationError'
import TokenService from '../TokenService'



class SignInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            },
            hasError: false,
            error: '',
            userIsAuthenticated: false,
            userId: 0,
        }
    }

    


    validateEmail() {
        const email = this.state.email.value.trim()
        if(email.length === 0) {
            return 'Email is required'
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim()
        if (password.length === 0) {
            return 'Password is required'
        }
    }

    updateEmail(email) {
        this.setState({email: {value: email, touched: true}})
    }

    updatePassword(password) {
        this.setState({password: {value: password, touched: true}})
    }

    handleSubmit(event) {
        event.preventDefault()
       const email = this.state.email.value
       const password = this.state.password.value
        ApiService.postLogin({email, password})
        .then(response => {
            if (response.error) {
                this.setState({hasError: true, error: response.error}) 
            } else {
                TokenService.saveAuthToken(response.authToken)
                this.setState({userIsAuthenticated: true, userId: response.userId})
                var getUrl = window.location;
                var baseUrl = getUrl.protocol + "//" + getUrl.host + `/authenticated/${this.state.userId}`;
                window.location.href = baseUrl
            }

        })
        .catch((response) => {
            this.setState({hasError: true, error: response.error}) 
        })
    }
    

    render() {
        const emailError = this.validateEmail()
        const passwordError = this.validatePassword()
        return (
            <>
                <header>
                    <Link to='/'><h1>Giftwrap</h1></Link>
                </header>
                <div className='center'>
                    <img src='https://i.postimg.cc/kgY4mb2h/Person1-removebg-preview.png'></img>
                </div>
                <div className='background'>
                    <div className="SignInDiv">
                        {this.state.hasError && (<ValidationError message={this.state.error}/>)}
                        <form className='SignInForm' >
                            <div className='email'>
                                <label htmlFor='SignIn_email'>
                                    Email: 
                                </label>
                                <input
                                type='email' 
                                name='email'
                                id='SignIn_email'
                                onChange={e => this.updateEmail(e.target.value)}/>
                                {this.state.email.touched && (<ValidationError message={emailError}/>)}
                            </div>
                            <div className='password'>
                                <label htmlFor='SignIn_password'>Password:</label>
                                <input 
                                type='password'
                                name='password'
                                id='SignIn_password'
                                onChange={e => this.updatePassword(e.target.value)}/> 
                                {this.state.password.touched && (<ValidationError message={passwordError}/>)}
                            </div>
                            <div className='sign-in-button'>
                                <button type='submit' 
                                disabled={this.validateEmail() || this.validatePassword()}
                                onClick={e => this.handleSubmit(e)}>Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
                    <div className='link'>
                        <button>
                            <Link to='/signUp'>Sign Up Here!</Link>
                        </button>
                    </div>
                
            </> 
        );
    }
}

export default SignInForm