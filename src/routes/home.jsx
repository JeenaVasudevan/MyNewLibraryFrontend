import React from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import { useLoaderData } from "react-router-dom";


export async function loader() {
    const response=await axios.get(`http://localhost:3000/movies`)
    const movies=response.data
    console.log(movies)
    return { movies }; 
  }

function Home(props){
    const { movies }=useLoaderData();
    return(
        <main className="container mx-auto">
        <section className="py-10">
         <h2 className="font-bold text-3xl">Now Running</h2>
        <div className="grid grid-cols-3 gap-4 mt-8">
        {
                        movies.map(movie => (
                            <MovieCard key={movie._id} movie={movie} />
                        ))
                    }
        </div>
        </section>
    </main>
    )
}
export default Home