import { useSelector } from 'react-redux'
import CardsBox from '../../components/CardsBox/CardsBox';
import { Link } from "react-router-dom"
import "./cart.css"
function Cart (){
    const cartState = useSelector(state => state.productsState.products);
    const totalPrice = useSelector(state => state.productsState.total);
    console.log("totalPrice",totalPrice)
    // calculating total price on each change ot render

    return(
    <div className='cart'>
        <CardsBox products={cartState} isCart={true}/>
        <div className='order-details'>
            <p className='order-details-p'>Total : <span className='order-details-span'>{totalPrice}</span>$</p>
            <Link to={"/private/checkout"} className='order-details-btn'>Place Order</Link>
        </div>
    </div>
    )
}

export default Cart ;