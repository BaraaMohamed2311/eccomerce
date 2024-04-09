
import './movieplayer.css'
import { Link } from 'react-router-dom';
function MoviePlayer() {
let movie = {title:"The Last Of Us" , genre: ["Adventure", "Mystery", "Science Fiction", "Fantasy", "Action"],
cast:["Brie Larson", "Teyonah Parris", "Iman Vellani", "Samuel L. Jackson", "Shamier Anderson"],duration:"132 mins",release:"01-12-2013",country:"United States",
storyline:`United States of America,duration:105 min,release:1-1-2019,storyline:The Last of Us takes place in the year 2033, twenty years after a fungal-based, brain-altering pandemic has spread and infected over 60% of the world's population. Since the outbreak, the world has gone into a state of panic and frenzy as officials try to fix and keep the situation under control.
 When the World Health Organization&apos;s attempts to procure a vaccine fail, the United States government does away with the bureaucrats in power and the establishment of civilian government. The country is turned into a police state under the control of homeland security and the military, and cities across the nation are placed under martial law one by one. Survivors of the pandemic are assigned to designated quarantine zones that are supposed to separate them from the infected and keep them safe.
Sometime within the twenty years leading up to the main events of the game, a paramilitary group calling themselves the Fireflies is established, with their main goal being the restoration of lawful government in the United States, as well as finding and producing a vaccine for the Cordyceps brain infection. The Fireflies attack the military on occasion and encourage uprisings.`}


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