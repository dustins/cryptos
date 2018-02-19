import React, {Component} from 'react'
import Loadable from 'react-loadable'
import {NavLink, Route} from 'react-router-dom'
import {Navigation} from './navigation'
import HomeNavigation from './home/navigation'
import AboutNavigation from './about/navigation'
import LoginComponent from './auth/login'


export interface CryptosComponentProps {
    name?: String,
    match?: any,
    history?: any
}

export interface CryptosComponentState {
    name: String,
    authenticated: boolean
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
    constructor(props: CryptosComponentProps) {
        super(props);
        
        this.state = {
            name: "Cryptos",
            authenticated: false
        }
    }
    
    
    
    render() {
        return <>
            <header>
                <div className="container">
                    <Navigation>
                        <HomeNavigation/>
                        <AboutNavigation/>
                        <NavLink to="/explorer" activeClassName="active"
                                 className="nav-item nav-link">Explorer</NavLink>
                        { this.state.authenticated && <NavLink to='/explorer-private' activeClassName="active" className="nav-item nav-link">Explorer (Private)</NavLink> }
                                 
                        { this.state.authenticated ?
                        <a href="#" className="nav-item nav-link" onClick={(e) => {e.preventDefault(); this.setState({authenticated: false}); this.props.history.push('/');}}>Log Out</a>
                        : <NavLink to="/login" activeClassName="active" className="nav-item nav-link">Sign In</NavLink>}
                    </Navigation>
                </div>
            </header>

            <main className="container">
                <Route exact path="/" component={HomeLoadable}/>
                <Route path="/about/:id" component={AboutLoadable}/>
                <Route path="/explorer" component={ExplorerLoadable}/>
                <Route path="/explorer-private" component={ExplorerLoadable}/>
                <Route path="/login" component={() =>{
                    return <div className="row">
                        <LoginComponent authenticated={this.state.authenticated} onLogin={() => this.setState({authenticated: true})} />
                    </div>
                }}/>
            </main>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <a href="/">&copy;Cryptos 2018</a>
                        </div>
                        <div className="col-2">
                            isAuthenticated: {this.state.authenticated ? 'yes' : 'no'}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    }
}