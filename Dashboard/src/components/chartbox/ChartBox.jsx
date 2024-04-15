/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './chartbox.css';
import { ResponsiveContainer,LineChart,Line, Tooltip } from 'recharts';


function ChartBox(props){
    return(
        
        <div className='chartbox'>
            <div className="box-info">
            <div className="title">{props.title}</div>
                <h1>{props.number}</h1>
                <Link style={{color:props.color}} to="/" className='chart-link'>View more</Link>
            </div>
            <div className="chart-info">
                <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
        <LineChart  data={props.chartData}>
            
            <Tooltip 
            contentStyle={{background:"transparent", border:"transparent"}} 
            labelStyle={{display:"none"}}
            position={{ x: 50, y: 50 }}
            /> 
          <Line type="monotone" 
          dataKey={props.dataKey} 
          dot={false} 
          stroke={props.color} 
          strokeWidth={2} />

        </LineChart>
      </ResponsiveContainer>
                </div>
                <div className='percent' style={{color: props.percentage <0 ? "tomato" : "limegreen"}}>{props.percentage}%</div>
                <div className='duration'>this month</div>
            </div>
        </div>
        
        
    )
}

export default ChartBox;