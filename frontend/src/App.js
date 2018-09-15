import React from 'react'

import createHistory from 'history/createBrowserHistory'
import Raven from 'raven-js'
import { Router } from 'react-router-dom'

import AppBar from 'shared/app-bar'
import Routes from 'routes'
import Footer from 'shared/footer'


if (process.env.NODE_ENV === 'production') {
  Raven.config(process.env.REACT_APP_SENTRY_URL).install()
}

const history = createHistory()


const App = () => (
  <Router history={history}>
    <div>
      <AppBar />
      <Routes />
      <Footer />
    </div>
  </Router>
)


export default App
