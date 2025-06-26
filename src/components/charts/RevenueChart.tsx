
import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", revenue: 65000, target: 70000 },
  { month: "Feb", revenue: 72000, target: 75000 },
  { month: "Mar", revenue: 68000, target: 72000 },
  { month: "Apr", revenue: 84000, target: 80000 },
  { month: "May", revenue: 91000, target: 85000 },
  { month: "Jun", revenue: 87000, target: 90000 },
  { month: "Jul", revenue: 95000, target: 92000 },
  { month: "Aug", revenue: 103000, target: 98000 },
  { month: "Sep", revenue: 108000, target: 105000 },
  { month: "Oct", revenue: 115000, target: 110000 },
  { month: "Nov", revenue: 122000, target: 118000 },
  { month: "Dec", revenue: 124000, target: 125000 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(217, 91%, 60%)",
  },
  target: {
    label: "Target",
    color: "hsl(217, 91%, 80%)",
  },
};

const RevenueChart = () => {
  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-slate-800">Revenue Growth</h3>
        <p className="text-sm text-slate-600">Monthly revenue vs target performance</p>
      </div>
      
      <ChartContainer config={chartConfig} className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(217, 91%, 80%)" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="hsl(217, 91%, 80%)" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(215, 16%, 47%)' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(215, 16%, 47%)' }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <ChartTooltip 
              content={<ChartTooltipContent />}
              formatter={(value: any) => [`$${value.toLocaleString()}`, ""]}
            />
            <Area
              type="monotone"
              dataKey="target"
              stroke="hsl(217, 91%, 80%)"
              strokeWidth={2}
              fill="url(#colorTarget)"
              strokeDasharray="5 5"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="hsl(217, 91%, 60%)"
              strokeWidth={3}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
};

export default RevenueChart;
