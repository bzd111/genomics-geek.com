import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from 'pages/home'
import About from 'pages/about'
import Publications from 'pages/publications'
import Software from 'pages/software'
import Blog from 'pages/blog'
import Contact from 'pages/contact'


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home/" component={Home} />
    <Route exact path="/about/" component={About} />
    <Route exact path="/publications/" component={Publications} />
    <Route exact path="/software/" component={Software} />
    <Route exact path="/blog/" component={Blog} />
    <Route exact path="/contact/" component={Contact} />
  </Switch>
)


export default Routes
