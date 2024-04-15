/* eslint-disable react/prop-types */
import "./barchart.css";
import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";



 
function BarChartBox(props) {
  
  return (
    
    <div className="barchart-box">
      <h1>{props.title}</h1>
      <div className="barchart">
        <ResponsiveContainer width="99%" height={135}>
          <BarChart width={150} height={40} data={props.chartData}>
          <Tooltip 
            contentStyle={{backgroundColor:"#24272c",border:"1px solid #fff",borderRadius:"5px"}}
            labelStyle={{display:"none"}}
            cursor={{fill:"none"}/*عشان الباكجراوند اللي ورا البارات اللي بتظهر مع الهوفر */}  
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}      

export default BarChartBox;
