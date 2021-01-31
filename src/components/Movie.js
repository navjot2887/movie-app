import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./Context";
import { Link } from "react-router-dom";
import axios from "axios";

const Movie = (props) => {
	const { movieWatched, movies, setMovieList } = useContext(DataContext);

	const API =
		"https://api.themoviedb.org/3/discover/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

	const IMG_PATH = "https://image.tmdb.org/t/p/original";
	const getMoviesList = async () => {
		const { data } = await axios.get(API);

		if (data.results) {
			setMovieList(data.results);
		}
	};
	useEffect(() => {
		getMoviesList();
	}, []);
	return (
		<div className='movie-container'>
			{movies.map((movie) => (
				<div className='movie' key={movie.id}>
					<div className='listing-image'>
						<img src={IMG_PATH + movie.poster_path} alt='movie'></img>
					</div>
					<div className='listing-content'>
						<Link to={`/movie/${movie.id}`}>
							<strong>{movie.title}</strong>
						</Link>
					</div>

					{movieWatched.indexOf(movie.id.toString()) >= 0 && (
						<div className='overlay d-flex align-items-center justify-content-center'>
							<span>Watched</span>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Movie;
