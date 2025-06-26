
import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { metric: "Speed", current: 85, target: 90, benchmark: 75 },
  { metric: "Quality", current: 92, target: 95, benchmark: 88 },
  { metric: "Efficiency", current: 78, target: 85, benchmark: 70 },
  { metric: "Reliability", current: 96, target: 98, benchmark: 92 },
  { metric: "Security", current: 89, target: 95, benchmark: 85 },
  { metric: "Scalability", current: 82, target: 90, benchmark: 78 },
];

const chartConfig = {
  current: {
    label: "Current",
    color: "hsl(217, 91%, 60%)",
  },
  target: {
    label: "Target",
    color: "hsl(142, 76%, 36%)",
  },
  benchmark: {
    label: "Benchmark",
    color: "hsl(215, 16%, 65%)",
  },
};

const PerformanceMetrics = () => {
  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-slate-800">Performance Metrics</h3>
        <p className="text-sm text-slate-600">Current performance vs targets and benchmarks</p>
      </div>
      
      <ChartContainer config={chartConfig} className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <XAxis 
              dataKey="metric" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(215, 16%, 47%)' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(215, 16%, 47%)' }}
              domain={[0, 100]}
            />
            <ChartTooltip 
              content={<ChartTooltipContent />}
              formatter={(value: any) => [`${value}%`, ""]}
            />
            <Bar 
              dataKey="benchmark" 
              fill="hsl(215, 16%, 65%)"
              radius={[2, 2, 0, 0]}
              maxBarSize={60}
            />
            <Bar 
              dataKey="current" 
              fill="hsl(217, 91%, 60%)"
              radius={[2, 2, 0, 0]}
              maxBarSize={60}
            />
            <Bar 
              dataKey="target" 
              fill="hsl(142, 76%, 36%)"
              radius={[2, 2, 0, 0]}
              maxBarSize={60}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
};

export default PerformanceMetrics;
