import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ExternalLink } from "lucide-react";

const ProjectMap = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Renewable Energy Projects Map</h2>
        </div>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Interactive Project Map</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
              {/* Simulated map with project markers */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 opacity-50"></div>
              
              {/* Project markers */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-success rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-warning rounded-full animate-pulse shadow-lg"></div>
              
              <div className="text-center z-10">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4 opacity-60" />
                <p className="text-lg font-medium text-foreground mb-2">
                  View locations of all funded renewable energy projects across India
                </p>
                <p className="text-muted-foreground mb-6">
                  Interactive map showing real-time project status and impact metrics
                </p>
                <Button variant="outline" className="font-medium">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View All Projects
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectMap;