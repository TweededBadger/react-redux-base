import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import appReducer from './reducers'


let store = createStore(appReducer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)