import React, {Component} from 'react'
import {Route, Switch} from "react-router";

interface AboutComponentProperties {
    match: any
}

export default class About extends Component<AboutComponentProperties,AboutComponentProperties> {

    constructor(props: AboutComponentProperties, context: any) {
        super(props, context);
    }

    render() {
        const title = this.props.match.params.id;
        
        return <>
            <Switch>
                <Route path="/about/1">
                    <AboutDetail title={title} />
                </Route>
                <Route path="/about/2">
                    <AboutDetail title={title} />
                </Route>
                
                <Route component={NoMatch} />
            </Switch>
        </>
    }
}

const AboutDetail = (props: any, route: any) => {
    return <>
        <h2 className="row">About {props.title}</h2>
        <div className="row"><p>About {props.title}</p></div>
    </>
};

const NoMatch = () => {
    return <h2 className="row">Unknown Route</h2>
}