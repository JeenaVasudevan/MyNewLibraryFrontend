import React from "react";
import { Link } from "react-router-dom";
function MovieCard(props){
    const movie=props.movie
    return(
    <article className="shadow-md">
            <Link to={`/movies/${movie._id}`}><img className="w-full aspect-[3/4] object-cover" src={movie.thumbnail} alt="" /></Link>
            <div className="px-2 pb-4">
            <h3 className="font-bold text-lg mt-2">{movie.title}</h3>
            <span>{movie.genre.title}</span>
            </div>
        </article> 
    )
}
export default MovieCard