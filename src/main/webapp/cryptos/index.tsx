import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom'

import {CryptosComponent} from './cryptos'

const container = document.getElementById("react");
ReactDOM.render((
    <Router>
        <Route path="/" component={CryptosComponent}/>
    </Router>
), container);