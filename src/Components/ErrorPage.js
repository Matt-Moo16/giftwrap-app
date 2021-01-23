import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ErrorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    render() {
        if(this.state.hasError) {
            return (
                <>
                    <h1>Oops!! Something Went Wrong. Please try again!!</h1>
                </>
            )
        }
        return this.props.children
    }
}