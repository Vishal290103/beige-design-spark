import { Button } from "@/components/ui/button";
import { Calculator, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-background to-muted py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-foreground">Decentralized Carbon Tax</span>
          <br />
          <span className="text-primary">Management System</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Transparent, blockchain-powered carbon taxation that funds renewable 
          energy projects and creates a sustainable future for everyone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="font-medium px-8">
            <Calculator className="w-5 h-5 mr-2" />
            Calculate Carbon Tax
          </Button>
          <Button variant="outline" size="lg" className="font-medium px-8">
            <Eye className="w-5 h-5 mr-2" />
            View Transparency Portal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;