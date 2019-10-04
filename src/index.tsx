import * as React from 'react'
import { render } from 'react-dom'
import './index.less'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Layout from './pages/layout'
import Home from './pages/home/home'
import TechOverview from './pages/technical-overview/overview'
import About from './pages/about/about'

render((
<Router history={hashHistory}>
    <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='/tech-overview' component={TechOverview} />
        <Route path='/about' component={About} />
    </Route>
</Router>),
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
