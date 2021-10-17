import React from 'react';
import { BarChart, Bar, XAxis, Tooltip } from 'recharts';
const data = [
    {name: 'JavaScript', years: 8, proficiency: 10},
    {name: 'PHP', years: 10, proficiency: 10},
    {name: 'CSS', years: 10, proficiency: 12},
    {name: 'SQL', years: 10, proficiency: 12}
];

const Skills = () => {
    return (
        <div>
            <BarChart
            width={400}
            height={200}
            data={data}
            margin={{ top: 5, right: 20, left: 45, bottom: 5 }}
            >
            <XAxis dataKey="name" />
            <Tooltip />
            {/* <CartesianGrid stroke="#ccc" /> */}
            <Bar type="monotone" dataKey="years" fill="#ff7300" yAxisId={0} />
            </BarChart>
        </div>
    );
};

export default Skills;
