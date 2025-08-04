import { Button } from "@/components/ui/button";
import { Calculator, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Ready to Make a Difference?
        </h2>
        
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Join the movement towards a sustainable future through transparent carbon taxation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="font-medium px-8 bg-white text-primary hover:bg-white/90"
            onClick={() => navigate('/calculator')}
          >
            <Calculator className="w-5 h-5 mr-2" />
            Start Calculating
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="font-medium px-8 border-white text-white hover:bg-white/10"
            onClick={() => navigate('/transparency')}
          >
            <Eye className="w-5 h-5 mr-2" />
            Explore Transparency
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;