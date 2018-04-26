import React, {Component} from "react";

const Heading = (props)=>{
	return (
		<div>
			<h1>{props.title + ' Written by ' + props.author}</h1>
			<h2>ID of the post is {props.id}</h2>
		</div>
	);
};

export default Heading;
