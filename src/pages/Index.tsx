import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SystemOverview from "@/components/SystemOverview";
import Analytics from "@/components/Analytics";
import ProjectMap from "@/components/ProjectMap";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SystemOverview />
      <Analytics />
      <ProjectMap />
      <HowItWorks />
      <CTA />
    </div>
  );
};

export default Index;
