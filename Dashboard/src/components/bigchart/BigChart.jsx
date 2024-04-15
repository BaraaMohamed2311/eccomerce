import './bigchart.css'
import {ResponsiveContainer,AreaChart,CartesianGrid,
    XAxis,YAxis,Tooltip,Area
} from 'recharts';

const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Sep',
      uv: 1490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Oct',
      uv: 3290,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Nov',
      uv: 2490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Dec',
      uv: 3000,
      pv: 4300,
      amt: 2100,
    },
  ];
  

function BigChartBox(){
    return (
        <div className="bigchart-box">
            <h1>Last Year Revenue</h1>
            <div className="bigchart">
            <ResponsiveContainer width="100%" height="100%" >
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BigChartBox;