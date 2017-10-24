import React from "react";
import Navigation from "./Navigation";

export default class About extends React.Component{
    render(){
        return(
            <div>
                <Navigation />
                <h1>This is the about page</h1>
            </div>
        )
    }
}