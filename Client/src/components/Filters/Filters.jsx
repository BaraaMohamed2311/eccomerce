import "./filter.css";
import {filters , categories} from "./filter";
import FilterOptions from "../FilterOptions/FilterOptions";
import useEditSearchParams from "../../hooks/useEditSearchParams";
import { Link } from "react-router-dom";
function Filter(){
    const clearSearchParams = new useEditSearchParams("CLEAR");
    const editSearchParams = new useEditSearchParams("SET");
    return (
        <div className="filter">
            {filters.map((filter)=>{
                return(
                    <FilterOptions key={filter.title} filter={filter} />
                )
            })}
            <div className="categories">
            {categories.map((categ)=>{
                return <Link onClick={()=>editSearchParams("categ" , categ)} className="category" key={categ} >{categ}</Link>
            })}
            </div>
            <button onClick={()=>clearSearchParams()}className="clearAllFilters">Clear All Filters</button>
        </div>
    )
}

export default Filter;