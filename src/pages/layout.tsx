import React from 'react'
import NavLink from '../component/nav-link/nav-link'

export interface LayoutProps {
  children: string
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="app">
      <header className="header">
        <p>Nina's home</p>
        <ul className="nav">
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
        {children}
      </div>
      <footer>
        页脚
      </footer>
    </div>
  )
}

export default Layout
