import React from 'react'
import ReactDOM from 'react-dom'
// import registerServiceWorker from './registerServiceWorker'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

import App from 'App'


const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)

if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(<NextApp />, rootElement)
  })
}

// registerServiceWorker()
