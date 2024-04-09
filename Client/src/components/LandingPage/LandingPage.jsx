import "./landingpage.css"
import Filter from "../../components/Filters/Filters"
import MainWrapper from "../MainWrapper/MainWrapper"
function LandingPage(){
    return (
        <div className="landingpage">
            <Filter />
            <MainWrapper />
            
        </div>
    )
}

export default LandingPage;