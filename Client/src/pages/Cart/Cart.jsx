import { useSelector } from 'react-redux'
import CardsBox from '../../components/CardsBox/CardsBox';
import "./cart.css"
function Cart (){
    const cartState = useSelector(state => state.productsState.products);
    console.log("xxxxxx",cartState)
    return(
    <div className='cart'>
        <CardsBox products={cartState} isCart={true}/>
    </div>
    )
}

export default Cart ;