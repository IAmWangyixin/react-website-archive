import React, { ReactNode } from 'react'
import { Link } from 'react-router'

export interface NavLinkProps {
    to: string,
    children: ReactNode
}

export default function NavLink (props: NavLinkProps) {
    return (
        <Link {...props} activeClassName="active"></Link>
    )
}