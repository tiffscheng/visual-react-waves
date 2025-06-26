
import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { week: "Week 1", newUsers: 420, activeUsers: 3200 },
  { week: "Week 2", newUsers: 385, activeUsers: 3450 },
  { week: "Week 3", newUsers: 510, activeUsers: 3800 },
  { week: "Week 4", newUsers: 670, activeUsers: 4200 },
  { week: "Week 5", newUsers: 590, activeUsers: 4650 },
  { week: "Week 6", newUsers: 720, activeUsers: 5100 },
  { week: "Week 7", newUsers: 810, activeUsers: 5600 },
  { week: "Week 8", newUsers: 750, activeUsers: 6000 },
  { week: "Week 9", newUsers: 920, activeUsers: 6500 },
  { week: "Week 10", newUsers: 880, activeUsers: 7200 },
  { week: "Week 11", newUsers: 1050, activeUsers: 7800 },
  { week: "Week 12", newUsers: 980, activeUsers: 8429 },
];

const chartConfig = {
  newUsers: {
    label: "New Users",
    color: "hsl(142, 76%, 36%)",
  },
  activeUsers: {
    label: "Active Users",
    color: "hsl(221, 83%, 53%)",
  },
};

const UserGrowthChart = () => {
  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-slate-800">User Growth</h3>
        <p className="text-sm text-slate-600">Weekly new users vs total active users</p>
      </div>
      
      <ChartContainer config={chartConfig} className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <XAxis 
              dataKey="week" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(215, 16%, 47%)' }}
              interval={1}
            />
            <YAxis 
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(215, 16%, 47%)' }}
              tickFormatter={(value) => `${value}`}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(215, 16%, 47%)' }}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <ChartTooltip 
              content={<ChartTooltipContent />}
              formatter={(value: any, name: string) => [
                name === 'activeUsers' ? `${value.toLocaleString()}` : `${value}`,
                ""
              ]}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="newUsers"
              stroke="hsl(142, 76%, 36%)"
              strokeWidth={3}
              dot={{ fill: 'hsl(142, 76%, 36%)', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: 'hsl(142, 76%, 36%)' }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="activeUsers"
              stroke="hsl(221, 83%, 53%)"
              strokeWidth={3}
              dot={{ fill: 'hsl(221, 83%, 53%)', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: 'hsl(221, 83%, 53%)' }}
              strokeDasharray="10 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
};

export default UserGrowthChart;
