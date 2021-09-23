import React from 'react'
import MoviesCard from './MoviesCard'

const MoviesList = ({movie}) => {
    return (
        <div className="movie-list">
            {
                movie.map(
                    (el,i)=><MoviesCard filem={el} key={i}/>
                )
            }
        </div>
    )
}

export default MoviesList
