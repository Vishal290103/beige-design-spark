import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Analytics = () => {
  const productTypeData = [
    { name: "Eco-Friendly", value: 94, color: "hsl(var(--success))" },
    { name: "Solar", value: 6, color: "hsl(var(--warning))" },
  ];

  const energyUsageData = [
    { name: "Solar", value: 4.5 },
    { name: "Wind", value: 2.8 },
    { name: "Hydro", value: 1.2 },
    { name: "Other", value: 0.5 },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Tax Collection & Usage Analytics</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tax Collected by Product Type */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tax Collected by Product Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {productTypeData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${item.value}%`,
                            backgroundColor: item.color,
                          }}
                        />
                      </div>
                      <span className="text-sm font-semibold w-8">{item.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tax Usage by Energy Type */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tax Usage by Energy Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {energyUsageData.map((item, index) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <span className="font-medium">{item.name}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-muted rounded-full h-3">
                        <div
                          className="h-3 bg-primary rounded-full transition-all duration-300"
                          style={{ width: `${(item.value / 6) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold w-12">₹{item.value}Cr</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Analytics;