import React, { Component } from 'react';
import Heading from './Heading';
import './Post.css';
import 'whatwg-fetch';

class Post extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: '',
			author: '',
			message:'',
			error:'',
			posts: []
		};
	}
	componentWillMount() {
		this.fetchPosts();
	}
	// handleInput = (e)=>{
	// 	console.log(e.target.name);
	// }			posts: [],

	handleTitle = (e)=>{
		this.setState({
			title: e.target.value
		});
	}
	handleAuthor = (e)=>{
		this.setState({
			author: e.target.value
		});
	}
	save=()=>{
		// fetch(`${this.props.baseUrl}/posts`,)
		let post = {
								title: this.state.title,
								author: this.state.author
							};
		fetch(this.props.baseUrl + "/posts",{
			method: 'POST',
			headers: {
    		'Content-Type': 'application/json'
			},
			body: JSON.stringify(post)
		})
		.then((response) => {
			return response.json();
		})
		.then((res)=>{
			if(res.id !== undefined){
				this.setState({
					message: "Post has been saved successfully"
				});
				this.fetchPosts();
			}else{
				this.setState({
					message: "Error while saving post"
				});
			}
		})
		.catch((err) => {
						console.log(err);
		});
	}




		fetchPosts(){
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





	render(){
		return(
			<div>

				<h1>{this.state.error !== '' ? this.state.error : this.state.message }</h1>
					Enter Title: <input type="text" name="title" onKeyUp={this.handleTitle}/> <br></br>
				Enter Author: <input type="text" name="author" onKeyUp={this.handleAuthor}/> <br></br>
			<button onClick={this.save}>Save Post</button> <br></br>

			<div className="posts-container">
				<div>
					{
							this.state.posts.map(
								(post,i)=>{
									return(
										// <Heading title={post.title} author={post.author} id={post.id}/>

										<Heading key={i} {...post}/>
									)
								}
							)
					}
				</div>
			</div>
			</div>
		);
	}
}

export default Post;
