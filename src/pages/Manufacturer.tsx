import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Factory, Package, FileText, CheckCircle } from "lucide-react";

const ManufacturerPage = () => {
  const registeredProducts = [
    {
      id: "PROD001",
      name: "EcoPhone X1", 
      category: "Electronics",
      carbonFootprint: 45,
      taxRate: 0.15,
      status: "Approved",
      registrationDate: "2024-01-10"
    },
    {
      id: "PROD002",
      name: "Solar Charger Pro",
      category: "Electronics", 
      carbonFootprint: 12,
      taxRate: 0.08,
      status: "Approved",
      registrationDate: "2024-01-08"
    },
    {
      id: "PROD003",
      name: "Eco-Friendly Case",
      category: "Accessories",
      carbonFootprint: 8,
      taxRate: 0.05,
      status: "Under Review",
      registrationDate: "2024-01-12"
    }
  ];

  const taxSummary = {
    totalProducts: 3,
    totalTaxPaid: "₹85,400",
    pendingPayments: "₹12,300",
    carbonOffset: "152 kg CO₂"
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Manufacturer Portal</h1>
          <p className="text-xl text-muted-foreground">
            Register products, manage carbon footprints, and track tax obligations
          </p>
        </div>

        {/* Tax Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Package className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{taxSummary.totalProducts}</div>
              <div className="text-sm text-muted-foreground">Registered Products</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-success">{taxSummary.totalTaxPaid}</div>
              <div className="text-sm text-muted-foreground">Tax Paid</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <FileText className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold text-warning">{taxSummary.pendingPayments}</div>
              <div className="text-sm text-muted-foreground">Pending Payments</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Factory className="w-8 h-8 text-info mx-auto mb-2" />
              <div className="text-2xl font-bold text-info">{taxSummary.carbonOffset}</div>
              <div className="text-sm text-muted-foreground">Carbon Footprint</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Registration Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Package className="w-5 h-5 text-primary" />
                <span>Register New Product</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="productName">Product Name</Label>
                  <Input id="productName" placeholder="Enter product name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input id="category" placeholder="e.g., Electronics" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Product Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your product..."
                  className="h-20"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="carbonFootprint">Carbon Footprint (kg CO₂)</Label>
                  <Input 
                    id="carbonFootprint" 
                    type="number" 
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Production Quantity</Label>
                  <Input 
                    id="quantity" 
                    type="number" 
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="materials">Materials Used</Label>
                <Textarea 
                  id="materials" 
                  placeholder="List materials and their sources..."
                  className="h-16"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button className="w-full">
                  Calculate Tax
                </Button>
                <Button variant="outline" className="w-full">
                  Save Draft
                </Button>
              </div>

              <Button className="w-full" size="lg">
                Submit for Review
              </Button>
            </CardContent>
          </Card>

          {/* Registered Products */}
          <Card>
            <CardHeader>
              <CardTitle>Your Registered Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {registeredProducts.map((product) => (
                  <Card key={product.id} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{product.name}</h4>
                          <p className="text-sm text-muted-foreground">{product.id}</p>
                        </div>
                        <Badge 
                          variant={product.status === 'Approved' ? 'default' : 'secondary'}
                        >
                          {product.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Category:</span>
                          <p className="font-medium">{product.category}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Registration:</span>
                          <p className="font-medium">{product.registrationDate}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Carbon Footprint:</span>
                          <p className="font-medium">{product.carbonFootprint} kg CO₂</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Tax Rate:</span>
                          <p className="font-medium text-primary">{(product.taxRate * 100).toFixed(1)}%</p>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          View Details
                        </Button>
                        <Button size="sm" className="flex-1">
                          Pay Tax
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4">
                View All Products
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ManufacturerPage;