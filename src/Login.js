import React, { Component } from 'react';
import Helper from './Helper';

class Login extends Component{
	constructor(){
		super();
		this.state = {
			email: '',
			password: ''
		};
	}

	setEmail = (e)=> {
		this.setState({
			email: e.target.value
		});
	}

	setPassword = (e) => {
		this.setState({
			password: e.target.value
		});
	}

	login=()=>{
		let body = JSON.stringify({
      email: this.state.email,
      password: this.state.password
    });
		let res = Helper("http://vidyapeethclasses.in/api/v1/login",'POST',body);
		res.then((res)=>{
			if(res.access_token !== undefined){
	      this.props.history.push('/nugen');
	    }else{
	      alert("Wrong username/password");
	    }
		});
	}

	render(){
		return(
			<table>
				<tbody>
				<tr>
					<td>Email:-</td>
					<td>
						<input type='text' onKeyUp={this.setEmail}/>
					</td>
				</tr>
				<tr>
					<td>Password:-</td>
					<td>
						<input type='password' onKeyUp={this.setPassword}/>
					</td>
				</tr>
				<tr>
					<td>
						<button onClick={this.login}>Login</button>
					</td>
					<td>

					</td>
				</tr>
				</tbody>
			</table>
		);
	}
}

export default Login;
