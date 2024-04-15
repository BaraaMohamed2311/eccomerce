
import {useLocation, useSearchParams} from "react-router-dom";
import { addToCart } from '../../Redux/Slices/productsReducer';
import { useDispatch } from 'react-redux'
import "./productshowcase.css"
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
function ProductShowCase(){
    // getting key (currpage) & id to search for product
    const product_id = useParams().id;
    const location = useLocation();
    const currpage = Object.fromEntries(new URLSearchParams(location.search)).currpage;

    // getting targeted product 
    const products = useSelector((state)=>state.fetchedProducts.fetchedProducts);
    //products[parseInt(currpage)] represents all products associated with this currpage as key and value
    const product_showcase = products[parseInt(currpage)].find(product => product._id === product_id);
    const dispatch = useDispatch();
    
    return (
        <div className="productshowcase">
           <div className="product-container">
                <div className="product-image">
                    <ul className="product-image-ul">
                        {product_showcase.Show_case.imgs.map((src)=>{
                            return(
                                <li key={src} className="product-image-li "><img src={src} alt="Product Name" /></li>
                            )
                        })}
                        
                        
                    </ul>
                    <img className="active-main-img" src={product_showcase.img} alt="Product Name" />
                </div>
                <div className="product-details">
                    <h1 className="product-title">{product_showcase.title}</h1>
                    <p className="product-category">Category: {product_showcase.category}</p>
                    <div className="product-rating">
                        <span>Rating: </span>
                        <span className="rating-stars">★★★★☆</span>
                        <span className="rating-number">({product_showcase.rating})</span>
                    </div>
                    <p className="product-description" >
                       {product_showcase.Show_case.disc}.
                    </p>
                    <p className="product-price">${product_showcase.price}</p>
                    <button onClick={()=>dispatch(addToCart(product_showcase))} className="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductShowCase;