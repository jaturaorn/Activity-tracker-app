import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartDash = () => {

    const data = [
        {
          name: 'JAN',
          Duration: 4000,
          Energyburn: 2400,
          amt: 2400,
        },
        {
          name: 'FEB',
          Duration: 3000,
          Energyburn: 1398,
          amt: 2210,
        },
        {
          name: 'APR',
          Duration: 2000,
          Energyburn: 9800,
          amt: 2290,
        },
        {
          name: 'MAR',
          Duration: 2780,
          Energyburn: 3908,
          amt: 2000,
        },
        {
          name: 'JUN',
          Duration: 1890,
          Energyburn: 4800,
          amt: 2181,
        },
      ];

  return (
    <div className='flex'>
        <div className='basis-[60%]'>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Energyburn" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Duration" stroke="#82ca9d" />
        </LineChart>
        </div>
    </div>
  )
}

export default ChartDash