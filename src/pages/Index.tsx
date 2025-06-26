
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RevenueChart from "@/components/charts/RevenueChart";
import UserGrowthChart from "@/components/charts/UserGrowthChart";
import CategoryDistribution from "@/components/charts/CategoryDistribution";
import PerformanceMetrics from "@/components/charts/PerformanceMetrics";
import { TrendingUp, Users, DollarSign, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-slate-800 mb-2">Analytics Dashboard</h1>
          <p className="text-slate-600 text-lg">Real-time insights and performance metrics</p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Revenue</p>
                <p className="text-2xl font-light text-slate-900">$124,592</p>
                <p className="text-xs text-emerald-600 mt-1">+12.5% from last month</p>
              </div>
              <div className="p-3 bg-emerald-100 rounded-full">
                <DollarSign className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Users</p>
                <p className="text-2xl font-light text-slate-900">8,429</p>
                <p className="text-xs text-blue-600 mt-1">+8.2% from last week</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Growth Rate</p>
                <p className="text-2xl font-light text-slate-900">23.1%</p>
                <p className="text-xs text-purple-600 mt-1">+2.4% from last quarter</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Conversion</p>
                <p className="text-2xl font-light text-slate-900">4.7%</p>
                <p className="text-xs text-orange-600 mt-1">+0.8% from last month</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <BarChart3 className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Charts Section */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="overview" className="text-slate-700">Overview</TabsTrigger>
            <TabsTrigger value="revenue" className="text-slate-700">Revenue</TabsTrigger>
            <TabsTrigger value="users" className="text-slate-700">Users</TabsTrigger>
            <TabsTrigger value="analytics" className="text-slate-700">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RevenueChart />
              <UserGrowthChart />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CategoryDistribution />
              <PerformanceMetrics />
            </div>
          </TabsContent>
          
          <TabsContent value="revenue" className="space-y-6">
            <RevenueChart />
            <CategoryDistribution />
          </TabsContent>
          
          <TabsContent value="users" className="space-y-6">
            <UserGrowthChart />
            <PerformanceMetrics />
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PerformanceMetrics />
              <CategoryDistribution />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
