import React from "react";
import { Link } from "react-router-dom";

const MovieListHeading = (props) => {
	return (
		<div className='col'>
			<Link to='/'>
				<h1>{props.heading}</h1>
			</Link>
		</div>
	);
};

export default MovieListHeading;
