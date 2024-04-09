import "./filter.css";
import filters from "./filter";
import FilterOptions from "../FilterOptions/FilterOptions";
function Filter(){
    return (
        <div className="filter">
            {filters.map((filter)=>{
                return(
                    <FilterOptions key={filter.title} filter={filter} />
                )
            })}
            <button className="clearAllFilters">Clear All Filters</button>
        </div>
    )
}

export default Filter;