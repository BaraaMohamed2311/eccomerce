/* eslint-disable react/prop-types */
import { useRef } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./movielists.css";
function MovieLists({ movies }) {
  let ListRef = useRef();
  let prevP;
  let started = false;

  function start(e) {
    started = true;
    prevP = e.clientX;
    console.log("started");
  }

  function dragging(e) {
    if (!started) return;
    let scroll_amount = e.clientX - prevP;
    ListRef.current.style = `transform: translateX(${scroll_amount}px)`;
  
    e.preventDefault();
  }

  function end() {
    started = false;
    console.log("end");
  }

  return (
    <>
      <h2 className="list-title">Title</h2>
      <div
        className="list"
        ref={ListRef}
        onMouseDown={start}
        onMouseMove={dragging}
        onMouseUp={end}
      >
        {movies.map((card) => {
          return <MovieCard key={card.title} movie={card} />;
        })}
      </div>
    </>
  );
}

export default MovieLists;
