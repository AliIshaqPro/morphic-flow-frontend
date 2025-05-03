
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const DashboardSettings: React.FC = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    updates: false,
    marketing: false,
  });
  
  const [appearance, setAppearance] = useState("system");
  
  const handleSaveGeneral = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("General settings updated successfully!");
  };
  
  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Notification settings updated successfully!");
  };
  
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveGeneral} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="johndoe" className="bg-theme-dark border-gray-700" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="john@example.com" className="bg-theme-dark border-gray-700" />
                  </div>
                  
                  <div>
                    <Label htmlFor="timezone">Timezone</Label>
                    <select id="timezone" className="w-full rounded-md bg-theme-dark border border-gray-700 p-2">
                      <option>Eastern Time (ET)</option>
                      <option>Pacific Time (PT)</option>
                      <option>Central European Time (CET)</option>
                      <option>Greenwich Mean Time (GMT)</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-save">Auto-save theme changes</Label>
                    <Switch id="auto-save" defaultChecked />
                  </div>
                </div>
                
                <Button type="submit" className="bg-gradient-to-r from-theme-blue to-theme-purple">
                  Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveNotifications} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications" className="font-medium">Email Notifications</Label>
                      <p className="text-sm text-gray-400">Receive email updates about your account</p>
                    </div>
                    <Switch 
                      id="email-notifications" 
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-notifications" className="font-medium">Push Notifications</Label>
                      <p className="text-sm text-gray-400">Receive push notifications in your browser</p>
                    </div>
                    <Switch 
                      id="push-notifications" 
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="updates" className="font-medium">Product Updates</Label>
                      <p className="text-sm text-gray-400">Receive updates about new features and improvements</p>
                    </div>
                    <Switch 
                      id="updates" 
                      checked={notifications.updates}
                      onCheckedChange={(checked) => setNotifications({...notifications, updates: checked})}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="marketing" className="font-medium">Marketing Emails</Label>
                      <p className="text-sm text-gray-400">Receive emails about promotions and events</p>
                    </div>
                    <Switch 
                      id="marketing" 
                      checked={notifications.marketing}
                      onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                    />
                  </div>
                </div>
                
                <Button type="submit" className="bg-gradient-to-r from-theme-blue to-theme-purple">
                  Save Preferences
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label className="block mb-3">Theme Mode</Label>
                  <div className="grid grid-cols-3 gap-4">
                    {["light", "dark", "system"].map((mode) => (
                      <div 
                        key={mode}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          appearance === mode 
                            ? "border-blue-500 bg-blue-500/10" 
                            : "border-gray-700 hover:border-gray-500"
                        }`}
                        onClick={() => setAppearance(mode)}
                      >
                        <div className="text-center">
                          <div className="h-12 w-12 mx-auto mb-2 rounded bg-gray-800"></div>
                          <p className="capitalize">{mode}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="bg-gradient-to-r from-theme-blue to-theme-purple"
                  onClick={() => toast.success("Appearance settings saved!")}
                >
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" className="bg-theme-dark border-gray-700" />
                    </div>
                    <div>
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" className="bg-theme-dark border-gray-700" />
                    </div>
                    <div>
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" className="bg-theme-dark border-gray-700" />
                    </div>
                  </div>
                  <Button 
                    className="mt-4 bg-gradient-to-r from-theme-blue to-theme-purple"
                    onClick={() => toast.success("Password updated successfully!")}
                  >
                    Update Password
                  </Button>
                </div>
                
                <div className="pt-6 border-t border-gray-700">
                  <h3 className="text-lg font-medium mb-3">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Add an extra layer of security to your account by enabling two-factor authentication.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => toast.info("Two-factor authentication setup initiated")}
                  >
                    Enable 2FA
                  </Button>
                </div>
                
                <div className="pt-6 border-t border-gray-700">
                  <h3 className="text-lg font-medium mb-3 text-red-500">Danger Zone</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <Button 
                    variant="destructive"
                    onClick={() => toast.error("Account deletion initiated")}
                  >
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default DashboardSettings;
