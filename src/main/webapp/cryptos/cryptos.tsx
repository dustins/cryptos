import React, {Component} from 'react'
import Loadable from 'react-loadable'
import {NavLink, Route} from 'react-router-dom'
import {Navigation} from './navigation'
import HomeNavigation from './home/navigation'
import AboutNavigation from './about/navigation'


export interface CryptosComponentProps {
    name?: String,
    match?: any
}

export interface CryptosComponentState {
    name: String
}

const HomeLoadable = Loadable({
    loader: () => import(/* webpackChunkName: "home" */'./home/content'),
    loading: () => <div>Loading...</div>
});

const AboutLoadable = Loadable({
    loader: () => import(/* webpackChunkName: "about" */'./about/content'),
    loading: () => <div>Loading...</div>
});

const ExplorerLoadable = Loadable({
    loader: () => import(/* webpackChunkName: "explorer" */'./explorer'),
    loading: () => <div>Loading...</div>
});

export class CryptosComponent extends Component<CryptosComponentProps, CryptosComponentState> {
    render() {
        return <>
            <header>
                <div className="container">
                    <Navigation>
                        <HomeNavigation/>
                        <AboutNavigation/>
                        <NavLink to="/explorer" activeClassName="active"
                                 className="nav-item nav-link">Explorer</NavLink>
                        <NavLink to="/sign-in" activeClassName="active" className="nav-item nav-link">Sign In</NavLink>
                    </Navigation>
                </div>
            </header>

            <main className="container">
                <Route exact path="/" component={HomeLoadable}/>
                <Route path="/about" component={AboutLoadable}/>
                <Route path="/explorer" component={ExplorerLoadable}/>
            </main>

            <footer>
                <div className="container">
                    <div className="row">
                        <a href="/">&copy;Cryptos 2018</a>
                    </div>
                </div>
            </footer>
        </>
    }
}