
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const DashboardProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile updated successfully!");
    setIsEditing(false);
  };
  
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <Button 
          variant={isEditing ? "outline" : "default"}
          onClick={() => setIsEditing(!isEditing)}
          className={!isEditing ? "bg-gradient-to-r from-theme-blue to-theme-purple" : ""}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Sidebar */}
        <Card className="glass-card md:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                <span className="text-white text-4xl">JD</span>
              </div>
              
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-gray-400">Pro Subscriber</p>
              
              <div className="w-full border-t border-gray-700 my-6"></div>
              
              <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Member since</span>
                  <span>Jan 2023</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Themes created</span>
                  <span>12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Last login</span>
                  <span>Today</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Profile Details */}
        <Card className="glass-card md:col-span-2">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSaveProfile}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="first-name">First Name</Label>
                  <Input 
                    id="first-name" 
                    defaultValue="John" 
                    disabled={!isEditing} 
                    className="bg-theme-dark border-gray-700" 
                  />
                </div>
                <div>
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input 
                    id="last-name" 
                    defaultValue="Doe" 
                    disabled={!isEditing} 
                    className="bg-theme-dark border-gray-700" 
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    defaultValue="john@example.com" 
                    disabled={!isEditing} 
                    className="bg-theme-dark border-gray-700" 
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    defaultValue="+1 (555) 123-4567" 
                    disabled={!isEditing} 
                    className="bg-theme-dark border-gray-700" 
                  />
                </div>
                <div className="col-span-full">
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company" 
                    defaultValue="Acme Inc." 
                    disabled={!isEditing}
                    className="bg-theme-dark border-gray-700"
                  />
                </div>
                <div className="col-span-full">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio" 
                    rows={4} 
                    defaultValue="Web designer and developer with 5+ years of experience creating beautiful and functional websites." 
                    disabled={!isEditing}
                    className="bg-theme-dark border-gray-700"
                  />
                </div>
              </div>
              
              {isEditing && (
                <Button 
                  type="submit" 
                  className="mt-6 bg-gradient-to-r from-theme-blue to-theme-purple"
                >
                  Save Changes
                </Button>
              )}
            </form>
          </CardContent>
        </Card>
        
        {/* Social Profiles */}
        <Card className="glass-card md:col-span-3">
          <CardHeader>
            <CardTitle>Social Profiles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="twitter">Twitter</Label>
                <Input 
                  id="twitter" 
                  defaultValue="https://twitter.com/johndoe" 
                  disabled={!isEditing} 
                  className="bg-theme-dark border-gray-700" 
                />
              </div>
              <div>
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input 
                  id="linkedin" 
                  defaultValue="https://linkedin.com/in/johndoe" 
                  disabled={!isEditing} 
                  className="bg-theme-dark border-gray-700" 
                />
              </div>
              <div>
                <Label htmlFor="github">GitHub</Label>
                <Input 
                  id="github" 
                  defaultValue="https://github.com/johndoe" 
                  disabled={!isEditing} 
                  className="bg-theme-dark border-gray-700" 
                />
              </div>
              <div>
                <Label htmlFor="website">Personal Website</Label>
                <Input 
                  id="website" 
                  defaultValue="https://johndoe.com" 
                  disabled={!isEditing} 
                  className="bg-theme-dark border-gray-700" 
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DashboardProfile;
