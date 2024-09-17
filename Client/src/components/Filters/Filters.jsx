import "./filter.css";
import {filters} from "./filter";
import FilterOptions from "../FilterOptions/FilterOptions";
import { useQueryContext } from "../../Contexts/queryContext";

function Filter(){
    const {setQueryState} = useQueryContext();
    
    return (
        <div className="filter">
            {filters.map((filter)=>{
                return(
                    <FilterOptions key={filter.title} filter={filter} />
                )
            })}
            {/* we delete all filter properties except the current page value*/}
            <button onClick={()=> setQueryState(prev =>{return {currpage :prev.currpage}})} className="clearAllFilters">Clear All Filters</button>
        </div>
    )
}

export default Filter;