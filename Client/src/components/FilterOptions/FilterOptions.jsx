/* eslint-disable react/prop-types */
import useEditSearchParams from "../../hooks/useEditSearchParams";
import "./filteroptions.css"
import { Link } from "react-router-dom";
function FilterOptions({filter}){
    // we create instance of current search params hook then we call it again to pass query params values
    const editSearchParams = new useEditSearchParams("SET");


    return (
        <>
        <h2 className="filter-title">{filter.title}</h2>
                <ul className="filter-ul">
            {/*if it's not a rating just render*/}
                    { filter.title !== "Rating" &&
                        filter.options.map((option)=>{
                            return(
                                <li onClick={()=>editSearchParams(filter.title , option.value)} className="filter-li" key={option.key}>
                                    <Link className="filter-link">{option.value}</Link>
                                </li>
                            )
                        })
                    }
            {/*if it's  a rating replace withs stars*/}
                    {
                        filter.title === "Rating" && filter.options.map((option)=>{
                        
                            return(
                            <li key={option.key} className="filter-li" >
                                <Link onClick={()=>editSearchParams(filter.title , option.value)} className="stars filter-link">
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
                        { filter.title === "categories" && filter.options.map((option)=>{
                            return <Link onClick={()=>editSearchParams("categ" , option.value)} className="category" key={option.key} >{option.value}</Link>
                        })}
                    </div>
                </ul>
        </>
            )

            }

    export default FilterOptions;
