import { useSearchParams } from "react-router-dom";
import { useQueryContext } from "../Contexts/queryContext";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import fetchNextElements from "./fetchNextElements";
import { useDispatch } from "react-redux";
import {addToFetched } from "../Redux/Slices/fetchedProductsReducer"
export default function URLParamsBox(){
    let [URLParams , setURLParams] = useState()
    let {queryState} = useQueryContext();
    let dispatch = useDispatch();

    useEffect(()=>{
        // coverting our state to the form of query url before using it to fetch
        let URLParams_string = new URLSearchParams(queryState).toString();
        setURLParams(URLParams_string)
    },[queryState]);

    useEffect(()=>{
        // timing out fetches so if user make many changes so fast
        let FetchTimeout = setTimeout(()=>{
            fetchNextElements(dispatch , addToFetched , URLParams)
        },300)
        
        return ()=>{
            clearTimeout(FetchTimeout)
        }
    },[URLParams]);

    

    return (
        <Outlet />
    )
}