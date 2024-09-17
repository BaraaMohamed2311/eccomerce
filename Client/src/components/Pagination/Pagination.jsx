/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import fetchNextElements from "../../helper/fetchNextElements";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux"
import { useLocation, useSearchParams } from "react-router-dom";
import "./pagination.css";
import {useQueryContext}  from "../../Contexts/queryContext";
import {toast} from "react-toastify";
import useEditUrlSearchParams from "../../hooks/useEditUrlSearchParams";
function Pagination({  currpage , setCurrPage}){
  let {queryState,setQueryState} = useQueryContext()
  let [isFetching , setIsFetching] = useState(false);

  /*****************************/

    const pagesize = 8;
    const MaxPages = 99;
    
    /*  changing currpage state depending on currpage */
    function handleMinus(){
        if(currpage > 1)
        setCurrPage(prev => prev - 1)
    }
    function handlePlus(){
        if(currpage < MaxPages)
        setCurrPage(prev => prev + 1)
    }
    /**********************************************/
    useEffect(()=>{
        // changing query state currpage property to hold number of current page & size
        setQueryState(prev=>{return {...prev , pagesize : pagesize ,currpage:currpage }})
    },[currpage])
    /**********************************************/
    


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
