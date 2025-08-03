import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, Search, Download, Shield, ExternalLink } from "lucide-react";

const TransparencyPage = () => {
  const transactions = [
    {
      id: "TX001",
      timestamp: "2024-01-15 14:30:22",
      product: "EcoPhone X1",
      company: "GreenTech Ltd",
      carbonFootprint: 45,
      taxAmount: 675,
      projectFunded: "Solar Farm Delhi",
      blockchainHash: "0x1a2b3c4d5e6f7g8h9i0j",
      status: "Verified"
    },
    {
      id: "TX002", 
      timestamp: "2024-01-15 12:15:10",
      product: "Organic Cotton Shirt",
      company: "EcoFashion Co",
      carbonFootprint: 15,
      taxAmount: 180,
      projectFunded: "Wind Farm Maharashtra",
      blockchainHash: "0x2b3c4d5e6f7g8h9i0j1k",
      status: "Verified"
    },
    {
      id: "TX003",
      timestamp: "2024-01-14 16:45:33",
      product: "GreenCar Model S",
      company: "EcoMotors Inc",
      carbonFootprint: 120,
      taxAmount: 3000,
      projectFunded: "Hydro Plant Kerala",
      blockchainHash: "0x3c4d5e6f7g8h9i0j1k2l",
      status: "Verified"
    }
  ];

  const projects = [
    {
      name: "Solar Farm Delhi",
      totalFunding: "₹2.5 Cr",
      carbonOffset: "5,200 tons CO₂",
      status: "Active",
      progress: 78
    },
    {
      name: "Wind Farm Maharashtra", 
      totalFunding: "₹3.8 Cr",
      carbonOffset: "7,800 tons CO₂",
      status: "Active",
      progress: 92
    },
    {
      name: "Hydro Plant Kerala",
      totalFunding: "₹2.2 Cr", 
      carbonOffset: "3,500 tons CO₂",
      status: "Completed",
      progress: 100
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Transparency Portal</h1>
          <p className="text-xl text-muted-foreground">
            Real-time blockchain verification of all carbon tax transactions and project funding
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input 
                    placeholder="Search by transaction ID, company, or product..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Button className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export Data</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Transactions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Recent Transactions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((tx) => (
                    <Card key={tx.id} className="border-l-4 border-l-primary">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-semibold">{tx.id}</span>
                              <Badge variant="default">{tx.status}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{tx.timestamp}</p>
                          </div>
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-medium">Product:</p>
                            <p className="text-muted-foreground">{tx.product}</p>
                          </div>
                          <div>
                            <p className="font-medium">Company:</p>
                            <p className="text-muted-foreground">{tx.company}</p>
                          </div>
                          <div>
                            <p className="font-medium">Carbon Footprint:</p>
                            <p className="text-muted-foreground">{tx.carbonFootprint} kg CO₂</p>
                          </div>
                          <div>
                            <p className="font-medium">Tax Amount:</p>
                            <p className="text-primary font-semibold">₹{tx.taxAmount}</p>
                          </div>
                        </div>

                        <div className="mt-3 pt-3 border-t">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xs font-medium">Funded Project:</p>
                              <p className="text-xs text-primary">{tx.projectFunded}</p>
                            </div>
                            <Button size="sm" variant="ghost" className="text-xs">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Blockchain
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Funded Projects */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Funded Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <Card key={index} className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-sm">{project.name}</h4>
                          <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                            {project.status}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span>Funding:</span>
                            <span className="font-semibold">{project.totalFunding}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>CO₂ Offset:</span>
                            <span className="font-semibold text-success">{project.carbonOffset}</span>
                          </div>
                          
                          <div className="mt-3">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progress</span>
                              <span>{project.progress}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div
                                className="h-2 bg-primary rounded-full transition-all duration-300"
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransparencyPage;