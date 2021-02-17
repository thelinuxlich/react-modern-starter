import { Route } from 'react-router-dom'

const routes = []

// a poor man's autorouting based on file structure. Home and NotFound components convention-based
const modules = import.meta.globEager('./views/**/*.jsx')
let NotFound = null
let Home = null
for (const path in modules) {
  const Mod = modules[path].default
  let exactPath = path
    .replace('./views', '')
    .replace(/.js[x]?/, '')
    .toLowerCase()
  const _path = exactPath.split('/')
  const routeName = _path[_path.length - 1]
  if (_path.length === 2 && routeName === 'home') {
    Home = Mod
  } else if (_path.length === 2 && routeName === 'notfound') {
    NotFound = Mod
  } else if (_path.length > 2 && routeName === 'index') {
    exactPath = exactPath.replace('index', '')
    routes.push(
      <Route exact path={exactPath} key={exactPath}>
        <Mod />
      </Route>
    )
  } else if (_path.length > 2 && routeName === '[id]') {
    exactPath = exactPath.replace('[id]', '')
    routes.push(
      <Route path={`${exactPath}:id`} key={`${exactPath}:id`}>
        <Mod />
      </Route>
    )
  } else {
    routes.push(
      <Route exact path={exactPath} key={exactPath}>
        <Mod />
      </Route>
    )
  }
}

// first route should be the Home component, if it exists
if (Home) {
  routes.unshift(
    <Route exact path='/' key='home'>
      <Home />
    </Route>
  )
}

// last route should be the NotFound component, if it exists
if (NotFound) {
  routes.push(
    <Route key='notfound'>
      <NotFound />
    </Route>
  )
}

export default routes
