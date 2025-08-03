import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Shield, TreePine } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Calculate Carbon Tax",
      description: "Every product has a carbon footprint. Our system calculates the appropriate tax based on CO₂ emissions.",
      icon: Calculator,
      iconBg: "bg-primary",
    },
    {
      number: "2",
      title: "Secure Blockchain Storage",
      description: "All transactions are recorded on blockchain for complete transparency and immutable audit trails.",
      icon: Shield,
      iconBg: "bg-info",
    },
    {
      number: "3",
      title: "Fund Green Projects",
      description: "Collected taxes directly fund renewable energy projects, creating measurable environmental impact.",
      icon: TreePine,
      iconBg: "bg-success",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${step.iconBg} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="absolute top-4 left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;