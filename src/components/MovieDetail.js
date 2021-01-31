import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./Context";
import axios from "axios";

const MovieDetail = () => {
	const { addWatchedMovies, movieWatched } = useContext(DataContext);
	const [movieData, setMovieData] = useState(null);

	const { id } = useParams();
	const IMG_PATH = "https://image.tmdb.org/t/p/original";
	const MOVIE_API = `https://api.themoviedb.org/3/movie/${id}?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=en-US`;
	const getMovieDetail = async () => {
		const { data } = await axios.get(MOVIE_API);

		if (data) {
			setMovieData(data);
		}
	};
	useEffect(() => {
		getMovieDetail();
		addWatchedMovies(id);
	}, [id]);

	return (
		<React.Fragment>
			{movieData !== null ? (
				<div className='row'>
					<div className='col-md-4'>
						<img
							className='img-fluid'
							src={IMG_PATH + movieData.poster_path}
							alt={movieData.original_title}
						/>
					</div>
					<div className='col-md-8'>
						<h1>{movieData.original_title}</h1>
						<p>{movieData.overview}</p>
					</div>
				</div>
			) : (
				<div>No Movie Details found</div>
			)}
		</React.Fragment>
	);
};

export default MovieDetail;
