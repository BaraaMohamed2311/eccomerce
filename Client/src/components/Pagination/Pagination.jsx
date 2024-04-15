
import { useEffect, useState } from "react";
import fetchNextElements from "./fetchNextElements";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux"
import {useLocation} from "react-router-dom"
import "./pagination.css";

function Pagination({  currpage , setCurrPage}){
    
    let [isFetching , setIsFetching] = useState(false)
    const location = useLocation().search;
    // convert it into object using URLSearchParams then making it iterable using fromEntries
    //const queryParamsObj = Object.fromEntries(new URLSearchParams(location));
    const queryParams =new URLSearchParams(location).toString();
    // getting fetchedproducts state 
    const fetchedProduct = useSelector((state)=>state.fetchedProducts.fetchedProducts);
    const dispatch = useDispatch();
    const pagesize = 8;
    function handleMinus(){
        if(currpage > 1)
        setCurrPage(prev => prev - 1)
    }
    function handlePlus(){
        if(currpage < pagesize)
        setCurrPage(prev => prev + 1)
    }

    useEffect(()=>{
      /* the idea is to fetch potions of products
       because fetching all will slower the process */
       // we check if current page has been fetched before or not
       console.log("updated fetched products ",fetchedProduct)
       if(!fetchedProduct[currpage]){
          fetchNextElements(queryParams,currpage ,pagesize, setIsFetching  , dispatch)
      }
    },[currpage])

  return (
    <div className="pagination">
      <div className="pagination-wrapper">
          <button disabled={isFetching} onClick={handleMinus} className="page-btn"><ion-icon name="chevron-back-outline"></ion-icon></button>
          <div className="page-num">{currpage}</div>
          <button disabled={isFetching} onClick={handlePlus} className="page-btn"><ion-icon name="chevron-forward-outline"></ion-icon></button>
      </div>
    </div>
  );
}

export default Pagination;
