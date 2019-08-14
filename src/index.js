import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './home/app'
import Home from './home/home'
import TechOverview from './technical-overview/overview'
import About from './about/about'

render((
<Router history={hashHistory}>
    <Route path='/' component={App}>
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
