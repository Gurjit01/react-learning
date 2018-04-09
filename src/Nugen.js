import React, {Component} from "react";
import Footer from './Footer';
import Menu from './Menu';
import MiddleContainer from './MiddleContainer';

import './Nugen.css';

class Nugen extends Component {

    render() {
        return (
            <div className="container">
                <Menu/>
                <MiddleContainer/>
                <Footer/>
            </div>
        );
    }

}

export default Nugen;