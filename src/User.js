import React, { Component } from 'react';
import './User.css';

class User extends Component{
	constructor(props){
		super(props);
		this.state ={
			url: 'http://ourcity.mobi/api/v1/users',
			loader: true,
			users: []
		};
		this.fetchUsers();

	}

	fetchUsers(){
		fetch(this.state.url)
		.then((response)=>{
			return response.json();
		})
		.then((res)=>{
			console.log(res);
			this.setState({
				users: res
			});
			this.setState({
				loader: false
			});
		})
		.catch((err)=>{
			console.log("Error while fetching users from API ", err);
		})
	}

	toggleLoader = ()=>{
		this.setState({
			loader: !this.state.loader
		});
	}

  render(){
    return(
      <div className="user-container">
				<div className={this.state.loader === true ? 'loader': 'hide-loader'}>
						Loading Users Please Wait .....
				</div>
				<button onClick={this.toggleLoader}>Toggle Loader</button>
				<ul>
					{
						this.state.users.map(
							(user,i)=>{
								return(
									<li key={i}>{user.email}</li>
								);
							}
						)
					}
				</ul>
			</div>
    );
  }
}


export default User;
