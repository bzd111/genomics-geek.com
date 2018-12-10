import React from 'react'

import createHistory from 'history/createBrowserHistory'
import { Provider as AlertProvider } from 'react-alert'
import { ApolloProvider } from 'react-apollo'
import { Router } from 'react-router-dom'

import AlertTemplate, { alertOptions } from 'shared/alert/template'
import AppBar from 'shared/app-bar'
import client from 'graphql/client'
import Routes from 'routes'


const history = createHistory()


const App = () => (
  <ApolloProvider client={client}>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Router history={history}>
        <React.Fragment>
          <AppBar />
          <Routes />
        </React.Fragment>
      </Router>
    </AlertProvider>
  </ApolloProvider>
)


export default App
