import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

export const DataContextProvider = (props) => {
	const [movieWatched, setMovieWatched] = useState([]);
	const [movies, setMovies] = useState([]);
	const [mount, setMount] = useState(true);
	const SEARCH_API =
		"https://api.themoviedb.org/3/search/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=en-US&page=1&include_adult=false&query=";

	const [searchValue, setSearchValue] = useState("");

	const setMovieList = (movieList) => {
		if (movieList) {
			setMovies(movieList);
		}
	};
	const setSearchBoxValue = (val) => {
		setSearchValue(val);
	};
	const addWatchedMovies = (movie) => {
		if (movieWatched.indexOf(movie) == -1) {
			let newWatchedList = [...movieWatched, movie];

			setMovieWatched(newWatchedList);
		}
	};

	const handleOnSearch = () => {
		axios.get(SEARCH_API + searchValue).then((resp) => {
			setSearchValue("");
			setMovies(resp.data.results);
		});
	};
	useEffect(() => {
		if (mount) {
			setMount(false);
			const dataMovie = JSON.parse(localStorage.getItem("movie-app-watched"));
			if (dataMovie !== null) {
				setMovieWatched(dataMovie);
			}
		} else {
			localStorage.setItem("movie-app-watched", JSON.stringify(movieWatched));
		}
	}, [movieWatched]);
	return (
		<DataContext.Provider
			value={{
				movies,
				movieWatched,
				addWatchedMovies,
				handleOnSearch,
				setMovieList,
				setSearchBoxValue,
				searchValue,
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
};
