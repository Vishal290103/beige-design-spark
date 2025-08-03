import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, DollarSign, Package, Users, Calendar } from "lucide-react";

const DashboardPage = () => {
  const kpis = [
    {
      title: "Total Revenue",
      value: "₹8.5 Cr",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-success"
    },
    {
      title: "Products Registered", 
      value: "2,847",
      change: "+8.3%",
      trend: "up",
      icon: Package,
      color: "text-info"
    },
    {
      title: "Active Companies",
      value: "156",
      change: "+15.2%", 
      trend: "up",
      icon: Users,
      color: "text-warning"
    },
    {
      title: "Projects Funded",
      value: "6",
      change: "+2",
      trend: "up", 
      icon: TrendingUp,
      color: "text-primary"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "tax_collection",
      description: "Carbon tax collected from GreenTech Ltd",
      amount: "₹67,500",
      timestamp: "2 hours ago",
      status: "completed"
    },
    {
      id: 2,
      type: "project_funding",
      description: "Funding allocated to Solar Farm Delhi",
      amount: "₹2,50,000", 
      timestamp: "4 hours ago",
      status: "completed"
    },
    {
      id: 3,
      type: "product_registration",
      description: "New product registered by EcoMotors Inc",
      amount: null,
      timestamp: "6 hours ago",
      status: "pending"
    },
    {
      id: 4,
      type: "tax_collection",
      description: "Carbon tax collected from EcoFashion Co",
      amount: "₹18,000",
      timestamp: "8 hours ago", 
      status: "completed"
    }
  ];

  const monthlyData = [
    { month: "Jan", collection: 45, projects: 2 },
    { month: "Feb", collection: 52, projects: 3 },
    { month: "Mar", collection: 48, projects: 2 },
    { month: "Apr", collection: 61, projects: 4 },
    { month: "May", collection: 55, projects: 3 },
    { month: "Jun", collection: 67, projects: 5 },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Real-time overview of carbon tax system performance
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm mb-1">{kpi.title}</p>
                      <p className="text-2xl font-bold">{kpi.value}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <TrendingUp className="w-3 h-3 text-success" />
                        <span className="text-xs text-success font-medium">{kpi.change}</span>
                      </div>
                    </div>
                    <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${kpi.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span>Monthly Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="font-medium text-sm w-8">{data.month}</span>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xs text-muted-foreground">Tax Collection</span>
                          <span className="text-xs font-semibold">₹{data.collection}L</span>
                        </div>
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div
                            className="h-2 bg-primary rounded-full transition-all duration-300"
                            style={{ width: `${(data.collection / 70) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {data.projects} projects
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                      activity.type === 'tax_collection' ? 'bg-success/10 text-success' :
                      activity.type === 'project_funding' ? 'bg-info/10 text-info' :
                      'bg-warning/10 text-warning'
                    }`}>
                      {activity.type === 'tax_collection' ? '₹' :
                       activity.type === 'project_funding' ? '💡' : '📦'}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.description}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                        <div className="flex items-center space-x-2">
                          {activity.amount && (
                            <span className="text-xs font-semibold text-primary">{activity.amount}</span>
                          )}
                          <Badge 
                            variant={activity.status === 'completed' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {activity.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Activity
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-20 flex-col space-y-2">
                <Package className="w-6 h-6" />
                <span>Register Product</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Users className="w-6 h-6" />
                <span>Manage Companies</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <TrendingUp className="w-6 h-6" />
                <span>Generate Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;