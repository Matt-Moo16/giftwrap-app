import React, {Component} from 'react'
import ApiService from '../APIService'
import TokenService from '../TokenService'
import ValidationError from '../ValidationError'

class AddName extends Component {

    constructor(props) {
        super(props)
        this.state={
            name: {
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

    validateName() {
        const name = this.state.name.value.trim()
        if(name.length === 0) {
            return 'Name is required'
        }
    }

    handleSubmit(event) {
        event.preventDefault()
       const name = this.state.name.value
       
        ApiService.postName(name, TokenService.getAuthToken(), parseInt(this.props.userId))
        .then(response => {
            if (response.error) {
                this.setState({hasError: true, error: response.error}) 
            } 
            else {
                var getUrl = window.location;
                var baseUrl = getUrl.protocol + "//" + getUrl.host + `/authenticated/${this.props.userId}`;
                window.location.href = baseUrl
            }
        })
    }

    render() {
        const nameError = this.validateName()
        return (
            <div className='AddName'>
                {this.state.hasError && <ValidationError message={this.state.error}/>}
                <div className='background'>
                    <form>
                    <label htmlFor='name'>Name:</label> 
                    <input 
                    type='text'
                    name='name'
                    id='name'
                    onChange={e => this.updateName(e.target.value)}/>
                        {this.state.name.touched && <ValidationError message={nameError}/>}
                    <button type='submit' value='Add Name'
                    onClick={e => {
                        try {
                            this.handleSubmit(e)
                        }
                        catch(err) {
                            this.setState({hasError: true, error: err}) 
                        }
                        }
                    }
                    disabled={this.validateName()}>Add Name</button>
                    </form>
                </div>
            </div>
        )
    }
 
}

export default AddName