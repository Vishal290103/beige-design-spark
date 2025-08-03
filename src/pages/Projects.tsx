import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Zap, Calendar, Users, ExternalLink } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      name: "Solar Farm Delhi NCR",
      type: "Solar Energy",
      location: "Gurgaon, Haryana", 
      capacity: "50 MW",
      status: "Active",
      funding: "₹2.5 Cr",
      carbonOffset: "5,200 tons CO₂/year",
      startDate: "Jan 2024",
      completion: 78,
      beneficiaries: 12500,
      description: "Large-scale solar installation providing clean energy to 12,500+ households in Delhi NCR region.",
      image: "🌞"
    },
    {
      id: 2,
      name: "Wind Farm Maharashtra",
      type: "Wind Energy", 
      location: "Pune, Maharashtra",
      capacity: "75 MW",
      status: "Active",
      funding: "₹3.8 Cr",
      carbonOffset: "7,800 tons CO₂/year",
      startDate: "Nov 2023",
      completion: 92,
      beneficiaries: 18750,
      description: "Offshore wind turbines generating renewable energy for western Maharashtra grid.",
      image: "💨"
    },
    {
      id: 3,
      name: "Hydro Plant Kerala",
      type: "Hydro Energy",
      location: "Kochi, Kerala",
      capacity: "30 MW", 
      status: "Completed",
      funding: "₹2.2 Cr",
      carbonOffset: "3,500 tons CO₂/year",
      startDate: "Aug 2023",
      completion: 100,
      beneficiaries: 8500,
      description: "Small-scale hydroelectric plant utilizing natural water flow for sustainable energy generation.",
      image: "💧"
    },
    {
      id: 4,
      name: "Biomass Plant Tamil Nadu",
      type: "Biomass Energy",
      location: "Chennai, Tamil Nadu",
      capacity: "25 MW",
      status: "Planning",
      funding: "₹1.8 Cr",
      carbonOffset: "2,800 tons CO₂/year",
      startDate: "Mar 2024",
      completion: 15,
      beneficiaries: 6200,
      description: "Converting agricultural waste into clean energy while supporting local farming communities.",
      image: "🌾"
    },
    {
      id: 5,
      name: "Geothermal Project Rajasthan",
      type: "Geothermal Energy",
      location: "Jaipur, Rajasthan", 
      capacity: "40 MW",
      status: "Development",
      funding: "₹3.2 Cr",
      carbonOffset: "4,200 tons CO₂/year",
      startDate: "May 2024",
      completion: 35,
      beneficiaries: 10500,
      description: "Innovative geothermal energy extraction leveraging Rajasthan's natural heat resources.",
      image: "🌋"
    },
    {
      id: 6,
      name: "Tidal Energy Gujarat",
      type: "Tidal Energy",
      location: "Surat, Gujarat",
      capacity: "20 MW",
      status: "Research",
      funding: "₹1.5 Cr",
      carbonOffset: "2,100 tons CO₂/year", 
      startDate: "Jul 2024",
      completion: 8,
      beneficiaries: 5200,
      description: "Pilot project harnessing tidal movements along Gujarat coastline for renewable energy.",
      image: "🌊"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "default";
      case "Active": return "default";
      case "Development": return "secondary";
      case "Planning": return "outline";
      case "Research": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Renewable Energy Projects</h1>
          <p className="text-xl text-muted-foreground">
            Discover how carbon tax funds are creating a sustainable energy future across India
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-1">6</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-success mb-1">240 MW</div>
              <div className="text-sm text-muted-foreground">Total Capacity</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-info mb-1">61,150</div>
              <div className="text-sm text-muted-foreground">Beneficiaries</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-warning mb-1">25,600</div>
              <div className="text-sm text-muted-foreground">Tons CO₂/year</div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{project.image}</div>
                    <div>
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{project.type}</p>
                    </div>
                  </div>
                  <Badge variant={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-muted-foreground" />
                    <span>{project.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{project.startDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{project.beneficiaries.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>Funding:</span>
                    <span className="font-semibold text-primary">{project.funding}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>CO₂ Offset:</span>
                    <span className="font-semibold text-success">{project.carbonOffset}</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span className="font-semibold">{project.completion}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="h-2 bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${project.completion}%` }}
                    />
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <Button className="w-full" size="sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    View on Map
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Project Details
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

export default ProjectsPage;