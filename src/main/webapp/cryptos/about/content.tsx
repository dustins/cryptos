import React, {Component} from 'react'
import {Route} from "react-router";

interface AboutComponentProperties {

}

export default class About extends Component<AboutComponentProperties,AboutComponentProperties> {

    constructor(props: AboutComponentProperties, context: any) {
        super(props, context);
    }

    render() {
        return <>
            <h2 className="row">About</h2>

            <Route component={About1} path="/about/about-1" />
            <Route component={About2} path="/about/about-2" />
        </>
    }
}

const About1 = () => {
    return <div className="row"><p>About 1</p></div>
};

const About2 = () => {
    return <div className="row"><p>About 2</p></div>
};