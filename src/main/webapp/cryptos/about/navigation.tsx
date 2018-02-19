import React from 'react'
import {NavLink} from 'react-router-dom'

export default class Navigation extends React.Component<any, any> {
    render() {
        return <div className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" to="/about">About</NavLink>
            <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/about/1">About 1</NavLink>
                <NavLink className="dropdown-item" to="/about/2">About 2</NavLink>
                <NavLink className="dropdown-item" to="/about/4">About (Unknown)</NavLink>
            </div>
        </div>
    }
}