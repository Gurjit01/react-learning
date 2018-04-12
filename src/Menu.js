import React, {Component} from "react";
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        console.log("menu Component's constructor fired");
    }

    componentWillMount() {
        console.log("menu Component's component will mount fired");
    }
    componentDidMount() {
        console.log("Component has mounted");

    }
    componentDidCatch() {
        console.log("Error in component");
    }
    render() {
        console.log("Render function fired");
        return (
            <div className="row">
                <div className="logo-container"></div>
                <div className="menu-container">
                    {this
                        .props
                        .menus
                        .map((menu, i) => {
                            return (
                                <div className="menu" key={i}>
                                    <div>
                                        {menu.toUpperCase()}
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