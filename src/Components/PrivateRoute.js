import React from 'react'
import TokenService from './TokenService'
import {Redirect} from 'react-router-dom'



export default function PrivateRoute(props) {

    if (TokenService.hasAuthToken()) {
            const authToken = TokenService.getAuthToken()
            let base64Url = authToken.split('.')[1];
            let base64 = base64Url.replace('-', '+').replace('_', '/');
            const decodeToken = JSON.parse(atob(base64))

            let myregexp = /\/(\d+)/;
            let match = myregexp.exec(window.location.href);
            let result
            if (match != null) {
                result = match[1];
            } else {
                result = "";
            }

            if (parseInt(decodeToken.user_id) === parseInt(result)) {
                return props.children
            } else {
                TokenService.clearAuthToken()
                return <Redirect to={'/'}/>
            }
        }
    else {
        return <Redirect to={'/'}/>
    }

    
}