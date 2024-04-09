
import { useEffect, useState } from "react";
import fetchNextElements from "./fetchNextElements"
import "./pagination.css";

function Pagination({ setProducts}){
    let [currpage , setCurrPage] = useState(1);
    let [isFetching , setIsFetching] = useState(false)
    const pagesize = 20;
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
      fetchNextElements(`/api/products?currpage=${currpage}&pagesize=${pagesize}`
      ,setProducts , setIsFetching)
      
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
