import "./filter.css";
import filters from "./filter";
import FilterOptions from "../FilterOptions/FilterOptions";
import useEditSearchParams from "../../hooks/useEditSearchParams";
function Filter(){
    const clearSearchParams = new useEditSearchParams("CLEAR");
    return (
        <div className="filter">
            {filters.map((filter)=>{
                return(
                    <FilterOptions key={filter.title} filter={filter} />
                )
            })}
            <button onClick={()=>clearSearchParams()}className="clearAllFilters">Clear All Filters</button>
        </div>
    )
}

export default Filter;