import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useStats } from "../shared/statsContext"

const DashboardTrackingHistory = () => {
  const { weeklyActivityTypeStats } = useStats();

  return (
    <div className='col-span-7 grid- rounded-t-xl shadow-lg max-md:rounded-t-none max-lg:h-550 max-md:h-64 z-0'>
      <ResponsiveContainer width="99%" height={"99%"}>
        <BarChart data={weeklyActivityTypeStats}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="activityType" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DashboardTrackingHistory