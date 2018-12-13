import React from 'react';

// Let's build the functionc

const Card = ({ name, email, id }) => {
	// We are not writing html but jsx	
	return (
		// <h1>RoboFriends</h1> --> this produces an error. You should only return 1 element
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src ={`https://robohash.org/${id}?200?200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;