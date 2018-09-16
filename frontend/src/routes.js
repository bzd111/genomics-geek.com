import React from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'

import Home from 'pages/home'
import About from 'pages/about'
import Publications from 'pages/publications'
import Software from 'pages/software'
import Blog from 'pages/blog'
import Contact from 'pages/contact'


const Routes = () => (
  <Switch>
    <Redirect exact path="/" to="/app/" />
    <Route exact path="/app/" component={Home} />
    <Route exact path="/app/home/" component={Home} />
    <Route exact path="/app/about/" component={About} />
    <Route exact path="/app/publications/" component={Publications} />
    <Route exact path="/app/software/" component={Software} />
    <Route exact path="/app/blog/" component={Blog} />
    <Route exact path="/app/contact/" component={Contact} />
  </Switch>
)


export default Routes
