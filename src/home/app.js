import React from 'react'
import NavLink from './nav-link'

function App(props) {
  return (
    <div className="app">
      <header className="header">
        <p>Nina's home</p>
        <ul className="nav" role="nav">
          <li>
            <NavLink to="/">
              首页
            </NavLink>
          </li>
          <li>
            <NavLink to="/tech-overview">
              技术概览
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              关于我
            </NavLink>
          </li>
        </ul>
      </header>
      <div>
        {props.children}
      </div>
      <footer>
        页脚
      </footer>
    </div>
  )
}

export default App
