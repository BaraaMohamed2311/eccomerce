
import './movieplayer.css'
import { Link } from 'react-router-dom';
import { useSelector} from "react-redux"
function MoviePlayer() {
  const movie = useSelector(state => state.user.userData.usermovies);

    return (
      <div className="movieplayer">
        <div className="playerbox wrapper">
            <video controls autoPlay className='video-el' src="">Video player is  not supported</video>
            <div className="movie-info">
                <h1 className='movie-title'>{movie.title}</h1>
                <p className='movie-genre'>{movie.genre.map((genre)=><Link className='movieplayer-link' key={genre}>{genre}</Link>)}</p>
                <p className='movie-cast'>{movie.cast.map((genre)=><Link className='movieplayer-link' key={genre}>{genre}</Link>)}</p>
                <div className="releas-dur-wrapper">         
                  <p className='movie-duration'>{movie.duration}</p>
                  <p className='movie-release'>{movie.release}</p>
                </div>
                <p className='movie-country'><Link className='movieplayer-link'>Country : {movie.country}</Link></p>
                <div className="storyline">
                {movie.storyline}
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default MoviePlayer;