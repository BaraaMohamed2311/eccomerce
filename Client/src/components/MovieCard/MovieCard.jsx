/* eslint-disable react/prop-types */
import './moviecard.css';
import { useNavigate} from 'react-router-dom';
function MovieCard({movie}){
    console.log("recieeeeeeved movie",movie)
    const navigate = useNavigate();
    function handleNavigatePlayerPage(movie){
        console.log("Navigating with movie: idddd", movie , movie._id);
        navigate("/private/movies/movieplayer", { state: movie._id });
    }
    return(
        <div className="moviecard">
            <img src={movie.img} rel='Product image' className='moviecard-img' alt={"movie-card-image"} ></img>
            
                
            
            <div className="info-box">
                <div className="moviecard-title">{movie.title}</div>
                <button onClick={()=>handleNavigatePlayerPage(movie)} className="moviecard-btn">Watch Now</button>
            </div>
            
        </div>
    )
}

export default MovieCard
;