
import { useEffect } from 'react';
import MovieLists from '../../components/MovieLists/MovieLists';
import './movieplayer.css'
import { Link , useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';

function MoviePlayer() {

  const usermovies = useSelector(state => state.user.userData.usermovies);
  const location = useLocation();
 
    console.log("moviePlayed", usermovies);

  const movie = usermovies.filter((movie)=>{
    return location.state === movie._id
  })[0] ;
  console.log("Movie state:", movie);

  console.log("genreee",  movie)

  
    return (
      <div className="movieplayer">
        <div className="playerbox wrapper">
          {movie && 
          <>
            <iframe 
            className='video-el'
            width="1280" 
            height="720" 
            src="https://www.youtube.com/embed/uLtkt8BonwM" 
            title="The Last of Us | Official Trailer | Max" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
              Video is not supported
            </iframe>
            <div className="movie-info">
                <img className="movie-img" alt='Movie Image at Movie Player Page' src={movie.img} />
                <div className="movie-textbox">
                    <h1 className='movie-title'>{movie.title}</h1>
                    <div className="storyline">
                      {movie.storyline}
                    </div>
                    <div className="left-right-wrapper">
                      <div className="movieleft">
                        <p className='movie-p'>Genre : {movie.genre.map((genre)=><Link className='movieplayer-link' key={genre}>{genre}</Link>)}</p>
                        <p className='movie-p'>Cast :{movie.cast.map((genre)=><Link className='movieplayer-link' key={genre}>{genre}</Link>)}</p>
                        <p className='movie-p'>Country :<Link className='movieplayer-link'> {movie.country}</Link></p>
                      </div>
                      <div className="movieright">         
                        <p className='movie-p'>Duration : {movie.duration}</p>
                        <p className='movie-p'>Duration : {movie.release}</p>
                        <p className='movie-p'>Production : {movie.release}</p>
                      </div>
                    </div>
                </div>
                
            </div>
          </>
          }
          
        </div>
      </div>
    );
  }
  
  export default MoviePlayer;