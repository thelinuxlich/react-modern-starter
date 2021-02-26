import { Switch } from 'react-router-dom'
import React from 'react'
import SEO from '@americanexpress/react-seo'
import 'windi.css'
import './index.css'

import routes from './AutoRouting'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <SEO
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
