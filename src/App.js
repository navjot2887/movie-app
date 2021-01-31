import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "./components/Movie";

import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import "../src/App.css";
import { DataContextProvider } from "./components/Context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
const App = () => {
	return (
		<div className='container-fluid movie-app'>
			<DataContextProvider>
				<Router>
					<div className='row d-flex align-items-center mt-4 mb-4'>
						<MovieListHeading heading='Movies' />
						<SearchBox />
					</div>
					<Route path='/' component={Movie} exact />
					<Route path='/movie/:id' component={MovieDetail} exact />
				</Router>
			</DataContextProvider>
		</div>
	);
};

export default App;
