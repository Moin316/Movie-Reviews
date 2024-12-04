import React, { useState } from "react";
import "./app.css";
import { Movielist, Navbar,Loader } from "./components";
import axios from "axios";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import Moviedetails from "./Pages/Moviedetails";

const API_BASE_URL = "http://www.omdbapi.com/";
// &apikey=11670b20
const App = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const search = async (event) => {
    if (event.code === "Enter") {
      //fetch data
      setIsLoading(true);
      
      let response = await axios.get(
        API_BASE_URL + "?s=" + inputValue + "&apikey=11670b20"
      );
      console.log(response);
      //set data
      setMovies(response.data.Search);
      setIsLoading(false); 
    }
  };
  return (
    <div>
      <Navbar
        inputValue={inputValue}
        setInputValue={setInputValue}
        search={search}
      />
      <Router>
        <Routes>
          <Route path="/movie-list" element={<Movie movielist={movies} />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home/>}/> 
          <Route path="/movie-list/:imdbID" element={<Moviedetails/>}/>
        </Routes>
      </Router>
      {/* {isLoading ? <Loader /> : <Movie movielist={movies}></Movie>} */}
    </div>
  );
};

export default App;
