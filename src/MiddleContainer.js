import React, {Component} from "react";
import './MiddleContainer.css';
import EventHandling from './EventHandling';

class MiddleContainer extends Component {
    render() {
        return (
            <div className="middle-container">
							<EventHandling clickEvent="testing" keyupEvent="Working"/>
						</div>
        );
    }
}

export default MiddleContainer;
