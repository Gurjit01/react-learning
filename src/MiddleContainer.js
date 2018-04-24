import React, {Component} from "react";
import './MiddleContainer.css';
import EventHandling from './EventHandling';
import 'whatwg-fetch';

class MiddleContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			posts: []
		};
	}
	componentWillMount() {
		this.fetchData();
	}

	fetchData(){
		console.log(this.props.baseUrl + "/posts");
		fetch(this.props.baseUrl + "/posts")
		.then((response) => {
			return response.json();
		})
		.then((res)=>{
			this.setState({posts: res});
		})
		.catch((err) => {
			console.log(err);
		});
	}

    render() {
        return (
            <div className="middle-container">
							<EventHandling clickEvent="testing" keyupEvent="Working"/>
							{
								this.state.posts.map(
									(post)=>{
										return(
											<h1>{post.title + ' Written by ' + post.author}</h1>
										)
									}
								)
						}
						</div>
        );
    }
}

export default MiddleContainer;
