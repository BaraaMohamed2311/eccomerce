/* eslint-disable react/prop-types */

import MovieCard from "../MovieCard/MovieCard";
import "./movielists.css";
function MovieLists({ movies }) {


  return (
    <>
      <h2 className="list-title">Ready To Watch</h2>
      <div className="list">
        {movies.map((card) => {
          return <MovieCard key={card.title} movie={card} />;
        })}
      </div>
    </>
  );
}

export default MovieLists;
