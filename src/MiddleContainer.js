import React, {Component} from "react";
import './MiddleContainer.css';
import EventHandling from './EventHandling';
import 'whatwg-fetch';
import Button from './Button';
import Post from './Post';
import User from './User';
import {Link} from 'react-router-dom';

class MiddleContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			count: 0
		};
	}



    render() {
        return (
            <div className="middle-container">
							<EventHandling clickEvent="testing" keyupEvent="Working"/>
								<span>{this.state.count}</span>
								<button>Count 5 </button>
								<button>Count 10 </button>
								<button>Count 15 </button>


						<Button/>
						<Link to="/">Go To App Component</Link>
						<div style={style.postContainer}>
							<Post baseUrl={this.props.baseUrl}/>
						</div>
						<div style={style.userContainer}>
							<User/>
						</div>
						</div>
        );
    }
}

const style={
	'postContainer': {
		width:'500px',
		height: 'auto',
		background:'#444',
		display:'inline-block',
		verticalAlign:'top'
	},
	'userContainer': {
		width:'500px',
		height: 'auto',
		background:'#e5e5e5',
		display:'inline-block',
		verticalAlign:'top'
	}
};


export default MiddleContainer;
