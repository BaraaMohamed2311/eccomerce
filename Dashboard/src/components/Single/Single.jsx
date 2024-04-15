import './single.css'
import {LineChart,XAxis,YAxis,
    Tooltip,Legend,Line} from 'recharts'
    

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

function Single(){

    return (
        <div className="single">

        

        <div className="veiw">
        <div className="info">
            <div className="top-info">
                <img src="imgs/33.jpg" alt="" />
                <h1>Single Name</h1>
                <button>Update</button>
            </div>
            <div className="item">
                    <span className='item-title'>Title :</span>
                    <span className='item-value'>Single title</span>
                </div>
                <div className="item">
                    <span className='item-title'>Title :</span>
                    <span className='item-value'>Single title</span>
                </div>
                <div className="item">
                    <span className='item-title'>Title :</span>
                    <span className='item-value'>Single title</span>
                </div>
            
            <div className="bottom-info">
            <div className="chart">
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip position={{ x: 520, y: 140 }} contentStyle={{backgroundColor:"transparent",borderRadius:"5px"}}/>
          <Legend  />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        </div>
            </div>
        </div>
        


        </div>
        <div className="activities">
            <h2>Latest Activities</h2>
            <ul>
                <li>
                    <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt iusto ur nisi blanditiis in!</p>
                    <time> 2 days ago</time>
                    </div>
                    
                </li>
            </ul>
        </div>



        </div>

    )


}


export default Single;