import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Quotes from "./Components/Quotes";

function App() {
	const [quotes, setQuotes] = useState([]);
	//const classes = useStyles();

	const getMovieList = () => {
    axios
			.get("http://localhost:4000/api/posts")
			.then((response) => {
				setQuotes(response.data);
			})
			.catch((error) => {
				console.log(error);
	  });
	}
	
	useEffect(() => {
		getMovieList();
	}, []);

	return (
		<div className="App">
			<Header />
			<Quotes quote={quotes}/>
		</div>
	);
}

export default App;
