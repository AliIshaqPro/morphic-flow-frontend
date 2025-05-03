
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Download, Edit, Trash2, Eye } from "lucide-react";
import { toast } from "sonner";

const DashboardThemes: React.FC = () => {
  const [themes, setThemes] = useState([
    { id: 1, name: "Business Pro", type: "Business", lastModified: "2 days ago", preview: "/lovable-uploads/f1c029fb-9214-468d-8426-700129fcec9e.png" },
    { id: 2, name: "Real Estate Modern", type: "Real Estate", lastModified: "1 week ago", preview: "/placeholder.svg" },
    { id: 3, name: "Educational Platform", type: "Education", lastModified: "2 weeks ago", preview: "/placeholder.svg" },
    { id: 4, name: "Tech Startup", type: "SaaS", lastModified: "1 month ago", preview: "/placeholder.svg" },
    { id: 5, name: "Portfolio Minimal", type: "Portfolio", lastModified: "1 month ago", preview: "/placeholder.svg" }
  ]);

  const handleDeleteTheme = (id: number) => {
    setThemes(themes.filter(theme => theme.id !== id));
    toast.success("Theme deleted successfully!");
  };

  const handleEditTheme = (id: number) => {
    toast.success(`Editing theme ${id}`);
  };

  const handlePreviewTheme = (id: number) => {
    toast.success(`Previewing theme ${id}`);
  };

  const handleDownloadTheme = (id: number) => {
    toast.success(`Downloading theme ${id}`);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">My Themes</h1>
      
      <div className="flex justify-between mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          <Input placeholder="Search themes..." className="pl-9 bg-theme-dark border-gray-700 w-64" />
        </div>
        <Button className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity">
          Create New Theme
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {themes.map((theme) => (
          <Card key={theme.id} className="glass-card hover:scale-105 transition-transform">
            <CardContent className="p-0">
              <div className="h-40 bg-gray-800 relative flex items-center justify-center overflow-hidden">
                <img 
                  src={theme.preview} 
                  alt={theme.name} 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-3">
                  <div className="flex justify-end space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="bg-white/10 backdrop-blur-sm"
                      onClick={() => handlePreviewTheme(theme.id)}
                    >
                      <Eye size={16} className="mr-1" /> Preview
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-1">{theme.name}</h3>
                <p className="text-sm text-gray-400">{theme.type} Theme</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-gray-500">Modified {theme.lastModified}</span>
                  <div className="flex space-x-1">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleEditTheme(theme.id)}
                    >
                      <Edit size={14} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDownloadTheme(theme.id)}
                    >
                      <Download size={14} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDeleteTheme(theme.id)}
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default DashboardThemes;
