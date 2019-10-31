import React from 'react'
import NavLink from '../component/nav-link/nav-link'

export interface LayoutProps {
  children: string
}

function Layout({ children }: LayoutProps) {
  let style = require('./layout.less');
  return (
    <div className={style.app}>
      <header className={style.header}>
        <div className={style.headerInner}>
          <p>Nina's home</p>
          <ul>
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
      <div className={style.main}>
        {children}
      </div>
      <footer className={style.footer}>
        <div className={style.footerInner}>
          nina.wang@gmail.com
        </div>
      </footer>
    </div>
  )
}

export default Layout
