import React, {Component} from 'react';
import SignInForm from './Components/SignInForm/SignInForm'
import HomePage from './Components/HomePage/HomePage'
import {Route} from 'react-router-dom'
import SignUpForm from './Components/SignUpForm/SignUpForm'
import Header from './Components/Header/Header'
import LandingPage from './Components/LandingPage/LandingPage'
import AddName from './Components/AddName/AddName'
import GiftList from './Components/GiftList/GiftList'
import AddGift from './Components/AddGift/AddGift'
import './App.css'
import PrivateRoute from './Components/PrivateRoute'
import TokenService from './Components/TokenService'



class App extends Component { 
  
  render() {
    return (
      <main className='App'>
        <Route exact path='/' component={HomePage}/> 
        <Route path='/signIn' component={SignInForm}/> 
        <Route path='/signUp' component={SignUpForm}/>
        <PrivateRoute>
        <Route path='/authenticated/:user_id' render={
                (routeProps) => {
                const userId = routeProps.match.params.user_id
                return <Header userId={userId}/>
                }
              } />
        </PrivateRoute>
        <PrivateRoute >
          <Route exact path='/authenticated/:user_id/add_name' render={
                (routeProps) => {
                const userId = routeProps.match.params.user_id
                return <AddName userId={userId}/>
                }
              } />
        </PrivateRoute>
        <PrivateRoute >
          <Route exact path='/authenticated/:user_id/add_gift/:name_id' render={
              (routeProps) => {
                const nameId = routeProps.match.params.name_id
                const userId = routeProps.match.params.user_id
                return <AddGift userId={userId} nameId={nameId}/>
              }
            } />
        </PrivateRoute>
        <PrivateRoute>
            <Route exact path='/authenticated/:user_id/:name_id/gifts' render={
              (routeProps) => {
                const nameId = routeProps.match.params.name_id
                const userId = routeProps.match.params.user_id
                return <GiftList userId={userId} nameId={nameId}/>
              }
            } />
          </PrivateRoute>
        <PrivateRoute>
          <Route exact path='/authenticated/:user_id' render={
              (routeProps) => {
              const userId = routeProps.match.params.user_id
              return <LandingPage userId={userId}/>
              }
            } />
        </PrivateRoute>
      </main>
    );
  }
  
}

export default App;

//if hasAuthToken === true get user id and render components that has user id


