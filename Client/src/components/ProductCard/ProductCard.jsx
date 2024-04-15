/* eslint-disable react/prop-types */
import './productcard.css';
import { addToCart , addToWishList ,removeFromCart, increaseQuantity , decreaseQuantity ,removeFromWishList} from '../../Redux/Slices/productsReducer';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

function Card({product ,isCart ,isWishList , currpage}){
    const dispatch = useDispatch();

    return(
        <div className="card">
            <div className="imgbox">
                <img alt={"eccomerce-product-image"} src={product.img} rel='Product image' className='card-img' />
            </div>
            
            <div className="card-box">
                <h3 className="card-title">{product.title}</h3>
                <h6 className="sub-title">{product.category}</h6>
                <div className="card-details">
                    
                    <span className='card-details-rate'>Rating {product.rating}</span>
                    <span className='card-details-price'>Price {product.price}</span>
                </div>
            {/* Card in Home Buttons*/}
           {!isCart && !isWishList && <div className="card-btns card-btns-wrapper">
            <button onClick={()=>dispatch(addToWishList(product))} className="card-btn card-btn-wishlist"><ion-icon name="heart-outline"></ion-icon></button>
            <Link to={`/showcase/${product._id}?currpage=${currpage}`} className="card-btn card-btn-show">Show</Link>
            {/* we add cartQuantity property to product to store it in redux state */}
            <button onClick={()=>dispatch(addToCart(product))}   className="card-btn card-btn-addtocart"><ion-icon name="add-outline"></ion-icon></button>
            </div>}

            {/* Card in Cart Buttons*/}

            {isCart && !isWishList && <div className="card-btns-wrapper-cart">
            <button className="card-btn card-btn-remove" onClick={()=>dispatch(removeFromCart(product))}>Remove</button>
            <button onClick={()=>dispatch(decreaseQuantity(product))} className=" card-btn card-btn-minus"><ion-icon name="remove-outline"></ion-icon></button>
        <span className='card-btn quantaty'>{product.cartQuantity}</span>
            <button onClick={()=>dispatch(increaseQuantity(product))}  className=" card-btn card-btn-add"><ion-icon name="add-outline"></ion-icon></button>
            </div>}

            {/* Card in Wishlist Buttons*/}

            {!isCart && isWishList && <div className="card-btns-wrapper-cart">
            <button onClick={()=>dispatch(removeFromWishList(product))} className=" card-btn card-btn-minus">Remove</button>
            <button onClick={()=>dispatch(addToCart(product))}  className=" card-btn card-btn-add">Move To Cart</button>
            </div>}
            </div>
        </div>
    )
}

export default Card
;