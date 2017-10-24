import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from "react-router";
import './index.css';
import App from './component/App';
import About from "./component/About";
import Product from "./component/Product";
import NotFound from "./component/NotFound";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
        <Route path="*" component={NotFound} />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
