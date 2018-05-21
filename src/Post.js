import React, { Component } from 'react';
import Heading from './Heading';
import Fruit from './Fruit';
import './Post.css';
import 'whatwg-fetch';
import Helper from './Helper';

class Post extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: '',
			author: '',
			message:'',
			error:'',
			posts: [],
			fruits: [
					{
						fruit_name: "Apple",
						eaten_by: "Tahir"
					},
					{
						fruit_name: "Banana",
						eaten_by: "Tahir"
					},
					{
						fruit_name: "Allu bukhara",
						eaten_by: "Tahir"
					},
					{
						fruit_name: "Grapes",
						eaten_by: "Vikram"
					},
					{
						fruit_name: "Nimbu",
						eaten_by: "Vikram"
					}
				],
				new_fruits: [
						{
							fruit_name: "Apple",
							eaten_by: "Tahir"
						},
						{
							fruit_name: "Banana",
							eaten_by: "Tahir"
						},
						{
							fruit_name: "Allu bukhara",
							eaten_by: "Tahir"
						},
						{
							fruit_name: "Grapes",
							eaten_by: "Vikram"
						},
						{
							fruit_name: "Nimbu",
							eaten_by: "Vikram"
						}
					]
		};
	}

	filterFruits = (e,eaten_by)=>{
		if(eaten_by === "all"){
			this.setState({
				new_fruits: this.state.fruits
			});
		}else
		{
			let new_fruits = this.state.fruits.filter((fruit)=>{
											return fruit.eaten_by.toLowerCase() === eaten_by.toLowerCase()
									});
			this.setState({
				new_fruits: new_fruits
			});
		}
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
		let post = JSON.stringify({
								title: this.state.title,
								author: this.state.author
							});
		let res = Helper(this.props.baseUrl + "/posts",'POST',post);

		res.then((res)=>{
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

	}




		fetchPosts(){
			let url = this.props.baseUrl + "/posts";
			let body = {};
			let res = Helper(url,'GET',body);
			res.then((res)=>{
				this.setState({posts: res});
			});

		}


		deletePost = (e,id) =>{
			fetch(this.props.baseUrl + "/posts/" + id, {
			  method: 'DELETE',
			  headers: {
			    'Content-Type': 'application/json'
			  },
			  body: JSON.stringify({})
			})
			.then((response) => {
				return response.json();
			})
			.then((res)=>{
				if(res.id === undefined){
					this.setState({
						message: "Post has been deleted successfully"
					});
					this.fetchPosts();
				}else{
					this.setState({
						message: "Error while deleting post"
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
		}


clickHandler
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

										<Heading key={i} {...post} clickHandler={this.deletePost}/>
									)
								}
							)
					}
					<h1 onClick={(e)=>this.filterFruits(e,'vikram')}>Eaten By Vikram</h1>
					<h1 onClick={(e)=>this.filterFruits(e,'tahir')}>Eaten By Tahir</h1>
					<h1 onClick={(e)=>this.filterFruits(e,'all')}>Show All</h1>
					{
							this.state.new_fruits.map(
								(fruit,i)=>{
									return(
										// <Heading title={post.title} author={post.author} id={post.id}/>

										<Fruit key={i} {...fruit}/>
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
