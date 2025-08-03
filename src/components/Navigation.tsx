import { Button } from "@/components/ui/button";
import { Leaf, Calculator, Package, Eye, MapPin, BarChart3, Factory, Settings, LogIn } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", href: "/", icon: Leaf },
    { name: "Calculator", href: "/calculator", icon: Calculator },
    { name: "Products", href: "/products", icon: Package },
    { name: "Transparency", href: "/transparency", icon: Eye },
    { name: "Projects", href: "/projects", icon: MapPin },
    { name: "Gov Wallet", href: "/gov-wallet", icon: BarChart3 },
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Manufacturer", href: "/manufacturer", icon: Factory },
    { name: "Admin", href: "/admin", icon: Settings },
  ];

  return (
    <nav className="border-b bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="text-lg font-semibold">
              <span className="text-foreground">Carbon Tax</span>
              <br />
              <span className="text-xs text-muted-foreground -mt-1 block">Management</span>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="text-sm font-medium"
                    size="sm"
                  >
                    <Icon className="w-4 h-4 mr-1" />
                    {item.name}
                  </Button>
                </Link>
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