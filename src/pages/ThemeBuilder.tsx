import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Type, Frame, Palette, Layers, Monitor, Smartphone, Tablet, Check, Star, Users, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const ThemeBuilder: React.FC = () => {
  const [activeTab, setActiveTab] = useState("typography");
  const [themeName, setThemeName] = useState("");
  const [isPro, setIsPro] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Theme saved successfully!");
  };

  return (
    <div className="min-h-screen bg-theme-darker">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Theme</span> Builder
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Create your custom ThemeMorphic theme with our easy-to-use builder.
            </p>
          </div>

          {/* Theme Name Input */}
          <div className="max-w-md mx-auto mb-8">
            <Input
              type="text"
              placeholder="Enter your theme name"
              value={themeName}
              onChange={(e) => setThemeName(e.target.value)}
              className="bg-theme-dark border-gray-700"
            />
          </div>

          {/* Theme Builder Tabs */}
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="typography" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="typography" className="text-base py-3">
                  <Type className="mr-2 h-5 w-5" />
                  Typography
                </TabsTrigger>
                <TabsTrigger value="colors" className="text-base py-3">
                  <Palette className="mr-2 h-5 w-5" />
                  Colors
                </TabsTrigger>
                <TabsTrigger value="layout" className="text-base py-3">
                  <Frame className="mr-2 h-5 w-5" />
                  Layout
                </TabsTrigger>
                <TabsTrigger value="components" className="text-base py-3">
                  <Layers className="mr-2 h-5 w-5" />
                  Components
                </TabsTrigger>
                {isPro && (
                  <TabsTrigger value="responsive" className="text-base py-3">
                    <Monitor className="mr-2 h-5 w-5" />
                    Responsive
                  </TabsTrigger>
                )}
              </TabsList>

              {/* Typography Tab */}
              <TabsContent value="typography">
                <div className="glass rounded-xl p-6">
                  <h2 className="text-xl font-semibold mb-4">Typography Settings</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="font-family" className="block text-sm font-medium text-gray-400 mb-2">Font Family</Label>
                      <Select>
                        <SelectTrigger className="bg-theme-dark border-gray-700 text-gray-300">
                          <SelectValue placeholder="Select font family" />
                        </SelectTrigger>
                        <SelectContent className="bg-theme-dark border-gray-700 text-gray-300">
                          <SelectItem value="Arial">Arial</SelectItem>
                          <SelectItem value="Helvetica">Helvetica</SelectItem>
                          <SelectItem value="Times New Roman">Times New Roman</SelectItem>
                          <SelectItem value="Roboto">Roboto</SelectItem>
                          <SelectItem value="Open Sans">Open Sans</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="font-size" className="block text-sm font-medium text-gray-400 mb-2">Font Size</Label>
                      <Slider
                        defaultValue={[16]}
                        max={30}
                        step={1}
                        className="text-gray-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="line-height" className="block text-sm font-medium text-gray-400 mb-2">Line Height</Label>
                      <Slider
                        defaultValue={[1.5]}
                        max={3}
                        step={0.1}
                        className="text-gray-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="letter-spacing" className="block text-sm font-medium text-gray-400 mb-2">Letter Spacing</Label>
                      <Slider
                        defaultValue={[0]}
                        max={5}
                        step={0.1}
                        className="text-gray-300"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Colors Tab */}
              <TabsContent value="colors">
                <div className="glass rounded-xl p-6">
                  <h2 className="text-xl font-semibold mb-4">Color Settings</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="primary-color" className="block text-sm font-medium text-gray-400 mb-2">Primary Color</Label>
                      <Input
                        type="color"
                        defaultValue="#007bff"
                        className="bg-theme-dark border-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="secondary-color" className="block text-sm font-medium text-gray-400 mb-2">Secondary Color</Label>
                      <Input
                        type="color"
                        defaultValue="#6c757d"
                        className="bg-theme-dark border-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="accent-color" className="block text-sm font-medium text-gray-400 mb-2">Accent Color</Label>
                      <Input
                        type="color"
                        defaultValue="#ffc107"
                        className="bg-theme-dark border-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="background-color" className="block text-sm font-medium text-gray-400 mb-2">Background Color</Label>
                      <Input
                        type="color"
                        defaultValue="#f8f9fa"
                        className="bg-theme-dark border-gray-700"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Layout Tab */}
              <TabsContent value="layout">
                <div className="glass rounded-xl p-6">
                  <h2 className="text-xl font-semibold mb-4">Layout Settings</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="container-width" className="block text-sm font-medium text-gray-400 mb-2">Container Width</Label>
                      <Slider
                        defaultValue={[1200]}
                        max={1920}
                        step={10}
                        className="text-gray-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="grid-gap" className="block text-sm font-medium text-gray-400 mb-2">Grid Gap</Label>
                      <Slider
                        defaultValue={[24]}
                        max={60}
                        step={2}
                        className="text-gray-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="border-radius" className="block text-sm font-medium text-gray-400 mb-2">Border Radius</Label>
                      <Slider
                        defaultValue={[8]}
                        max={30}
                        step={1}
                        className="text-gray-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="box-shadow" className="block text-sm font-medium text-gray-400 mb-2">Box Shadow</Label>
                      <Slider
                        defaultValue={[0]}
                        max={20}
                        step={1}
                        className="text-gray-300"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Components Tab */}
              <TabsContent value="components">
                <div className="glass rounded-xl p-6">
                  <h2 className="text-xl font-semibold mb-4">Component Settings</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="button-style" className="block text-sm font-medium text-gray-400 mb-2">Button Style</Label>
                      <Select>
                        <SelectTrigger className="bg-theme-dark border-gray-700 text-gray-300">
                          <SelectValue placeholder="Select button style" />
                        </SelectTrigger>
                        <SelectContent className="bg-theme-dark border-gray-700 text-gray-300">
                          <SelectItem value="Rounded">Rounded</SelectItem>
                          <SelectItem value="Square">Square</SelectItem>
                          <SelectItem value="Outline">Outline</SelectItem>
                          <SelectItem value="Gradient">Gradient</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="input-style" className="block text-sm font-medium text-gray-400 mb-2">Input Style</Label>
                      <Select>
                        <SelectTrigger className="bg-theme-dark border-gray-700 text-gray-300">
                          <SelectValue placeholder="Select input style" />
                        </SelectTrigger>
                        <SelectContent className="bg-theme-dark border-gray-700 text-gray-300">
                          <SelectItem value="Rounded">Rounded</SelectItem>
                          <SelectItem value="Square">Square</SelectItem>
                          <SelectItem value="Underline">Underline</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="card-style" className="block text-sm font-medium text-gray-400 mb-2">Card Style</Label>
                      <Select>
                        <SelectTrigger className="bg-theme-dark border-gray-700 text-gray-300">
                          <SelectValue placeholder="Select card style" />
                        </SelectTrigger>
                        <SelectContent className="bg-theme-dark border-gray-700 text-gray-300">
                          <SelectItem value="Elevated">Elevated</SelectItem>
                          <SelectItem value="Glassmorphism">Glassmorphism</SelectItem>
                          <SelectItem value="Bordered">Bordered</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="navbar-style" className="block text-sm font-medium text-gray-400 mb-2">Navbar Style</Label>
                      <Select>
                        <SelectTrigger className="bg-theme-dark border-gray-700 text-gray-300">
                          <SelectValue placeholder="Select navbar style" />
                        </SelectTrigger>
                        <SelectContent className="bg-theme-dark border-gray-700 text-gray-300">
                          <SelectItem value="Fixed">Fixed</SelectItem>
                          <SelectItem value="Static">Static</SelectItem>
                          <SelectItem value="Transparent">Transparent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Responsive Tab (Pro Only) */}
              {isPro && (
                <TabsContent value="responsive">
                  <div className="glass rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4">Responsive Settings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="breakpoint-mobile" className="block text-sm font-medium text-gray-400 mb-2">Mobile Breakpoint</Label>
                        <Input
                          type="number"
                          defaultValue={768}
                          className="bg-theme-dark border-gray-700"
                        />
                      </div>
                      <div>
                        <Label htmlFor="breakpoint-tablet" className="block text-sm font-medium text-gray-400 mb-2">Tablet Breakpoint</Label>
                        <Input
                          type="number"
                          defaultValue={992}
                          className="bg-theme-dark border-gray-700"
                        />
                      </div>
                      <div>
                        <Label htmlFor="breakpoint-desktop" className="block text-sm font-medium text-gray-400 mb-2">Desktop Breakpoint</Label>
                        <Input
                          type="number"
                          defaultValue={1200}
                          className="bg-theme-dark border-gray-700"
                        />
                      </div>
                      <div>
                        <Label htmlFor="breakpoint-large" className="block text-sm font-medium text-gray-400 mb-2">Large Desktop Breakpoint</Label>
                        <Input
                          type="number"
                          defaultValue={1440}
                          className="bg-theme-dark border-gray-700"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              )}
            </Tabs>
          </div>

          {/* Submit Button */}
          <div className="max-w-md mx-auto mt-8">
            <Button className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity w-full" onClick={handleSubmit}>
              Save Theme
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThemeBuilder;
