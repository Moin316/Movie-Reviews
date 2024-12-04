import React from 'react'
import '../styles/movie-card.css';
import { Link } from 'react-router-dom';
const Moviecard = ({movie}) => {
  return (
    <Link to={`/movie-list/${movie.imdbID}`} className='link'>
      <div className="movie-card">
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </Link>
  );
}

export default Moviecard
