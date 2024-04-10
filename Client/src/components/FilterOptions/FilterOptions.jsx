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
                                <li onClick={()=>editSearchParams(filter.title , option)} className="filter-li" key={option}>
                                    <Link className="filter-link">{option}</Link>
                                </li>
                            )
                        })
                    }
            {/*if it's  a rating replace withs stars*/}
                    {
                        filter.title === "Rating" &&
                        <>
                        <li className="filter-li" >
                            <Link onClick={()=>editSearchParams(filter.title , 1)} className="stars filter-link">
                                <ion-icon style={{color:"#ceaf00"}} name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                            </Link>
                        </li>
                        <li className="filter-li" >
                            <Link onClick={()=>editSearchParams(filter.title , 2)} className="stars filter-link">
                                <ion-icon style={{color:"#ceaf00"}} name="star"></ion-icon>
                                <ion-icon style={{color:"#ceaf00"}} name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                            </Link>
                        </li>
                        <li className="filter-li" >
                            <Link onClick={()=>editSearchParams(filter.title , 3)} className="stars filter-link">
                            <ion-icon style={{color:"#ceaf00"}} name="star"></ion-icon>
                                <ion-icon style={{color:"#ceaf00"}} name="star"></ion-icon>
                                <ion-icon style={{color:"#ceaf00"}} name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                            </Link>
                        </li>
                        <li className="filter-li">
                            <Link onClick={()=>editSearchParams(filter.title , 4)} className="stars filter-link">
                                <ion-icon style={{color:"#ceaf00"}} name="star"></ion-icon>
                                <ion-icon style={{color:"#ceaf00"}} name="star"></ion-icon>
                                <ion-icon style={{color:"#ceaf00"}} name="star"></ion-icon>
                                <ion-icon style={{color:"#ceaf00"}}  name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                            </Link>
                        </li>
                        <li className="filter-li" >
                            <Link onClick={()=>editSearchParams(filter.title , 5)} className="stars filter-link">
                                <ion-icon style={{color:"#ceaf00"}} name="star"></ion-icon>
                                <ion-icon style={{color:"#ceaf00"}} name="star"></ion-icon>
                                <ion-icon style={{color:"#ceaf00"}} name="star"></ion-icon>
                                <ion-icon style={{color:"#ceaf00"}} name="star"></ion-icon>
                                <ion-icon style={{color:"#ceaf00"}} name="star"></ion-icon>
                            </Link>
                        </li>
                        </>
                    }
                </ul>
        </>
            )

            }

    export default FilterOptions;
