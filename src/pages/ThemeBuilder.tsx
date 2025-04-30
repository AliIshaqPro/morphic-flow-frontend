
import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Columns, Layout, Type, Download, Save, EyeIcon, ArrowRight, ArrowLeft, Globe, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const designStyles = [
  { id: "minimal", name: "Minimal", description: "Clean and simple" },
  { id: "modern", name: "Modern", description: "Contemporary look" },
  { id: "bold", name: "Bold", description: "High impact design" },
  { id: "classic", name: "Classic", description: "Timeless aesthetics" }
];

const industries = [
  { id: "business", name: "Business", icon: Layout },
  { id: "real-estate", name: "Real Estate", icon: Globe },
  { id: "education", name: "Education", icon: Type },
  { id: "tech-saas", name: "Tech & SaaS", icon: Columns },
  { id: "portfolio", name: "Portfolio", icon: Type },
  { id: "e-commerce", name: "E-commerce", icon: Layout }
];

const features = [
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
];

const previewImages = {
  "business": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200&h=800",
  "real-estate": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200&h=800",
  "education": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200&h=800",
  "tech-saas": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200&h=800",
  "portfolio": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200&h=800",
  "e-commerce": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200&h=800",
  
  "minimal": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200&h=800",
  "modern": "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&q=80&w=1200&h=800",
  "bold": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=800",
  "classic": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200&h=800",
};

const ThemeBuilder: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [designStyle, setDesignStyle] = useState<string>("minimal");
  const [industry, setIndustry] = useState<string>("business");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["Responsive Design", "SEO Optimized"]);
  const [themeName, setThemeName] = useState<string>("My Awesome Theme");
  const [headerStyle, setHeaderStyle] = useState<string>("Centered Logo");
  const [footerStyle, setFooterStyle] = useState<string>("Standard (3 Columns)");
  const [customNotes, setCustomNotes] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [colorScheme, setColorScheme] = useState<string>("#3b82f6");
  const { toast } = useToast();

  const nextStep = () => {
    setIsLoading(true);
    setTimeout(() => {
      setStep((prev) => Math.min(prev + 1, 3));
      setIsLoading(false);
      
      // Show success toast
      toast({
        title: "Step Completed",
        description: step === 1 ? "Design options saved successfully!" : "Features selected successfully!",
      });
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 800);
  };
  
  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures((prev) => 
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };
  
  const handlePreview = () => {
    toast({
      title: "Preview Generated",
      description: "Opening preview in a new tab...",
    });
  };
  
  const handleDownload = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Theme Package Ready",
        description: "Your custom WordPress theme has been generated and is ready for download!",
      });
    }, 2000);
  };
  
  // Animation delay for cards
  const getAnimationDelay = (index: number) => {
    return `${index * 0.1}s`;
  };
  
  // Get preview image based on current selection
  const getCurrentPreviewImage = () => {
    if (step === 1) {
      return previewImages[designStyle] || previewImages[industry];
    } else {
      return previewImages[industry];
    }
  };

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
                      ${step >= num 
                        ? 'bg-gradient-to-r from-theme-blue to-theme-purple scale-110 transition-transform duration-300' 
                        : 'bg-gray-700'}`}
                  >
                    {step > num ? <Check size={16} /> : num}
                  </div>
                  <div className={`text-sm ${step >= num ? 'text-white' : 'text-gray-400'} transition-colors duration-300`}>
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
                  {designStyles.map((style, index) => (
                    <Card 
                      key={style.id}
                      onClick={() => setDesignStyle(style.id)}
                      className={`glass-card cursor-pointer overflow-hidden hover:scale-105 transition-all duration-300 ${
                        designStyle === style.id ? 'ring-2 ring-theme-purple' : ''
                      }`}
                      style={{ animationDelay: getAnimationDelay(index) }}
                    >
                      <CardContent className="p-4 h-full flex flex-col">
                        <div className="bg-gray-800 rounded-lg h-32 mb-3 flex items-center justify-center overflow-hidden">
                          {previewImages[style.id] ? (
                            <img 
                              src={previewImages[style.id]} 
                              alt={style.name} 
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <Layout className="text-gray-500" size={32} />
                          )}
                        </div>
                        <h3 className="font-medium">{style.name}</h3>
                        <p className="text-sm text-gray-400 mt-1">{style.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <h2 className="text-xl font-semibold mb-4 mt-8">Select Industry</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {industries.map((ind, index) => (
                    <Card 
                      key={ind.id}
                      onClick={() => setIndustry(ind.id)}
                      className={`glass-card cursor-pointer transition-all hover:scale-105 ${
                        industry === ind.id ? 'ring-2 ring-theme-purple' : ''
                      }`}
                      style={{ animationDelay: getAnimationDelay(index) }}
                    >
                      <CardContent className="p-4 flex items-center">
                        <ind.icon className="mr-3 text-theme-blue" size={20} />
                        <span>{ind.name}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="flex justify-end mt-8">
                  <Button 
                    onClick={nextStep} 
                    className="bg-gradient-to-r from-theme-blue to-theme-purple group relative overflow-hidden"
                    disabled={isLoading}
                  >
                    <span className="absolute right-full h-full w-full bg-white/20 transform skew-x-12 group-hover:animate-shine" />
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Continue to Features
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 2: Features */}
            {step === 2 && (
              <div className="glass p-6 rounded-xl mb-8 animate-fade-in">
                <h2 className="text-xl font-semibold mb-4">Choose Theme Features</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {features.map((feature, index) => (
                    <Card 
                      key={feature} 
                      onClick={() => handleFeatureToggle(feature)}
                      className={`glass-card cursor-pointer transition-all hover:scale-105 ${
                        selectedFeatures.includes(feature) ? 'ring-2 ring-theme-blue' : ''
                      }`}
                      style={{ animationDelay: getAnimationDelay(index) }}
                    >
                      <CardContent className="p-4 flex items-center">
                        <div className={`w-5 h-5 rounded border ${
                          selectedFeatures.includes(feature) ? 'border-theme-blue' : 'border-gray-600'
                        } mr-3 flex items-center justify-center transition-colors duration-200`}>
                          {selectedFeatures.includes(feature) && (
                            <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-theme-blue to-theme-purple"></div>
                          )}
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
                        <button
                          key={color}
                          onClick={() => setColorScheme(color)}
                          style={{ backgroundColor: color }}
                          className={`w-6 h-6 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200 ${
                            colorScheme === color ? 'ring-2 ring-white' : ''
                          }`}
                          aria-label={`Select color ${color}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-400">Layout Type</label>
                    <div className="flex space-x-3">
                      <Card className="glass-card p-2 cursor-pointer hover:scale-105 transition-all duration-200">
                        <Columns size={24} />
                      </Card>
                      <Card className="glass-card p-2 cursor-pointer hover:scale-105 transition-all duration-200">
                        <Layout size={24} />
                      </Card>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                    className="group"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                    Back to Design
                  </Button>
                  <Button 
                    onClick={nextStep} 
                    className="bg-gradient-to-r from-theme-blue to-theme-purple group relative overflow-hidden"
                    disabled={isLoading}
                  >
                    <span className="absolute right-full h-full w-full bg-white/20 transform skew-x-12 group-hover:animate-shine" />
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Continue to Customize
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    )}
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
                  <Input 
                    value={themeName} 
                    onChange={(e) => setThemeName(e.target.value)} 
                    placeholder="My Awesome Theme" 
                    className="bg-theme-dark border-gray-700" 
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block mb-2 text-sm text-gray-400">Header Style</label>
                    <select 
                      className="w-full rounded-md bg-theme-dark border border-gray-700 p-2"
                      value={headerStyle}
                      onChange={(e) => setHeaderStyle(e.target.value)}
                    >
                      <option>Centered Logo</option>
                      <option>Split Navigation</option>
                      <option>Minimal</option>
                      <option>Full Width</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-400">Footer Style</label>
                    <select 
                      className="w-full rounded-md bg-theme-dark border border-gray-700 p-2"
                      value={footerStyle}
                      onChange={(e) => setFooterStyle(e.target.value)}
                    >
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
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                  ></textarea>
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                    className="group"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                    Back to Features
                  </Button>
                  <div className="space-x-4">
                    <Button 
                      variant="outline"
                      onClick={handlePreview}
                      className="group"
                    >
                      <EyeIcon size={18} className="mr-2" />
                      Preview Theme
                    </Button>
                    <Button 
                      onClick={handleDownload}
                      className="bg-gradient-to-r from-theme-blue to-theme-purple group relative overflow-hidden"
                      disabled={isLoading}
                    >
                      <span className="absolute right-full h-full w-full bg-white/20 transform skew-x-12 group-hover:animate-shine" />
                      {isLoading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Generating...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Download size={18} className="mr-2" />
                          Proceed to Download
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Preview Panel */}
            <div className="mt-8 glass p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Live Preview</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="group">
                    <Share2 size={16} className="mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="group">
                    <Save size={16} className="mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Save
                  </Button>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img 
                    src={getCurrentPreviewImage()}
                    alt="Theme preview" 
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-theme-darker to-transparent opacity-50"></div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 glass rounded-lg">
                    <h4 className="font-bold">{themeName}</h4>
                    <p className="text-sm text-gray-300">
                      {designStyles.find(d => d.id === designStyle)?.name} design for {industries.find(i => i.id === industry)?.name}
                    </p>
                  </div>
                </div>
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
