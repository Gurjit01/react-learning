import React from 'react';

const Fruit = (props)=>{
  return(
    <div className="post-row">
			<div> Fruit Name</div>
			<div>{props.fruit_name + ' eatend by ' + props.eaten_by }</div>
		</div>
  );
};

export default Fruit;
