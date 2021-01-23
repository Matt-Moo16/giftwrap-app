import React from 'react'
import ReactDOM from 'react-dom'
import AddGift from './AddGift'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddGift />, div);
    ReactDOM.unmountComponentAtNode(div);
})