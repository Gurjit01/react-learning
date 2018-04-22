import React, {Component} from "react";
import Footer from './Footer';
import Menu from './Menu';
import MiddleContainer from './MiddleContainer';

import './Nugen.css';

class Nugen extends Component {
    constructor(props){
        super(props);
        this.state = {
            menus: ["Home","About","Contact","Gallery","Portfolio"]
        };
    }
		

    render() {
        return (
            <div className="container">
                <Menu menus={this.state.menus} />
                <MiddleContainer/>
                <Footer txt="TExt from parent component"/>
            </div>
        );
    }

}

export default Nugen;
