import React, { Component } from "react";
import './Footer.css';

class Footer extends Component{
    render (){
        return (
            <div className="footer">
                <h1>{ this.props.txt }</h1>
            </div>
        );
    }
}

export default Footer;