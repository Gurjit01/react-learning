import React, {Component} from "react";
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuNumber: 5,
            userName: 'Varun'
        };
        console.log("menu Component's constructor fired");
    }

    componentWillMount() {
        console.log("menu Component's component will mount fired");
    }
    componentDidMount() {
        console.log("Component has mounted");
        this.setState({menuNumber: 7});
        this.menuFunction();
    }
    menuFunction = () => {
        console.log("Menu function called");
    }
    componentDidCatch() {
        console.log("Error in component");
    }

    changeState = () =>{
        this.setState({
            menuNumber: this.state.menuNumber + 1
        });
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
                                    <div onClick={this.menuFunction}>
                                        {menu.toUpperCase()}
                                        {this.state.menuNumber}
                                        <input type="text" onKeyUp={this.changeState}/>
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