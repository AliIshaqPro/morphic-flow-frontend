
import React, { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Grid, Bookmark, Settings, User, CreditCard, Download, Bell, LogOut } from "lucide-react";
import { toast } from "sonner";
import DashboardHome from "@/components/dashboard/DashboardHome";
import DashboardThemes from "@/components/dashboard/DashboardThemes";
import DashboardSettings from "@/components/dashboard/DashboardSettings";
import DashboardProfile from "@/components/dashboard/DashboardProfile";
import DashboardBilling from "@/components/dashboard/DashboardBilling";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  const handleNavigation = (path: string, label: string) => {
    setActiveTab(path);
    // For demonstration purposes, we'll just show a toast instead of actual navigation
    toast.success(`Navigated to ${label}`);
  };
  
  return (
    <div className="min-h-screen bg-theme-darker flex">
      {/* Sidebar */}
      <aside className="w-64 hidden md:block bg-theme-dark border-r border-gray-800 p-4 fixed h-screen overflow-y-auto">
        <div className="mb-8 px-2">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-theme-purple">
              ThemeMorphic
            </span>
          </Link>
        </div>
        
        <nav className="space-y-1">
          <NavItem 
            href="#" 
            icon={<Grid size={18} />} 
            active={activeTab === "dashboard"}
            onClick={() => handleNavigation("dashboard", "Dashboard")}
          >
            Dashboard
          </NavItem>
          <NavItem 
            href="#" 
            icon={<Bookmark size={18} />}
            active={activeTab === "themes"}
            onClick={() => handleNavigation("themes", "My Themes")}
          >
            My Themes
          </NavItem>
          <NavItem 
            href="#" 
            icon={<Settings size={18} />}
            active={activeTab === "settings"}
            onClick={() => handleNavigation("settings", "Settings")}
          >
            Settings
          </NavItem>
          <NavItem 
            href="#" 
            icon={<User size={18} />}
            active={activeTab === "profile"}
            onClick={() => handleNavigation("profile", "Profile")}
          >
            Profile
          </NavItem>
          <NavItem 
            href="#" 
            icon={<CreditCard size={18} />}
            active={activeTab === "billing"}
            onClick={() => handleNavigation("billing", "Billing")}
          >
            Billing
          </NavItem>
        </nav>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={() => toast.info("Logged out successfully!")}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </Button>
        </div>
      </aside>
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-theme-dark border-b border-gray-800 z-20">
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-theme-purple">
              ThemeMorphic
            </span>
          </Link>
          <Button variant="outline" size="sm">
            <Grid className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-1 md:ml-64 pt-16 md:pt-0">
        <div className="container mx-auto px-4 py-8">
          {activeTab === "dashboard" && <DashboardHome />}
          {activeTab === "themes" && <DashboardThemes />}
          {activeTab === "settings" && <DashboardSettings />}
          {activeTab === "profile" && <DashboardProfile />}
          {activeTab === "billing" && <DashboardBilling />}
        </div>
      </main>
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ href, icon, children, active = false, onClick }) => (
  <Link 
    to={href}
    onClick={onClick}
    className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
      active 
        ? 'bg-theme-blue/10 text-theme-blue' 
        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
    }`}
  >
    <span className="mr-3">{icon}</span>
    <span>{children}</span>
  </Link>
);

export default Dashboard;
