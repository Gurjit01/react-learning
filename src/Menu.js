import React, {Component} from "react";
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuNumber: 5,
            userName: 'Varun',
            menus: this.props.menus
        };
        this.menuFunction();
				console.log(this.state);
        console.log("menu Component's constructor fired");
    }

    componentWillMount() {
        /* this.setState(
            {menus: ["try","done"]}
        );
        console.log(this.props.menus); */
        console.log("menu Component's component will mount fired");
    }
    componentDidMount() {
        console.log("Component has mounted");
        this.setState({menuNumber: 7});
        /* setInterval(function()
        {
            document.getElementById("loader").style.display = "none";
        },4000); */

    }
    menuFunction = () => {
        console.log("Menu function called");
    }
    componentDidCatch() {
        console.log("Error in component");
    }

    changeState = (e) => {
			console.log(e.keyCode);
			if(e.keyCode == 13){
        this.setState({
            menuNumber: this.state.menuNumber + 1
        });
				console.log("this is testing branch");
			}
    }

    render() {
        console.log("Render function fired");
        return (
            <div className="row">
            {/* <div className="loader" id="loader"></div>  */}
                <div className="logo-container"></div>
                <div className="menu-container">
                    {this
                        .state
                        .menus
                        .map((menu, i) => {
                            return (
                                <div className="menu" key={i}>
                                    <div onClick={this.menuFunction}>
                                        {menu.toUpperCase()}
                                        {this.state.menuNumber}
                                        <input type="text" onKeyDown={(e) => this.changeState(e)}/>
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
