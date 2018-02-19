import React from 'react'
import {NavLink} from 'react-router-dom'
import {NavigationProperties} from "../navigation";

export default class Navigation extends React.Component<NavigationProperties,any> {
    render() {
        let path = this.props.path;
        return <NavLink activeClassName="active" exact className="nav-item nav-link" to="/">Home</NavLink>
    }
}