import React, { Children } from 'react'
import { Link } from 'react-router'

export interface NavLinkProps {
    to: string,
    children: string
}

export default function NavLink (props: NavLinkProps) {
    return (
        <Link {...props} activeClassName="active"></Link>
    )
}