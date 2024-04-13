import MovieLists from "../../components/MovieLists/MovieLists";
import "./movies.css";
import {useSelector}from "react-redux"


function Movies() {
  const userMovies = useSelector(state => state.user.userData.usermovies);
  console.log("usermoviessssssssssssssss ", userMovies)
  return (
  
      <div className="movies">
        {userMovies && <MovieLists movies = {userMovies} />}
      </div>
    
  );
}

export default Movies;
