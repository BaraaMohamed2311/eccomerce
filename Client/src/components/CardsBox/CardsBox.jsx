import "./cardsbox.css"
import ProductCard from "../ProductCard/ProductCard"
import {useLocation} from "react-router-dom"
function CardsBox({products , isCart}){
    let  MinPrice, MaxPrice;
    // getting query params object from current route location
    const queryParams = useLocation().search;
    // convert it into object using URLSearchParams then making it iterable using fromEntries
    const queryParamsObj = Object.fromEntries(new URLSearchParams(queryParams));
    console.log(queryParamsObj)
    const filteredProducts = Array.from(products).filter((product)=>{
        // destucting price range
        console.log("pricing",queryParamsObj)
            if(queryParamsObj.Prices){
                const [Min , Max] = queryParamsObj.Prices.split(" - ");
            console.log("minmax",Min , Max)
            // converting range into integers
            MinPrice = parseInt(Min);
            MaxPrice = parseInt(Max);
        }
            
            // checking conditions
            // if filter parameters exist we do filtering if not we set conditions true to accept all items
            console.log("rating",product.rating , parseInt(queryParamsObj.Rating))
            const PriceCondition = MinPrice && MaxPrice ? product.price >= MinPrice && product.price <= MaxPrice : true  ;
            const RatingCondition = queryParamsObj.Rating ?  product.rating >= parseInt(queryParamsObj.Rating)  : true;
            return PriceCondition && RatingCondition

    })
    console.log("filtered", filteredProducts)
    return(
        <div className="cardbox">
            {filteredProducts && filteredProducts.map((product)=>{
                return ( 
                    <ProductCard key={product._id}  product={product} isCart={isCart}/>
                )
            })}
            {filteredProducts.length === 0 && 
            <h1 className="noitems">No Items Found</h1>}
        </div>
    )
}

export default CardsBox;