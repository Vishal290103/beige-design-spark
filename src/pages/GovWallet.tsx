import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownLeft, Clock, Shield } from "lucide-react";

const GovWalletPage = () => {
  const walletBalance = {
    total: "₹12.3 Cr",
    available: "₹8.5 Cr", 
    allocated: "₹3.8 Cr",
    pending: "₹2.1 Cr"
  };

  const recentTransactions = [
    {
      id: "TXN001",
      type: "inflow",
      amount: "₹67,500",
      source: "Carbon Tax Collection",
      description: "Electronics sector tax collection",
      timestamp: "2024-01-15 14:30",
      status: "Completed"
    },
    {
      id: "TXN002", 
      type: "outflow",
      amount: "₹2,50,000",
      source: "Project Funding",
      description: "Solar Farm Delhi - Phase 2 funding",
      timestamp: "2024-01-15 12:15",
      status: "Completed"
    },
    {
      id: "TXN003",
      type: "inflow", 
      amount: "₹1,20,000",
      source: "Carbon Tax Collection",
      description: "Automotive sector tax collection",
      timestamp: "2024-01-14 16:45",
      status: "Completed"
    },
    {
      id: "TXN004",
      type: "outflow",
      amount: "₹85,000",
      source: "Project Funding", 
      description: "Wind Farm Maharashtra - Equipment",
      timestamp: "2024-01-14 11:20",
      status: "Pending"
    }
  ];

  const fundAllocation = [
    { category: "Solar Projects", amount: "₹4.2 Cr", percentage: 34 },
    { category: "Wind Projects", amount: "₹3.8 Cr", percentage: 31 },
    { category: "Hydro Projects", amount: "₹2.2 Cr", percentage: 18 },
    { category: "Research & Development", amount: "₹1.5 Cr", percentage: 12 },
    { category: "Administrative", amount: "₹0.6 Cr", percentage: 5 }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Government Carbon Wallet</h1>
          <p className="text-xl text-muted-foreground">
            Transparent management of carbon tax funds and renewable energy investments
          </p>
        </div>

        {/* Wallet Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary-foreground/80 text-sm">Total Balance</p>
                  <p className="text-2xl font-bold">{walletBalance.total}</p>
                </div>
                <Wallet className="w-8 h-8 text-primary-foreground/80" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Available</p>
                  <p className="text-xl font-bold text-success">{walletBalance.available}</p>
                </div>
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Allocated</p>
                  <p className="text-xl font-bold text-info">{walletBalance.allocated}</p>
                </div>
                <ArrowDownLeft className="w-6 h-6 text-info" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Pending</p>
                  <p className="text-xl font-bold text-warning">{walletBalance.pending}</p>
                </div>
                <Clock className="w-6 h-6 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Recent Transactions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'inflow' 
                          ? 'bg-success/10 text-success' 
                          : 'bg-info/10 text-info'
                      }`}>
                        {transaction.type === 'inflow' ? (
                          <ArrowUpRight className="w-5 h-5" />
                        ) : (
                          <ArrowDownLeft className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{transaction.description}</p>
                        <p className="text-xs text-muted-foreground">
                          {transaction.timestamp} • {transaction.source}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        transaction.type === 'inflow' ? 'text-success' : 'text-info'
                      }`}>
                        {transaction.type === 'inflow' ? '+' : '-'}{transaction.amount}
                      </p>
                      <Badge variant={transaction.status === 'Completed' ? 'default' : 'secondary'} className="text-xs">
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Transactions
              </Button>
            </CardContent>
          </Card>

          {/* Fund Allocation */}
          <Card>
            <CardHeader>
              <CardTitle>Fund Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fundAllocation.map((allocation, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{allocation.category}</span>
                      <span className="text-sm font-semibold">{allocation.amount}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div
                          className="h-2 bg-primary rounded-full transition-all duration-300"
                          style={{ width: `${allocation.percentage}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-8">{allocation.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t space-y-2">
                <Button className="w-full">
                  Allocate Funds
                </Button>
                <Button variant="outline" className="w-full">
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GovWalletPage;