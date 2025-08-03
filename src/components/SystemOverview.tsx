import StatsCard from "./StatsCard";
import { DollarSign, FolderOpen, TreePine } from "lucide-react";

const SystemOverview = () => {
  const stats = [
    {
      title: "Total Carbon Tax Collected",
      value: "₹8.5 Cr",
      subtitle: "From 2+ verified transactions",
      icon: DollarSign,
      iconBg: "bg-success",
    },
    {
      title: "Projects Funded",
      value: "3 Active",
      subtitle: "Solar, Wind & Hydro Projects",
      icon: FolderOpen,
      iconBg: "bg-info",
    },
    {
      title: "CO₂ Offset Achieved",
      value: "16,500 tons",
      subtitle: "Equivalent to 35,000 trees planted",
      icon: TreePine,
      iconBg: "bg-warning",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">System Overview</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemOverview;