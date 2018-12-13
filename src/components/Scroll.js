import React from 'react';

const Scroll = (props) =>{
//{{}} --> first bracket is wrapping javascript and the javascript has an object that can return css
	return(
		<div style={{overflowY: 'scroll', border: '1px solid black', height:'500px'}}>
			{props.children}
		</div>
		);
};
export default Scroll; 