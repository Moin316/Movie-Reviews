import React from 'react'
import Moviecard from './Moviecard'
import "../styles/movie-list.css";
const Movielist = ({movielist}) => {
  return (
    <div className='movie-list'>
      {
        movielist.map(movie => (
           <Moviecard key={movie.id} movie={movie} />
        ))
      }
    </div>
  )
}

export default Movielist
