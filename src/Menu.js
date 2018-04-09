import React, {Component} from "react";
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="row">
                <div className="logo-container"></div>
                <div className="menu-container">
                    <div className="menu">
                        <div>Home</div>
                    </div>
                    <div className="menu">
                        <div>About</div>
                    </div>
                    <div className="menu">
                        <div>Contact</div>
                    </div>
                    <div className="menu">
                        <div>Portfolio</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;