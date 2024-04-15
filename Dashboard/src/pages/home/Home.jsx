import './home.css';
import TopBox from '../../components/TopBox/TopBox';
import ChartBox from '../../components/chartbox/ChartBox';
import {chartBoxUser,chartBoxProduct,chartBoxRevenue,chartBoxConversion,barChartBoxVisit,barChartBoxRevenue} from '../../../data'
import  BarChartBox  from '../../components/barchart/BarChart';
import PieChartBox from '../../components/piechart/PieChart';
import BigChartBox from '../../components/bigchart/BigChart'
import {useAllUsersContext} from "../../Contexts/AllUsersContext";
import {useAllProductsContext}  from "../../Contexts/AllProductsContext";
import useFetchAllUsers from "../../hooks/useFetchAllUsers"
import useFetchAllProducts from "../../hooks/useFetchAllProducts"
function Home(){
    // using contexts for charts
    const {allUsersData , setallUsersData} = useAllUsersContext()
    const {allProductsData , setallProductsData} = useAllProductsContext()
    // fetching users data & updating context 
    useFetchAllUsers("token",setallUsersData);
    useFetchAllProducts("token",setallProductsData)
    console.log("allUsersData from context",allUsersData);
    console.log("allProductsData from context",allProductsData)
    return(
        <div className="home">

            <div className="box one-row one-col"><ChartBox  {...allUsersData}/></div>
            <div className="box one-row one-col"><ChartBox {...allProductsData}/></div>
            <div className="box one-row one-col"><ChartBox {...chartBoxRevenue}/></div>
            <div className="box one-row one-col"><BarChartBox {...barChartBoxRevenue} /></div>
            <div className="box three-row three-col"><BigChartBox /></div>
            <div className="box three-row  one-col"><PieChartBox  /></div>
            
            
        </div>
    )
}












export default Home ;