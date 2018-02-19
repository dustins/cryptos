import React from 'react';
import {Link} from 'react-router-dom'

export interface NavigationProperties {
    path?: string
}

export class Navigation extends React.Component {
    render() {
        let listItems = (this.props.children as Link[]).map((link) => link);

        return <div className="row">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand mb-0 h1" href="#">Cryptos</a>
                <div className="navbar-nav">
                    {listItems}
                </div>
            </nav>
        </div>
    }
}