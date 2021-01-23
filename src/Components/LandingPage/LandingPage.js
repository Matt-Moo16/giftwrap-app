import React, {Component} from 'react'
import { Link, NavLink } from "react-router-dom";
import './LandingPage.css'
import ApiService from '../APIService'


class LandingPage extends Component {

    constructor(props) {
        super(props) 
        this.state={
            names: [],
            hasError: true,
            error: ''
        }
    }

    componentDidMount() {
        ApiService.getNames()
        .then(res => {
            const usersNames = res.filter(name => name.user_id === parseInt(this.props.userId))
            this.setState({names: usersNames})
        })
        .catch(err => {
            this.setState({hasError: true, error: err})
        })
    }


    render() {
        return (
            <div className='LandingPage'>
                <div className='NamesList'>
                    <ul>
                        {this.state.names ? (
                            this.state.names.map((nme, i) => {
                                return <li key={i}>
                                    <NavLink to={`/authenticated/${this.props.userId}/${nme.id}/gifts`}
                                    id={nme.id}>
                                        <h2>{nme.name}</h2>
                                    </NavLink>
                                </li>
                        })) : <div>Loading...</div>}
                    </ul>
                </div>
                <button className='add_name_button'>
                        <Link to={`/authenticated/${this.props.userId}/add_name`}>
                         Add Name
                         </Link>
                </button>
            </div>
        );
    }
}

export default LandingPage