import React, {Component} from 'react'
import ValidationError from '../ValidationError'
import ApiService from '../APIService'
import TokenService from '../TokenService'

class AddGift extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            url: {
                value: '',
                touched: false
            },
            price: {
                value: 0,
                touched: false
            },
            hasError: false,
            error: ''
        }
    }

    updateUrl(url) {
        this.setState({url: {value: url, touched:true}})
    }

    updatePrice(price) {
        this.setState({price: {value: price, touched: true}})
    }

    handleSubmit(event) {
        event.preventDefault()
        const gift = {url: this.state.url.value, price: this.state.price.value}
        ApiService.postGift(gift.url, gift.price, TokenService.getAuthToken(), this.props.nameId)
        .then(response => {
            if(response.error) {
                this.setState({hasError: true, error: response.error})
            }
            else {
                var getUrl = window.location;
                var baseUrl = getUrl.protocol + "//" + getUrl.host + `/authenticated/${this.props.userId}/${this.props.nameId}/gifts`;
                window.location.href = baseUrl
            }
        })
    }

    validateUrl() {
        const url = this.state.url.value.trim()
        if (url.length === 0 ) {
            return 'Url is required'
        }
    }

    validatePrice() {
        const price = this.state.price.value
        if (price.length === 0) {
            return 'Price is required'
        }
    }

    render() {
        const urlError = this.validateUrl()
        const priceError = this.validatePrice()
        return (
            <div className='AddGift'>
                {this.state.hasError && <ValidationError message={this.state.error}/>}
                <div className='background'>
                    <form>
                        <label htmlFor='AddGift_Url'>
                            URL:
                        </label>
                        <input
                        type='url'
                        name='url'
                        id='AddGift_Url'
                        placeholder='https://example.com'
                        onChange={e => this.updateUrl(e.target.value)}/>
                        {this.state.url.touched && <ValidationError message={urlError}/>}
                        <label htmlFor='AddGift_Price'>Price:</label>
                        <input 
                        type='number'
                        min='0.00'
                        max='100000.00'
                        step='0.01'
                        name='price'
                        id='AddGift_Price'
                        placeholder='$9.99'
                        onChange={e => this.updatePrice(e.target.value)}
                        />
                        {this.state.price.touched && <ValidationError message={priceError}/>}
                        <button type='submit'
                        onClick={e => {
                            try {
                                this.handleSubmit(e)
                            }
                            catch(err) {
                                this.setState({hasError: true, error: err})
                            }
                        }}>Add Gift</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddGift