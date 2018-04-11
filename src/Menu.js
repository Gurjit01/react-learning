import React, {Component} from "react";
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="row">
                <div className="logo-container"></div>
                <div className="menu-container">
                    {
                        this.props.menus
                        .map((menu) => {
                            return (
                                <div className="menu">
                                    <div>
                                        { menu.toUpperCase() }
                                    </div>
                                </div>
                            );
                        })
                    }

                   
                </div>
            </div>
        );
    }
}

export default Menu;