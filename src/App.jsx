import { Switch } from 'react-router-dom'
import React from 'react'
import Seo from '@americanexpress/react-seo'
import 'virtual:windi.css'
import './index.css'

import routes from './AutoRouting'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <Seo
        title='Lorem Ipsum'
        description='Lorem ipsum sat delor.'
        keywords={['foo', 'bar']}
        siteUrl='http://example.com'
        image={{
          src: 'http://example.com/foo.jpg'
        }}
      />
      <Nav />
      <Switch>{routes}</Switch>
    </div>
  )
}

export default App
