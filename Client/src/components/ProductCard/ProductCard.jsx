/* eslint-disable react/prop-types */
import './productcard.css';
import { addToCart , addToWishList , increaseQuantity , decreaseQuantity } from '../../Redux/Slices/productsReducer';
import { useDispatch } from 'react-redux'

function Card({product ,isCart }){
    const dispatch = useDispatch();

    return(
        <div className="card">
            <img alt={"eccomerce-product-image"} src={product.img} rel='Product image' className='card-img' ></img>
            
                <h1 className="card-title">{product.title}</h1>
                <h6 className="sub-title">{product.category}</h6>
                <div className="card-details">
                    
                    <span className='card-details-rate'>Rating {product.rating}</span>
                    <span className='card-details-price'>Price {product.price}</span>
                </div>
           {!isCart && <div className="card-btns card-btns-wrapper">
            <button onClick={()=>dispatch(addToWishList(product))} className="card-btn card-btn-wishlist"><ion-icon name="heart-outline"></ion-icon></button>
            <button className="card-btn card-btn-show">Show</button>
            {/* we add cartQuantity property to product to store it in redux state */}
            <button onClick={()=>dispatch(addToCart({...product , cartQuantity:1}))}   className="card-btn card-btn-addtocart"><ion-icon name="add-outline"></ion-icon></button>
            </div>}

            {/* when item is in cart we change btns functionalities */}

            {isCart && <div className="card-btns-wrapper-cart">
            <button className="card-btn card-btn-purchase">Purchase</button>
            <button onClick={()=>dispatch(decreaseQuantity(product))} className=" card-btn card-btn-minus"><ion-icon name="remove-outline"></ion-icon></button>
        <span className='card-btn quantaty'>{product.cartQuantity}</span>
            <button onClick={()=>dispatch(increaseQuantity(product))}  className=" card-btn card-btn-add"><ion-icon name="add-outline"></ion-icon></button>
            </div>}
            
        </div>
    )
}

export default Card
;