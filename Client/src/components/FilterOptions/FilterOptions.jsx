/* eslint-disable react/prop-types */

import "./filteroptions.css"
import { Link } from "react-router-dom";
import {useQueryContext} from "../../Contexts/queryContext"
import useEditUrlSearchParams from "../../hooks/useEditUrlSearchParams"
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function FilterOptions({filter}){
    const {setQueryState} = useQueryContext();
    let [searchParams , setSearchParams] = useSearchParams();
    let [isFetching , setIsFetching] = useState(false);
    return (
        <>
        <h2 className="filter-title">{filter.title}</h2>
                <ul className="filter-ul">
            {/*if it's not a rating just render*/}
                    { filter.title !== "Rating" && filter.title !== "Categories" &&
                        filter.options.map((option)=>{
                            return(
                                <li   onClick={()=>setQueryState(prev=>{return{...prev ,price :option.value}})}  className="filter-li" key={option.key}>
                                    <Link className="filter-link">{option.value}</Link>
                                </li>
                            )
                        })
                    }
            {/*if it's  a rating replace withs stars*/}
                    {
                        filter.title === "Rating" && filter.options.map((option)=>{
                        
                            return(
                            <li  onClick={  ()=>{ setQueryState(prev=>{return{...prev ,rating :option.key}})  } } key={option.key} className="filter-li" >
                                <Link  className="stars filter-link">
                                    {option.colors.map((color)=>{
                                        return (
                                            <ion-icon key={color.colorKey} style={{color:color.colorVal}} name="star"></ion-icon>
                                        )
                                    })}
                                </Link>
                            </li>
                        )
                        })
                    }
                    <div className="categories">
                        { filter.title === "Categories" && filter.options.map((option)=>{
                            return <Link onClick={()=>setQueryState(prev=>{return{...prev ,categ :option.value}})}  className="category" key={option.key} >{option.value}</Link>
                        })}
                    </div>
                </ul>
        </>
            )

            }

    export default FilterOptions;
