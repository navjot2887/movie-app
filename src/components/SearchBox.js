import React, { useContext } from "react";
import { DataContext } from "./Context";

const SearchBox = (props) => {
	const {
		movieWatched,
		movies,
		setMovieList,
		setSearchBoxValue,
		handleOnSearch,
		searchValue,
	} = useContext(DataContext);
	const handleOnsubmit = (e) => {
		e.preventDefault();
		handleOnSearch();
	};
	return (
		<div className='col col-sm-4'>
			<form onSubmit={handleOnsubmit}>
				<input
					className='form-control'
					value={searchValue}
					onChange={(event) => setSearchBoxValue(event.target.value)}
					placeholder='Type to search and press Enter'
				></input>
			</form>
		</div>
	);
};

export default SearchBox;
