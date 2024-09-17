
import CardsBox from "../CardsBox/CardsBox";
import Pagination from "../Pagination/Pagination";
import {useSelector} from "react-redux"
import { useState } from "react";
import "./mainwrapper.css"
function MainWrapper(){

    let [currpage , setCurrPage] = useState(1);
    const fetchedProduct = useSelector((state)=>state.fetchedProducts.fetchedProducts);
    return (
    <div className="mainbox">
        {/* we pass fetchedproducts of current page  */}
        <CardsBox currpage={currpage} products = {fetchedProduct} isCart={false}/>
        <Pagination currpage={currpage} setCurrPage={setCurrPage} />
    </div>
)
}

export default MainWrapper;