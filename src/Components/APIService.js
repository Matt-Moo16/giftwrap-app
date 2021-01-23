import config from '../config'

const ApiService = {
    postUser(user) {
        return fetch (`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(user),
        })
        .then(res => 
          res.json()
        )
    },
    postLogin({email, password}) {
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email, password}),
        })
        .then(res => 
            res.json()
        )
    },
    getNames() {
        return fetch(`${config.API_ENDPOINT}/names`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    getName(nameId, authToken) {
        return fetch (`${config.API_ENDPOINT}/names/${nameId}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + authToken,
                'content-type': 'application/json'
            },
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    getGifts() {
        return fetch(`${config.API_ENDPOINT}/gifts`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    postName(name, authToken, user_id) {
        return fetch(`${config.API_ENDPOINT}/names`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + authToken,
                'content-type': 'application/json',
            },
            body: JSON.stringify({name, user_id})
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    postGift(url, price, authToken, name_id) {
        return fetch(`${config.API_ENDPOINT}/gifts`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + authToken,
                'content-type': 'application/json'
            },
            //name_id, url, price
            body: JSON.stringify({name_id, url, price})
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    deleteGift(giftId, authToken) {
        return fetch(`${config.API_ENDPOINT}/gifts/${giftId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + authToken,
                'content-type': 'application/json'
            },
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
}

export default ApiService