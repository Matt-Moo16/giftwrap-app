import React from 'react';
import SignInForm from './Components/SignInForm'
import HomePage from './Components/HomePage'
import {Route} from 'react-router-dom'
import SignUpForm from './Components/SignUpForm'
import Header from './Components/Header'
import LandingPage from './Components/LandingPage'
import AddName from './Components/AddName'
import GiftList from './Components/GiftList'
import AddGift from './Components/AddGift'
import './App.css'


function App() {
  return (
    <main className='App'>
      <Route exact path='/' component={HomePage}/> 
      <Route path='/signIn' component={SignInForm}/> 
      <Route path='/signUp' component={SignUpForm}/>
      <Route path='/user_id' component={Header} />
      <Route exact path='/user_id/home' component={LandingPage}/>
      <Route path='/user_id/add_name' component={AddName} />
      <Route path='/user_id/name_id' component={GiftList} />
      <Route path='/user_id/add_gift' component={AddGift} />
      <h4>How To See All The Views</h4>
      <h5>Right now this is only a static app. So none of the buttons work and there is no functionality to the app.</h5>
      <ul>
        <li>
          To get to the sign in page click "Get Started"
        </li>
        <li>
          To get to the sign up page click "Sign Up Here"
        </li>
        <li>
          To get back to the home page click on "Giftwrap"
        </li>
        <li>
          After that we will have to change the endpoint to "/user_id/home".
        </li>
        <li>
          The "/user_id/home" endpoint is the endpoint for the landing page which will show after a user is signed in or that the user signed up.
        </li>
        <li>
          To get to the Add Name page click on "Add Name"
        </li>
        <li>
          At any time to get back to the landing page click on "Giftwrap"
        </li>
        <li>
          From the landing page to get to the list of gifts click on "Name". The "Name" link represents the names of people that users will be able to add.
        </li>
        <li>
          When you click on "Name" this will take users to the gift list page that will be specific to the name that they select.
        </li>
        <li>
          To get to the add gift page click "Add Gift"
        </li>
        <li>
          To get back to the home page users can click on "Sign Out"
        </li>
      </ul>
    </main>
  );
}

export default App;

