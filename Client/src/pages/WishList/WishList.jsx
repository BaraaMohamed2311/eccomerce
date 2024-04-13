import { useSelector } from 'react-redux'
import CardsBox from '../../components/CardsBox/CardsBox';
import "./wishlist.css"
function    WishList (){
    const wishlist = useSelector(state => state.productsState.wishlist);
    
    return(
    <div className='cart'>
        <CardsBox products={wishlist} isCart={false} isWishList = {true}/>
    </div>
    )
}

export default WishList ;