import { Button } from "@/components/ui/button";
import { Leaf, Calculator, Package, Eye, MapPin, BarChart3, Factory, Settings, LogIn } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { name: "Home", href: "#", icon: Leaf, active: true },
    { name: "Calculator", href: "#", icon: Calculator },
    { name: "Products", href: "#", icon: Package },
    { name: "Transparency", href: "#", icon: Eye },
    { name: "Projects", href: "#", icon: MapPin },
    { name: "Gov Wallet", href: "#", icon: BarChart3 },
    { name: "Dashboard", href: "#", icon: BarChart3 },
    { name: "Manufacturer", href: "#", icon: Factory },
    { name: "Admin", href: "#", icon: Settings },
  ];

  return (
    <nav className="border-b bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="text-lg font-semibold">
              <span className="text-foreground">Carbon Tax</span>
              <br />
              <span className="text-xs text-muted-foreground -mt-1 block">Management</span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.name}
                  variant={item.active ? "default" : "ghost"}
                  className="text-sm font-medium"
                  size="sm"
                >
                  <Icon className="w-4 h-4 mr-1" />
                  {item.name}
                </Button>
              );
            })}
          </div>

          {/* Login Button */}
          <Button variant="default" size="sm" className="font-medium">
            <LogIn className="w-4 h-4 mr-1" />
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;