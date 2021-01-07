import React from 'react'
import ReactDOM from 'react-dom'
import AddName from './AddName'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddName />, div);
    ReactDOM.unmountComponentAtNode(div);
})