import React, {Component} from "react";
import './MiddleContainer.css';
import EventHandling from './EventHandling';
import 'whatwg-fetch';
import Button from './Button';
import Post from './Post';

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
						<Post baseUrl={this.props.baseUrl}/>
						</div>
        );
    }
}




export default MiddleContainer;
