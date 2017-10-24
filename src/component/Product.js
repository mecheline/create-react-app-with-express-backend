import React from "react";
import Navigation from "./Navigation";

export default class Product extends React.Component{
    render(){
        return(
            <div>
                <Navigation />
                <h1>This is the product page</h1>
                <p>Our products are reliable.</p>
            </div>
        )
    }
}