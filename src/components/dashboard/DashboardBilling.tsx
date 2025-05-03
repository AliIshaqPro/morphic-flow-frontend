
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, FileText, Calendar, AlertCircle, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const DashboardBilling: React.FC = () => {
  const handleUpgrade = () => {
    toast.success("Subscription upgrade initiated!");
  };
  
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Billing & Subscription</h1>
      
      {/* Current Plan */}
      <Card className="glass-card mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <h2 className="text-xl font-semibold mb-2">Pro Plan</h2>
              <div className="flex items-center space-x-3 mb-1">
                <span className="bg-green-500/20 text-green-500 text-xs px-2 py-1 rounded-full">Active</span>
                <span className="text-gray-400 text-sm">Renews on May 12, 2026</span>
              </div>
              <p className="text-gray-400 mb-4">
                Unlimited themes, premium support, and advanced customization options
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Theme downloads</span>
                  <span className="text-sm">18 of 50 used</span>
                </div>
                <Progress value={36} className="h-2" />
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  className="text-sm"
                  onClick={() => toast.info("Payment history dialog opened")}
                >
                  Payment History
                </Button>
                <Button 
                  variant="outline" 
                  className="text-sm"
                  onClick={() => toast.info("Invoice has been downloaded")}
                >
                  Download Invoice
                </Button>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-5 flex flex-col">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Current billing</span>
                <span>$29.99/mo</span>
              </div>
              <p className="text-sm text-gray-400 mb-auto">Billed annually. Next payment on May 12, 2026.</p>
              <div className="space-y-2 mt-4">
                <Button 
                  variant="default" 
                  className="w-full bg-gradient-to-r from-theme-blue to-theme-purple"
                  onClick={handleUpgrade}
                >
                  Upgrade to Business
                </Button>
                <Button variant="outline" className="w-full text-sm">
                  Cancel Subscription
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Payment Methods & Billing History */}
      <Tabs defaultValue="payment-methods" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="billing-history">Billing History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="payment-methods">
          <Card className="glass-card mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <CreditCard className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-gray-400">Expires 04/2025</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500/20 text-blue-500 text-xs px-2 py-1 rounded-full">Default</span>
                    <Button variant="ghost" size="sm" className="text-gray-400">
                      Edit
                    </Button>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-dashed"
                  onClick={() => toast.info("Add payment method dialog opened")}
                >
                  + Add Payment Method
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Billing Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium block mb-1">Full Name</label>
                    <Input defaultValue="John Doe" className="bg-theme-dark border-gray-700" />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1">Email Address</label>
                    <Input defaultValue="john@example.com" className="bg-theme-dark border-gray-700" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium block mb-1">Company Name (Optional)</label>
                  <Input defaultValue="Acme Inc." className="bg-theme-dark border-gray-700" />
                </div>
                
                <div>
                  <label className="text-sm font-medium block mb-1">Address</label>
                  <Input defaultValue="123 Main St" className="bg-theme-dark border-gray-700 mb-2" />
                  <Input placeholder="Apartment, suite, etc. (optional)" className="bg-theme-dark border-gray-700" />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="col-span-2">
                    <label className="text-sm font-medium block mb-1">City</label>
                    <Input defaultValue="New York" className="bg-theme-dark border-gray-700" />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1">State</label>
                    <Input defaultValue="NY" className="bg-theme-dark border-gray-700" />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1">ZIP Code</label>
                    <Input defaultValue="10001" className="bg-theme-dark border-gray-700" />
                  </div>
                </div>
                
                <Button 
                  type="button" 
                  className="bg-gradient-to-r from-theme-blue to-theme-purple"
                  onClick={() => toast.success("Billing information saved")}
                >
                  Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing-history">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Billing History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border border-gray-700 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Invoice
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {[
                      { date: "May 3, 2025", description: "Pro Plan - Annual", amount: "$359.88", status: "Paid", statusColor: "green" },
                      { date: "May 3, 2024", description: "Pro Plan - Annual", amount: "$359.88", status: "Paid", statusColor: "green" },
                      { date: "May 3, 2023", description: "Basic Plan - Annual", amount: "$119.88", status: "Paid", statusColor: "green" },
                      { date: "May 3, 2022", description: "Basic Plan - Annual", amount: "$119.88", status: "Paid", statusColor: "green" },
                      { date: "Apr 28, 2022", description: "Basic Plan - Monthly", amount: "$12.99", status: "Refunded", statusColor: "amber" },
                    ].map((invoice, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {invoice.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {invoice.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {invoice.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`bg-${invoice.statusColor}-500/20 text-${invoice.statusColor}-500 text-xs px-2 py-1 rounded-full`}>
                            {invoice.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-gray-400 hover:text-white"
                            onClick={() => toast.success(`Invoice ${index + 1} downloaded`)}
                          >
                            <FileText size={16} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default DashboardBilling;
