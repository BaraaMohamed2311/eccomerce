/* eslint-disable react/prop-types */
import './moviecard.css';
import { Link } from 'react-router-dom';
function MovieCard({movie}){
    console.log("image src ", movie.img)
    return(
        <div className="moviecard">
            <img src={"src/assets/phone.jpeg"} rel='Product image' className='moviecard-img' alt={"movie-card-image"} ></img>
            
                
            
            <div className="info-box">
                <div className="moviecard-title">{movie.title}</div>
                <div className="sub-title">{movie.category}</div>
                <div className="moviecard-details">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem blanditiis nostrum distinctio facilis similique consectetur, excepturi iusto sed officia illo!
                </div>
            <div className="moviecard-btns-wrapper">

                    <Link to={"/movies/movieplayer"} className="moviecard-btn">Show</Link>
            </div>
            </div>
            
        </div>
    )
}

export default MovieCard
;