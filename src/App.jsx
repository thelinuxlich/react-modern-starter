import { Switch } from 'react-router-dom'

import 'windi.css'
import './index.css'

import routes from './AutoRouting'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>{routes}</Switch>
    </div>
  )
}

export default App
