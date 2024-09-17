/* eslint-disable react/prop-types */
import "./cardsbox.css"
import ProductCard from "../ProductCard/ProductCard"
function CardsBox({products , isCart , isWishList , currpage}){
   
    return(
        <div className="cardbox">
            {products.length !==0 && products.map((product)=>{
                return ( 
                    <ProductCard key={product._id} currpage ={currpage} product={product} isCart={isCart} isWishList={isWishList}/>
                )
            })}
            {products.length == 0 && 
            <h1 className="noitems">No Items Found</h1>}
        </div>
    )
}

export default CardsBox;