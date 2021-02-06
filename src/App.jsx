import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './index.css'

import Nav from './components/Nav'

import Home from './views/Home'
import About from './views/About'
import NotFound from './views/NotFound'

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App
