import React from 'react'
import  Movielist  from '../components/Movielist'
const Movie = ({movielist}) => {
  return (
    <div>
      <Movielist movielist={movielist}/>
    </div>
  )
}

export default Movie
