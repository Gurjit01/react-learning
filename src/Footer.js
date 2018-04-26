import React, { Component } from "react";
import Heading from './Heading';
import './Footer.css';

class Footer extends Component{
    render (){
        return (
            <div className="footer">
                <h1>{ this.props.txt }</h1>
								<Heading title="Footer Content" author="Varun Sharma" id="2"/>
            </div>
        );
    }
}

export default Footer;
