import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

import App from 'components/App'

const store = configureStore()

const ShippingApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<ShippingApp />, document.getElementById('root'))

// HMR
if (module.hot) {
  module.hot.accept()
}
