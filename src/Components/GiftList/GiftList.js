import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './GiftList.css'
import ApiService from '../APIService'
import config from '../../config'
import TokenService from '../TokenService'

class GiftList extends Component {
    
    constructor(props) {
        super(props)
        this.state= {
            name: '',
            gifts: [],
            hasError: false,
            error: ''
        }
    }
    
    componentDidMount() {
        const encodedKey = btoa('matt.roger.m@gmail.com:' + config.API_TOKEN)
        ApiService.getName(this.props.nameId, TokenService.getAuthToken())
        .then(res => {
            this.setState({name: res.name})
        })
        ApiService.getGifts()
        .then(res => {
            const filteredGifts = res.filter(gift => gift.name_id === parseInt(this.props.nameId))
            if (filteredGifts.length === 0) {
            }
            filteredGifts.map(gift => {
                return fetch(`https://cors-anywhere.herokuapp.com/https://api.urlmeta.org/?url=${encodeURIComponent(gift.url)}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Basic ${encodedKey}`,
                    },
                })
                .then(response => response.json())
                .then(ogRes => {
                    if(ogRes.result.status === "OK") {
                        let obj = {
                            description: ogRes.meta.description,
                            image: ogRes.meta.image,
                            title: ogRes.meta.title,
                            url: gift.url,
                            nameId: gift.name_id,
                            price: gift.price,
                            id: gift.id
                        }
                        this.setState({gifts: [...this.state.gifts, obj]})
                    }
                    else {
                        this.setState({
                            hasError: true, 
                            error: ogRes.result.reason
                        })
                    }
                })
            })
        })
    }

    handleDelete(giftId, event) {
        ApiService.deleteGift(giftId, TokenService.getAuthToken())
        .then(() => {
            this.setState({gifts: this.state.gifts.filter(gift => gift.id !== giftId)})
          })
          .catch(error => {
            this.setState({hasError: true, error: error})
          })
    }

    render() {
        const giftList = this.state.gifts
        return (
            <div className='GiftList'>
                <h2>{this.state.name}</h2>
                {this.state.gifts.length !== 0 ?  
                <ul>
                    {giftList.map((gift, i) => {
                        return <li key={i}>
                            {gift.image ? <img src={gift.image} width='200' height='200' alt='Not Found' /> : <img src='https://i.postimg.cc/wvZLTr3Z/Gift1-removebg-preview.png'/>}
                            <a href={gift.url} target='_blank' rel='noreferrer'><h2>{gift.title}</h2></a>
                            <p>{gift.description}</p>
                            <h3>${gift.price}</h3>
                            <button type='delete' 
                            onClick={e => this.handleDelete(gift.id, e)}>
                                Delete Gift
                            </button>
                        </li>
                    })}
                </ul> 
                : <div>Loading...</div>}
                <button>
                    <Link to={`/authenticated/${this.props.userId}/add_gift/${this.props.nameId}`}>Add Gift</Link>
                </button>
            </div>
        )
    }
}

export default GiftList