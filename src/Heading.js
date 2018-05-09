import React from "react";
import './Heading.css';


const Heading = (props)=>{
	return (
		<div className="post-row">
			<div> {props.id}</div>
			<div>{props.title + ' Written by ' + props.author}</div>
			<div onClick={(e) => props.clickHandler(e,props.id)}>DELETE</div>
		</div>
	);
};

export default Heading;
