import React from 'react';
import './index.css';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
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
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value} Votes`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

class Sond extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reponse: [],
            activeIndex: 0,
            colors: ['#F1AD6E', '#DF7979', '#6225E6', '#8B8A89']
        };
    }

    callAPI() {
        fetch("http://localhost:7000/sond")
            .then(res => res.json())
            .then(res => {
                this.setState({ reponse: res });
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
        if (this.state.reponse) {
            const rep = this.state.reponse.slice();
            var colors = this.state.colors.slice();
            var activeI = this.state.activeIndex;
            var data = [];
            console.log('Vraie data : ' + data);
            for (var i = 0; i < rep.length; i++) {
                const candi = rep[i].candi;
                const num = rep[i].num;
                const col = rep[i].col;
                console.log('Candi : ' + candi);
                console.log('Num : ' + num);
                console.log('Col : ' + col);
                data.push({ candi, num, col });
            }
            console.log('Data : ' + data);
            return (
                <div className="">
                    <ResponsiveContainer width="100%" height={350}>
                        <PieChart>
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
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            );
        }
        return null;
    }
}
export default Sond;