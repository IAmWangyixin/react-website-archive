import React from 'react'
import NavLink from '../component/nav-link/nav-link'
import './layout.less'

export interface LayoutProps {
  children: string
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-inner">
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
        </div>      
      </header>
      <div className="app-main">
        {children}
      </div>
      <footer className="app-footer">
        <div className="app-footer-inner">
          nina.wang@gmail.com
        </div>
      </footer>
    </div>
  )
}

export default Layout
