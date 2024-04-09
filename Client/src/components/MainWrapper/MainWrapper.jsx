
import CardsBox from "../CardsBox/CardsBox";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";
import "./mainwrapper.css"
function MainWrapper(){
    let [ products , setProducts] = useState(false)
return (
    <div className="mainbox">
        <CardsBox products = {products} isCart={false}/>
        <Pagination  setProducts= { setProducts }/>
    </div>
)
}

export default MainWrapper;