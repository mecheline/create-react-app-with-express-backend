import React from "react";
import {Link} from "react-router";

export default class Navigation extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">App</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/product">Product</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}