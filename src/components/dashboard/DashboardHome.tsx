
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Bell } from "lucide-react";

const data = [
  { name: "Jan", visits: 1000, downloads: 400 },
  { name: "Feb", visits: 1200, downloads: 300 },
  { name: "Mar", visits: 800, downloads: 600 },
  { name: "Apr", visits: 1600, downloads: 900 },
  { name: "May", visits: 1700, downloads: 1000 },
  { name: "Jun", visits: 1400, downloads: 800 },
  { name: "Jul", visits: 2000, downloads: 1200 },
];

const DashboardHome: React.FC = () => {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-400">Welcome back, John!</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-4">
          <div className="relative">
            <Bell className="h-5 w-5 text-gray-400" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-theme-purple rounded-full"></span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">JD</span>
            </div>
            <span>John Doe</span>
          </div>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { title: "Active Themes", value: "5", change: "+1 this month" },
          { title: "Downloads", value: "256", change: "+24% from last month" },
          { title: "Support Tickets", value: "2", change: "1 resolved, 1 open" },
          { title: "Subscription", value: "Pro", change: "Renews in 240 days" }
        ].map((stat, index) => (
          <Card key={index} className="glass-card border-t-4 border-t-blue-500">
            <CardContent className="p-6">
              <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
              <p className="text-2xl font-bold mb-2">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Analytics Chart */}
      <Card className="mb-8 p-6 glass-card">
        <h2 className="text-xl font-semibold mb-4">Analytics Overview</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip contentStyle={{ background: "#1A1F2C", border: "1px solid #333" }} />
              <Line type="monotone" dataKey="visits" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="downloads" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
      
      {/* Activity Feed */}
      <Card className="glass-card">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: "Downloaded Business Pro theme", time: "2 hours ago" },
              { action: "Created new theme", time: "2 days ago" },
              { action: "Renewed subscription", time: "1 week ago" },
              { action: "Support ticket resolved", time: "2 weeks ago" }
            ].map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-theme-blue mt-2 mr-3"></div>
                <div>
                  <p className="text-sm">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default DashboardHome;
