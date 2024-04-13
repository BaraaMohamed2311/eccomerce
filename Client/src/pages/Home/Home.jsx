import "./home.css"
import Filter from "../../components/Filters/Filters"
import MainWrapper from "../../components/MainWrapper/MainWrapper"

function Home(){
    return (
        <div className="home">
            <Filter />
            <MainWrapper />
        </div>
    )
}

export default Home