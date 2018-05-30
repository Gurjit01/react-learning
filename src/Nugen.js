import React, {Component} from "react";
import Footer from './Footer';
import Menu from './Menu';
import MiddleContainer from './MiddleContainer';
import cookie from 'react-cookies';

import './Nugen.css';
const baseUrl= "http://localhost:3000";

class Nugen extends Component {
    constructor(props){
        super(props);
				if(cookie.load('token') === undefined){
					this.props.history.push('/');
				}
        this.state = {
            menus: ["Home","About","Contact","Gallery","Portfolio"]
        };
    }


    render() {
        return (
            <div className="container">
                <Menu menus={this.state.menus} />
                {/* <MiddleContainer baseUrl={this.props.baseUrl}/> */}
                <MiddleContainer  history={this.props.history} baseUrl={baseUrl}/>
                <Footer txt="TExt from parent component"/>
            </div>
        );
    }

}

export default Nugen;
