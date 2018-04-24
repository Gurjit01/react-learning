import React, {Component} from "react";
import './MiddleContainer.css';
import EventHandling from './EventHandling';
import 'whatwg-fetch';

class MiddleContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			baseUrl: "http://localhost:3000",
			posts: []
		};
	}
	componentWillMount() {
		this.fetchData();
	}

	fetchData(){
		fetch("http://localhost:3000/posts")
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
