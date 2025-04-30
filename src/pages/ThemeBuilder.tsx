
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Columns, Layout, Type } from "lucide-react";

const ThemeBuilder: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [preview, setPreview] = useState<string>("business");

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-theme-darker">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Build Your <span className="text-gradient">Custom WordPress Theme</span>
            </h1>

            {/* Progress Steps */}
            <div className="flex justify-between mb-12 relative">
              <div className="absolute top-4 left-0 right-0 h-1 bg-gray-700 -z-10"></div>
              
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex flex-col items-center z-10">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-2
                      ${step >= num ? 'bg-gradient-to-r from-theme-blue to-theme-purple' : 'bg-gray-700'}`}
                  >
                    {step > num ? <Check size={16} /> : num}
                  </div>
                  <div className="text-sm text-gray-400">
                    {num === 1 ? 'Design' : num === 2 ? 'Features' : 'Customize'}
                  </div>
                </div>
              ))}
            </div>

            {/* Step 1: Design */}
            {step === 1 && (
              <div className="glass p-6 rounded-xl mb-8 animate-fade-in">
                <h2 className="text-xl font-semibold mb-4">Choose Your Design Style</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {["Minimal", "Modern", "Bold", "Classic"].map((style) => (
                    <Card key={style} className="glass-card cursor-pointer overflow-hidden">
                      <CardContent className="p-4 h-full flex flex-col">
                        <div className="bg-gray-800 rounded-lg h-32 mb-3 flex items-center justify-center">
                          <Layout className="text-gray-500" size={32} />
                        </div>
                        <h3 className="font-medium">{style}</h3>
                        <p className="text-sm text-gray-400 mt-1">Clean and simple</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <h2 className="text-xl font-semibold mb-4 mt-8">Select Industry</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {["Business", "Real Estate", "Education", "Tech & SaaS", "Portfolio", "E-commerce"].map((industry) => (
                    <Card 
                      key={industry}
                      onClick={() => setPreview(industry.toLowerCase().replace(' & ', '-').replace(' ', '-'))}
                      className={`glass-card cursor-pointer transition-all hover:scale-105 ${
                        preview === industry.toLowerCase().replace(' & ', '-').replace(' ', '-') ? 'ring-2 ring-theme-purple' : ''
                      }`}
                    >
                      <CardContent className="p-4 flex items-center">
                        <Type className="mr-3 text-theme-blue" size={20} />
                        <span>{industry}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="flex justify-end mt-8">
                  <Button onClick={nextStep} className="bg-gradient-to-r from-theme-blue to-theme-purple">
                    Continue to Features
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 2: Features */}
            {step === 2 && (
              <div className="glass p-6 rounded-xl mb-8 animate-fade-in">
                <h2 className="text-xl font-semibold mb-4">Choose Theme Features</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    "Responsive Design", 
                    "SEO Optimized", 
                    "Blog Module",
                    "Contact Form",
                    "Team Members",
                    "Testimonials",
                    "Portfolio Gallery",
                    "Services Listing",
                    "Multiple Headers",
                    "Multiple Footers"
                  ].map((feature) => (
                    <Card key={feature} className="glass-card cursor-pointer">
                      <CardContent className="p-4 flex items-center">
                        <div className="w-5 h-5 rounded border border-theme-blue mr-3 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-theme-blue to-theme-purple"></div>
                        </div>
                        <span>{feature}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block mb-2 text-sm text-gray-400">Color Scheme</label>
                    <div className="flex space-x-3">
                      {["#3b82f6", "#8b5cf6", "#ec4899", "#10b981", "#f97316"].map((color) => (
                        <div key={color} style={{ backgroundColor: color }} className="w-6 h-6 rounded-full cursor-pointer hover:ring-2 hover:ring-white" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-400">Layout Type</label>
                    <div className="flex space-x-3">
                      <Card className="glass-card p-2 cursor-pointer">
                        <Columns size={24} />
                      </Card>
                      <Card className="glass-card p-2 cursor-pointer">
                        <Layout size={24} />
                      </Card>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={prevStep}>
                    Back to Design
                  </Button>
                  <Button onClick={nextStep} className="bg-gradient-to-r from-theme-blue to-theme-purple">
                    Continue to Customize
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 3: Customize */}
            {step === 3 && (
              <div className="glass p-6 rounded-xl mb-8 animate-fade-in">
                <h2 className="text-xl font-semibold mb-4">Customize Your Theme</h2>
                
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-400">Theme Name</label>
                  <Input placeholder="My Awesome Theme" className="bg-theme-dark border-gray-700" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block mb-2 text-sm text-gray-400">Header Style</label>
                    <select className="w-full rounded-md bg-theme-dark border border-gray-700 p-2">
                      <option>Centered Logo</option>
                      <option>Split Navigation</option>
                      <option>Minimal</option>
                      <option>Full Width</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-400">Footer Style</label>
                    <select className="w-full rounded-md bg-theme-dark border border-gray-700 p-2">
                      <option>Standard (3 Columns)</option>
                      <option>Wide (4 Columns)</option>
                      <option>Minimal</option>
                      <option>Split</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-8">
                  <label className="block mb-2 text-sm text-gray-400">Additional Notes</label>
                  <textarea 
                    className="w-full rounded-md bg-theme-dark border border-gray-700 p-2 min-h-[100px]"
                    placeholder="Any specific customization requests..."
                  ></textarea>
                </div>
                
                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    Back to Features
                  </Button>
                  <div className="space-x-4">
                    <Button variant="outline">Preview Theme</Button>
                    <Button className="bg-gradient-to-r from-theme-blue to-theme-purple">
                      Proceed to Download
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Preview Panel */}
            <div className="mt-8 glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Live Preview</h3>
              <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-400">Preview for {preview.replace('-', ' ')} theme</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThemeBuilder;
