import "./cardsbox.css"
import ProductCard from "../ProductCard/ProductCard"
import {useLocation} from "react-router-dom"
function CardsBox({products , isCart , isWishList , currpage}){
    let  MinPrice, MaxPrice;
    // getting query params object from current route location
    const location = useLocation().search;
    // convert it into object using URLSearchParams then making it iterable using fromEntries
    //const queryParamsObj = Object.fromEntries(new URLSearchParams(location));
    const queryParams =new URLSearchParams(location).toString();
    // filteredProducts
    console.log("products products",products)
    /*
    const filteredProducts = products? products.filter((product)=>{
        // destucting price range
            if(queryParamsObj.Prices){
                const [Min , Max] = queryParamsObj.Prices.split(" - ");
            // converting range into integers
            MinPrice = parseInt(Min);
            MaxPrice = parseInt(Max);
        }
            
            // checking conditions
            // if filter parameters exist we do filtering if not we set conditions true to accept all items
            const PriceCondition = MinPrice && MaxPrice ? product.price >= MinPrice && product.price <= MaxPrice : true  ;
            const RatingCondition = queryParamsObj.Rating ?  product.rating >= parseInt(queryParamsObj.Rating)  : true;
            const CategCondition =  queryParamsObj.categ ? queryParamsObj.categ === product.category  : true;
            return PriceCondition && RatingCondition && CategCondition ;}) : 0 ;*/
    return(
        <div className="cardbox">
            {products && products.map((product)=>{
                return ( 
                    <ProductCard key={product._id} currpage ={currpage} product={product} isCart={isCart} isWishList={isWishList}/>
                )
            })}
            {!products && 
            <h1 className="noitems">No Items Found</h1>}
        </div>
    )
}

export default CardsBox;