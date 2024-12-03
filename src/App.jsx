import React, { useState } from "react";
import "./app.css";
import { Movielist, Navbar } from "./components";
import axios from "axios";

const API_BASE_URL = "http://www.omdbapi.com/";
// &apikey=11670b20
const App = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const search = async (event) => {
    if (event.code === "Enter") {
      //fetch data
      let response = await axios.get(
        API_BASE_URL + "?s=" + inputValue + "&apikey=11670b20"
      );
      console.log(response);
      //set data
      setMovies(response.data.Search);
    }
  };
  return (
    <div>
      <Navbar inputValue={inputValue} setInputValue={setInputValue} search={search}
      />
      <Movielist movielist={movies}></Movielist>
    </div>
  );
};

export default App;
