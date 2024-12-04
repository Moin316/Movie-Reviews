import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Moviedetails = () => {
const [isLoading, setisLoading] = useState(true);
  const [Moviedetails, setMoviedetails] = useState(null);
  const { imdbID } = useParams();
  useEffect(() => {
    const fetchmoviedetails = async () => {
    const res = await axios.get(
        `http://www.omdbapi.com/?i=${imdbID}&apikey=11670b20`
    );
    console.log(res.data);
    setMoviedetails(res.data);
    setisLoading(false);
    };
    fetchmoviedetails();
}, [imdbID]);
    if(isLoading===true){
        return <p>Loading Chill</p>
    }
    else if(isLoading===false && Moviedetails){
        return (
          <div className="details">
            <h1>{Moviedetails.Title}</h1>
            <img src={Moviedetails.Poster} alt={Moviedetails.Title} />
            <p>
              <strong>Plot:</strong> {Moviedetails.Plot}
            </p>
            <p>
              <strong>Director:</strong> {Moviedetails.Director}
            </p>
            <p>
              <strong>Release Date:</strong> {Moviedetails.Released}
            </p>
            <p>
              <strong>Genre:</strong> {Moviedetails.Genre}
            </p>
            <p>
              <strong>IMDB Rating:</strong> {Moviedetails.imdbRating}
            </p>
            <p>
              <strong>Actors:</strong> {Moviedetails.Actors}
            </p>
            <p>
              <strong>Language:</strong> {Moviedetails.Language}
            </p>
            <p>
              <strong>Country:</strong> {Moviedetails.Country}
            </p>
            <p>
              <strong>Year:</strong> {Moviedetails.Year}
            </p>
            <p>
              <strong>Rated:</strong> {Moviedetails.Rated}
            </p>
            <p>
              <strong>Production:</strong> {Moviedetails.Production}
            </p>
            <p>
              <strong>BoxOffice:</strong> {Moviedetails.BoxOffice}
            </p>

            {/* Display the full response as JSON */}
            <div>
              <h2>Full Movie Details:</h2>
              <pre>{JSON.stringify(Moviedetails, null, 2)}</pre>
            </div>
          </div>
        );
    }
    else{
        return <p>No Movie Found</p>
    }
};

export default Moviedetails;
