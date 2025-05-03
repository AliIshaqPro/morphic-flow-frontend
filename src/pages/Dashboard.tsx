
import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Grid, Bookmark, Settings, User, CreditCard, Download, Bell, LogOut } from "lucide-react";
import { toast } from "sonner";
import DashboardHome from "@/components/dashboard/DashboardHome";
import DashboardThemes from "@/components/dashboard/DashboardThemes";
import DashboardSettings from "@/components/dashboard/DashboardSettings";
import DashboardProfile from "@/components/dashboard/DashboardProfile";
import DashboardBilling from "@/components/dashboard/DashboardBilling";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  
  // Set the active tab based on the hash in the URL or default to dashboard
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setActiveTab(hash);
    } else {
      setActiveTab("dashboard");
    }
  }, [location]);

  const handleNavigation = (path: string, label: string) => {
    setActiveTab(path);
    // Update the URL hash for better navigation
    navigate(`#${path}`);
    toast.success(`Navigated to ${label}`);
  };
  
  // Function to render the correct dashboard component based on active tab
  const renderDashboardContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardHome />;
      case "themes":
        return <DashboardThemes />;
      case "settings":
        return <DashboardSettings />;
      case "profile":
        return <DashboardProfile />;
      case "billing":
        return <DashboardBilling />;
      default:
        return <DashboardHome />;
    }
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
            href="#dashboard" 
            icon={<Grid size={18} />} 
            active={activeTab === "dashboard"}
            onClick={() => handleNavigation("dashboard", "Dashboard")}
          >
            Dashboard
          </NavItem>
          <NavItem 
            href="#themes" 
            icon={<Bookmark size={18} />}
            active={activeTab === "themes"}
            onClick={() => handleNavigation("themes", "My Themes")}
          >
            My Themes
          </NavItem>
          <NavItem 
            href="#settings" 
            icon={<Settings size={18} />}
            active={activeTab === "settings"}
            onClick={() => handleNavigation("settings", "Settings")}
          >
            Settings
          </NavItem>
          <NavItem 
            href="#profile" 
            icon={<User size={18} />}
            active={activeTab === "profile"}
            onClick={() => handleNavigation("profile", "Profile")}
          >
            Profile
          </NavItem>
          <NavItem 
            href="#billing" 
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
            onClick={() => {
              toast.info("Logged out successfully!");
              navigate("/");
            }}
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
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                const mobileMenu = document.getElementById("mobile-menu");
                if (mobileMenu) {
                  mobileMenu.classList.toggle("hidden");
                }
              }}
            >
              <Grid className="h-5 w-5" />
            </Button>
            <div className="relative">
              <Bell className="h-5 w-5 text-gray-400" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-theme-purple rounded-full"></span>
            </div>
          </div>
        </div>
        
        {/* Mobile menu dropdown */}
        <div id="mobile-menu" className="hidden absolute w-full bg-theme-dark border-b border-gray-800 shadow-lg z-30">
          <nav className="p-4 space-y-1">
            <MobileNavItem 
              label="Dashboard" 
              active={activeTab === "dashboard"}
              onClick={() => handleNavigation("dashboard", "Dashboard")}
            />
            <MobileNavItem 
              label="My Themes" 
              active={activeTab === "themes"}
              onClick={() => handleNavigation("themes", "My Themes")}
            />
            <MobileNavItem 
              label="Settings" 
              active={activeTab === "settings"}
              onClick={() => handleNavigation("settings", "Settings")}
            />
            <MobileNavItem 
              label="Profile" 
              active={activeTab === "profile"}
              onClick={() => handleNavigation("profile", "Profile")}
            />
            <MobileNavItem 
              label="Billing" 
              active={activeTab === "billing"}
              onClick={() => handleNavigation("billing", "Billing")}
            />
            <div className="border-t border-gray-700 my-2 pt-2">
              <MobileNavItem 
                label="Log Out" 
                active={false}
                onClick={() => {
                  toast.info("Logged out successfully!");
                  navigate("/");
                }}
              />
            </div>
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-1 md:ml-64 pt-16 md:pt-0">
        <div className="container mx-auto px-4 py-8">
          {renderDashboardContent()}
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

// Mobile Navigation Item
const MobileNavItem = ({ label, active = false, onClick }) => (
  <Button 
    variant="ghost" 
    className={`w-full justify-start ${
      active ? 'bg-theme-blue/10 text-theme-blue' : 'text-gray-400'
    }`}
    onClick={onClick}
  >
    {label}
  </Button>
);

export default Dashboard;
