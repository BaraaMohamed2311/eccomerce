/* eslint-disable react/prop-types */
import './moviecard.css';
import { Link } from 'react-router-dom';
function MovieCard({movie}){
    return(
        <div className="moviecard">
            <img src={movie.img} rel='Product image' className='moviecard-img' alt={"movie-card-image"} ></img>
            
                
            
            <div className="info-box">
                <div className="moviecard-title">{movie.title}</div>
                <div className="sub-title">{movie.category}</div>

            <div className="moviecard-btns-wrapper">

                    <Link to={"/movies/movieplayer"} className="moviecard-btn">Watch Now</Link>
            </div>
            </div>
            
        </div>
    )
}

export default MovieCard
;