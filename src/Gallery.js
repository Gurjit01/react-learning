import React, { Component } from "react";
import './Gallery.css';

class Gallery extends Component{

    render(){
        return(
            <div className="gallery-container">
                <div classNamed="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        );
    }
}

export default Gallery;