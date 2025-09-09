import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardCard, DashboardCardContent, DashboardCardDescription, DashboardCardHeader, DashboardCardTitle } from "@/components/ui/dashboard-card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sprout, Droplets, Bug, Zap, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import cropHealthImg from "@/assets/crop-health.jpg";
import soilAnalysisImg from "@/assets/soil-analysis.jpg";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Welcome Section */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Good morning, farmer! 🌱</h1>
            <p className="text-muted-foreground">Here's what's happening on your farm today</p>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard className="gradient-farm-primary text-white border-0">
            <DashboardCardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <DashboardCardTitle className="text-sm font-medium text-white">
                Crop Health Score
              </DashboardCardTitle>
              <Sprout className="h-4 w-4 text-white" />
            </DashboardCardHeader>
            <DashboardCardContent>
              <div className="text-2xl font-bold text-white">94%</div>
              <p className="text-xs text-primary-foreground/80">
                +2.1% from last week
              </p>
            </DashboardCardContent>
          </DashboardCard>

          <DashboardCard className="gradient-farm-mint border-0">
            <DashboardCardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <DashboardCardTitle className="text-sm font-medium">
                Soil Moisture
              </DashboardCardTitle>
              <Droplets className="h-4 w-4 text-primary" />
            </DashboardCardHeader>
            <DashboardCardContent>
              <div className="text-2xl font-bold">68%</div>
              <p className="text-xs text-muted-foreground">
                Optimal range
              </p>
            </DashboardCardContent>
          </DashboardCard>

          <DashboardCard>
            <DashboardCardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <DashboardCardTitle className="text-sm font-medium">
                Pest Risk Level
              </DashboardCardTitle>
              <Bug className="h-4 w-4 text-success" />
            </DashboardCardHeader>
            <DashboardCardContent>
              <div className="text-2xl font-bold text-success">Low</div>
              <p className="text-xs text-muted-foreground">
                No immediate threats detected
              </p>
            </DashboardCardContent>
          </DashboardCard>

          <DashboardCard>
            <DashboardCardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <DashboardCardTitle className="text-sm font-medium">
                AI Predictions
              </DashboardCardTitle>
              <Zap className="h-4 w-4 text-accent" />
            </DashboardCardHeader>
            <DashboardCardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                Active recommendations
              </p>
            </DashboardCardContent>
          </DashboardCard>
        </div>

        {/* Main Dashboard Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Crop Health Monitor */}
          <DashboardCard className="animate-slide-up">
            <DashboardCardHeader>
              <div className="flex items-center gap-2">
                <DashboardCardTitle>Crop Health Monitor</DashboardCardTitle>
                <Badge variant="outline" className="text-success border-success">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Healthy
                </Badge>
              </div>
              <DashboardCardDescription>
                Real-time monitoring of crop conditions
              </DashboardCardDescription>
            </DashboardCardHeader>
            <DashboardCardContent>
              <div className="space-y-4">
                <img 
                  src={cropHealthImg} 
                  alt="Healthy crops in field" 
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Plant Health Index</span>
                    <span className="font-medium">94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
                <Button className="w-full" variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Detailed Analysis
                </Button>
              </div>
            </DashboardCardContent>
          </DashboardCard>

          {/* Soil Analysis */}
          <DashboardCard className="animate-slide-up">
            <DashboardCardHeader>
              <div className="flex items-center gap-2">
                <DashboardCardTitle>Soil Analysis</DashboardCardTitle>
                <Badge variant="outline" className="text-warning border-warning">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Monitor
                </Badge>
              </div>
              <DashboardCardDescription>
                Current soil conditions and nutrient levels
              </DashboardCardDescription>
            </DashboardCardHeader>
            <DashboardCardContent>
              <div className="space-y-4">
                <img 
                  src={soilAnalysisImg} 
                  alt="Rich soil for analysis" 
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">pH Level</p>
                    <p className="text-lg font-semibold">6.8</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">N-P-K</p>
                    <p className="text-lg font-semibold">Good</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Moisture</p>
                    <p className="text-lg font-semibold">68%</p>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  Add Soil Reading
                </Button>
              </div>
            </DashboardCardContent>
          </DashboardCard>
        </div>

        {/* Recent Alerts & AI Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DashboardCard>
            <DashboardCardHeader>
              <DashboardCardTitle>Recent Alerts</DashboardCardTitle>
              <DashboardCardDescription>
                Latest notifications and warnings
              </DashboardCardDescription>
            </DashboardCardHeader>
            <DashboardCardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-success/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Irrigation Complete</p>
                    <p className="text-xs text-muted-foreground">Field A irrigation cycle finished successfully</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-warning/10 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Weather Alert</p>
                    <p className="text-xs text-muted-foreground">Heavy rain expected in next 48 hours</p>
                  </div>
                </div>
              </div>
            </DashboardCardContent>
          </DashboardCard>

          <DashboardCard>
            <DashboardCardHeader>
              <DashboardCardTitle>AI Recommendations</DashboardCardTitle>
              <DashboardCardDescription>
                Smart insights for optimal farming
              </DashboardCardDescription>
            </DashboardCardHeader>
            <DashboardCardContent>
              <div className="space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <p className="font-medium text-sm">Optimize Fertilizer Usage</p>
                  <p className="text-xs text-muted-foreground">Reduce nitrogen application by 15% in sector B</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <p className="font-medium text-sm">Pest Prevention</p>
                  <p className="text-xs text-muted-foreground">Apply organic pesticide to crops in field C</p>
                </div>
                <Button className="w-full mt-2" variant="outline">
                  View All Recommendations
                </Button>
              </div>
            </DashboardCardContent>
          </DashboardCard>
        </div>
      </div>
    </DashboardLayout>
  );
}