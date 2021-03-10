import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import SingleProfile from './SingleProfile'

function App() {
  return (
      <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/person/:id'>
        <SingleProfile/>
      </Route>
      </Switch>
  )
}

export default App