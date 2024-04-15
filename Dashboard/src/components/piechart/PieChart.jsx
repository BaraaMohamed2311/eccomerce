import "./piechart.css";
import { ResponsiveContainer,PieChart ,Cell,Pie , Tooltip } from "recharts";

const data = [
    { name: "Electronics", value: 400, color: "#0088FE" },
    { name: "Self Care", value: 300, color: "#00C49F" },
    { name: "Movies", value: 300, color: "#FFBB28" },
    { name: "Tv Series", value: 200, color: "#FF8042" },
    { name: "Clothes", value: 200, color: "#FFFFFF" }
  ];
  
function PieChartBox() {

  return (
    
    <div className="piechart-box">
      <h1>Categories Revenue</h1>
      <div className="piechart">
        <ResponsiveContainer width="99%" height={400}>
        <PieChart width={800} height={400} >
            <Tooltip 
            contentStyle={{backgroundColor:"white",borderRadius:"5px"}}
            />
        <Pie
          data={data}
          innerRadius={100}
          outerRadius={125}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
        </Pie>
      </PieChart>
      </ResponsiveContainer>
      </div>
      <div className="pie-sections">
      {data.map((item) => (
          <div className="pie-section" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span className="item">{item.name}</span>
            </div>
            <span className="item">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartBox;
