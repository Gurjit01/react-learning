import React, { Component } from 'react';

class Button extends Component{

	constructor(props){
		super(props);
		this.state = {
			count:0,
			countButtons: [5,10,15,20,25,30,35,40]
		};
		// this.incrementTen = this.incrementTen.bind(this);
		// this.incrementFive = this.incrementFive.bind(this);
		// this.incrementFifteen = this.incrementFifteen.bind(this);
	}

	// incrementFive = ()=>{
	// 	this.setState({
	// 		count: this.state.count + 5
	// 	});
	// }
	//
	// incrementTen =()=>{
	// 	this.setState({
	// 		count: this.state.count + 10
	// 	});
	// }
	//
	// incrementFifteen =()=>{
	// 	this.setState({
	// 		count: this.state.count + 15
	// 	});
	// }
	increment =(e)=>{
		this.setState({
			count: this.state.count + +e.target.value
		});
	}


	render(){
		return (
			<div>
				<h1>Count is {this.state.count}</h1>
					{ this.state.countButtons.map((buttonValue)=>{
						return(
								<ButtonHTML value={buttonValue} clickHandler={this.increment}/>
						)
					}) }

			</div>
		);
	}
}

const ButtonHTML = (props)=>{
	return(
		<button value={props.value} onClick={props.clickHandler}>{props.value}</button>
	);
};


export default Button;
