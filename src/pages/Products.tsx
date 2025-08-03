import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Star, Package, ShoppingCart } from "lucide-react";

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "EcoPhone X1",
      category: "Electronics",
      carbonFootprint: 45,
      tax: 675,
      ecoRating: 4.5,
      image: "📱",
      description: "Sustainable smartphone with recycled materials",
      features: ["Solar charging", "Biodegradable case", "Carbon neutral shipping"]
    },
    {
      id: 2,
      name: "GreenCar Model S",
      category: "Automotive",
      carbonFootprint: 120,
      tax: 3000,
      ecoRating: 4.8,
      image: "🚗",
      description: "Electric vehicle with zero emissions",
      features: ["100% electric", "Solar roof", "Recyclable battery"]
    },
    {
      id: 3,
      name: "Organic Cotton Shirt",
      category: "Textiles",
      carbonFootprint: 15,
      tax: 180,
      ecoRating: 4.2,
      image: "👕",
      description: "100% organic cotton with natural dyes",
      features: ["Organic cotton", "Natural dyes", "Fair trade"]
    },
    {
      id: 4,
      name: "Solar Panel Kit",
      category: "Energy",
      carbonFootprint: -200,
      tax: 0,
      ecoRating: 5.0,
      image: "☀️",
      description: "High-efficiency solar panels for home use",
      features: ["25-year warranty", "Self-installing", "Grid-tie capable"]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Carbon Registered Products</h1>
          <p className="text-xl text-muted-foreground">
            Browse products with verified carbon footprints and tax calculations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="text-center">
                  <div className="text-4xl mb-3">{product.image}</div>
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <Badge variant="secondary" className="mb-2">
                    {product.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Carbon Footprint:</span>
                    <Badge variant={product.carbonFootprint < 0 ? "default" : "outline"}>
                      {product.carbonFootprint > 0 ? '+' : ''}{product.carbonFootprint} kg CO₂
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Carbon Tax:</span>
                    <span className="font-semibold text-primary">
                      {product.tax > 0 ? `₹${product.tax}` : 'Tax Credit'}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Eco Rating:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{product.ecoRating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium flex items-center space-x-1">
                    <Leaf className="w-4 h-4 text-success" />
                    <span>Eco Features</span>
                  </h4>
                  <ul className="text-xs space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 space-y-2">
                  <Button className="w-full" size="sm">
                    <Package className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;