
import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Technology", value: 35, color: "hsl(217, 91%, 60%)" },
  { name: "Marketing", value: 25, color: "hsl(142, 76%, 36%)" },
  { name: "Sales", value: 20, color: "hsl(262, 83%, 58%)" },
  { name: "Support", value: 12, color: "hsl(25, 95%, 53%)" },
  { name: "Operations", value: 8, color: "hsl(348, 83%, 47%)" },
];

const chartConfig = {
  value: {
    label: "Percentage",
  },
};

const CategoryDistribution = () => {
  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-slate-800">Category Distribution</h3>
        <p className="text-sm text-slate-600">Revenue breakdown by department</p>
      </div>
      
      <div className="flex items-center justify-between">
        <ChartContainer config={chartConfig} className="h-[300px] w-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip 
                content={<ChartTooltipContent />}
                formatter={(value: any) => [`${value}%`, ""]}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        
        <div className="flex-1 ml-8">
          <div className="space-y-4">
            {data.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-3"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm font-medium text-slate-700">{item.name}</span>
                </div>
                <span className="text-sm font-semibold text-slate-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CategoryDistribution;
