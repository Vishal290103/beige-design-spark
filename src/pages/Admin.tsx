import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, Users, Shield, BarChart3, Database, AlertTriangle } from "lucide-react";

const AdminPage = () => {
  const systemStats = [
    { label: "Total Users", value: "1,247", icon: Users, trend: "+12%" },
    { label: "Active Companies", value: "156", icon: Shield, trend: "+8%" },
    { label: "System Uptime", value: "99.9%", icon: Database, trend: "Stable" },
    { label: "API Calls/Day", value: "24.5K", icon: BarChart3, trend: "+15%" }
  ];

  const pendingApprovals = [
    {
      id: "APP001",
      type: "Product Registration",
      company: "EcoTech Solutions",
      product: "Smart Solar Panel",
      submittedDate: "2024-01-15",
      priority: "High"
    },
    {
      id: "APP002", 
      type: "Company Registration",
      company: "Green Manufacturing Ltd",
      product: "N/A",
      submittedDate: "2024-01-14",
      priority: "Medium"
    },
    {
      id: "APP003",
      type: "Tax Rate Adjustment",
      company: "Sustainable Motors",
      product: "Electric Bike Model Y",
      submittedDate: "2024-01-13",
      priority: "Low"
    }
  ];

  const systemAlerts = [
    {
      id: 1,
      type: "warning",
      message: "Database backup delayed by 2 hours",
      timestamp: "2 hours ago",
      severity: "Medium"
    },
    {
      id: 2,
      type: "info", 
      message: "New blockchain integration available",
      timestamp: "4 hours ago",
      severity: "Low"
    },
    {
      id: 3,
      type: "error",
      message: "Payment gateway timeout reported",
      timestamp: "6 hours ago", 
      severity: "High"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">System Administration</h1>
          <p className="text-xl text-muted-foreground">
            Manage users, system settings, and monitor platform performance
          </p>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-success font-medium">{stat.trend}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pending Approvals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <span>Pending Approvals</span>
                <Badge variant="secondary">3</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingApprovals.map((approval) => (
                  <Card key={approval.id} className="border-l-4 border-l-warning">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-sm">{approval.type}</h4>
                          <p className="text-sm text-muted-foreground">{approval.id}</p>
                        </div>
                        <Badge 
                          variant={
                            approval.priority === 'High' ? 'destructive' :
                            approval.priority === 'Medium' ? 'default' : 'secondary'
                          }
                        >
                          {approval.priority}
                        </Badge>
                      </div>

                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Company:</span>
                          <span className="font-medium">{approval.company}</span>
                        </div>
                        {approval.product !== 'N/A' && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Product:</span>
                            <span className="font-medium">{approval.product}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Submitted:</span>
                          <span className="font-medium">{approval.submittedDate}</span>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t flex space-x-2">
                        <Button size="sm" className="flex-1">
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Review
                        </Button>
                        <Button size="sm" variant="destructive" className="flex-1">
                          Reject
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-primary" />
                <span>System Configuration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Tax Rate Settings</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="electronics">Electronics (%)</Label>
                    <Input id="electronics" type="number" defaultValue="15" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="automotive">Automotive (%)</Label>
                    <Input id="automotive" type="number" defaultValue="25" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="textiles">Textiles (%)</Label>
                    <Input id="textiles" type="number" defaultValue="12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="manufacturing">Manufacturing (%)</Label>
                    <Input id="manufacturing" type="number" defaultValue="20" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">System Settings</h4>
                <div className="space-y-2">
                  <Label htmlFor="apiLimit">Daily API Limit</Label>
                  <Input id="apiLimit" type="number" defaultValue="100000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxFileSize">Max Upload Size (MB)</Label>
                  <Input id="maxFileSize" type="number" defaultValue="50" />
                </div>
              </div>

              <div className="space-y-2">
                <Button className="w-full">
                  Save Configuration
                </Button>
                <Button variant="outline" className="w-full">
                  Reset to Defaults
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Alerts */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>System Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {systemAlerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className={`flex items-center justify-between p-3 rounded-lg border ${
                    alert.type === 'error' ? 'border-destructive/20 bg-destructive/5' :
                    alert.type === 'warning' ? 'border-warning/20 bg-warning/5' :
                    'border-info/20 bg-info/5'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      alert.type === 'error' ? 'bg-destructive' :
                      alert.type === 'warning' ? 'bg-warning' :
                      'bg-info'
                    }`} />
                    <div>
                      <p className="text-sm font-medium">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.timestamp}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={
                        alert.severity === 'High' ? 'destructive' :
                        alert.severity === 'Medium' ? 'default' : 'secondary'
                      }
                      className="text-xs"
                    >
                      {alert.severity}
                    </Badge>
                    <Button size="sm" variant="ghost">
                      Dismiss
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPage;