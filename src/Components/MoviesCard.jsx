import React from 'react'
import StarRating from './StarRating'

const MoviesCard = ({filem}) => {
    return (
        <div className="movie-card">
           <StarRating rating={filem.rating}/>
            <img src={filem.image} alt="" width="100%" height="350px"/>
            <h3 style={{color:"white",fontSize:"20px",fontFamily:"sans-serif"}}>{filem.name}</h3>
            <h3 style={{color:"white",fontSize:"15px",fontFamily:"sans-serif"}}>{filem.type}</h3>
        </div>
    )
}

export default MoviesCard
