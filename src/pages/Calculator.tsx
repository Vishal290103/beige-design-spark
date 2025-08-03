import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Truck, Factory, Zap } from "lucide-react";

const CalculatorPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [calculatedTax, setCalculatedTax] = useState<number | null>(null);

  const productCategories = [
    { id: "electronics", name: "Electronics", rate: 0.15, icon: Zap },
    { id: "automotive", name: "Automotive", rate: 0.25, icon: Truck },
    { id: "manufacturing", name: "Manufacturing", rate: 0.20, icon: Factory },
    { id: "textiles", name: "Textiles", rate: 0.12, icon: Calculator },
  ];

  const handleCalculate = () => {
    const category = productCategories.find(cat => cat.id === selectedCategory);
    if (category && quantity) {
      const tax = parseFloat(quantity) * category.rate * 1000; // Base calculation
      setCalculatedTax(tax);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Carbon Tax Calculator</h1>
          <p className="text-xl text-muted-foreground">
            Calculate carbon tax for your products based on their environmental impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="w-5 h-5 text-primary" />
                <span>Tax Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="category">Product Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {productCategories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity (units)</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <Button onClick={handleCalculate} className="w-full" disabled={!selectedCategory || !quantity}>
                Calculate Carbon Tax
              </Button>

              {calculatedTax !== null && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Estimated Carbon Tax</p>
                      <p className="text-2xl font-bold text-primary">₹{calculatedTax.toLocaleString()}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>

          {/* Tax Rates */}
          <Card>
            <CardHeader>
              <CardTitle>Current Tax Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {productCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <div key={category.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-primary">
                        {(category.rate * 100).toFixed(1)}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;