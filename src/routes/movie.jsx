import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
export async function loader({params}) {
    const response=await axios.get(`http://localhost:3000/movies/${params.movieId}`)
    const movie=response.data
    return { movie };
  }
function Movie(props){
    const {movie}=useLoaderData()
    return(
    <main className="container mx-auto">
    <section className="py-10 grid grid-cols-2 gap-6 items-center">
    <img className="object-cover aspect-[3/4] w-full" src={movie.thumbnail} alt="" />
    </section>
    <div>
        <h2 className="font-bold text-4xl">{movie.title}</h2>
        <span>{movie.genre.title}</span>
        <p>{movie.description}</p>
    </div>
    </main>
    )
}
export default Movie