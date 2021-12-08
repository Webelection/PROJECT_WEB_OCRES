import React from 'react';
import './index.css';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 18) * cos;
    const my = cy + (outerRadius + 20) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 14;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text font-size="1.1vw" fontWeight="bold" x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.candi}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text fontSize="1.2vw" fontWeight="bold" x={ex + (cos >= 0 ? 1 : -1) * 3} y={(ey + 5)} textAnchor={textAnchor} fill={fill}>{`${value}%`}</text>
        </g>
    );
};

class Sond extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            reponse: [],
            activeIndex: 0,
            colors: ['#F1AD6E', '#DF7979', '#6225E6', '#8B8A89']
        };
    }

    callAPI() {
        fetch("http://localhost:7000/sond")
            .then(res => res.json())
            .then(res => {
                this.setState({ 
                    isLoaded: true,
                    reponse: res 
                });
            });
    }

    UNSAFE_componentWillMount() {
        this.callAPI();
    }

    onPieEnter = (_, index) => {
        this.setState({
            activeIndex: index,
        });
    };

    render() {
        if (this.state.isLoaded) {
            const rep = this.state.reponse.slice();
            var activeI = this.state.activeIndex;
            var data = [];
            var legend = [];
            var date = rep[0].date;
            for (var i = 0; i < rep.length; i++) {
                const candi = rep[i].candi;
                const num = rep[i].num;
                const col = rep[i].col;
                data.push({ candi, num, col });
                legend.push({value: candi, type: "square", color: `${col}`});
            }
            return (
                <div className="sondageWidg">
                    <h3 height="12%">Sondage réalisé le {date}</h3>
                    <div className="sondage">
                    <ResponsiveContainer width="95%" height={290}>
                        <PieChart>
                            <Legend payload={legend} layout="vertical" verticalAlign="middle" align="right" />
                            <Pie
                                activeIndex={activeI}
                                activeShape={renderActiveShape}
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius="60%"
                                dataKey="num"
                                onMouseEnter={this.onPieEnter}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={`${data[index].col}`} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    </div>
                </div>
            );
        }
        else{
            return ("Chargement...");
        }
    }
}
export default Sond;