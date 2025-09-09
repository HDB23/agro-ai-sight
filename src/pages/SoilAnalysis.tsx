import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardCard, DashboardCardContent, DashboardCardDescription, DashboardCardHeader, DashboardCardTitle } from "@/components/ui/dashboard-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FlaskConical, Droplets, Thermometer, Zap, TrendingUp, Plus } from "lucide-react";
import soilAnalysisImg from "@/assets/soil-analysis.jpg";

export default function SoilAnalysis() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
              <FlaskConical className="w-8 h-8 text-primary" />
              Soil Analysis & Monitoring
            </h1>
            <p className="text-muted-foreground">Track soil health, nutrients, and environmental conditions</p>
          </div>
        </div>

        {/* Input Form and Current Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DashboardCard>
            <DashboardCardHeader>
              <DashboardCardTitle>Add New Soil Reading</DashboardCardTitle>
              <DashboardCardDescription>
                Log sensor data or manual measurements
              </DashboardCardDescription>
            </DashboardCardHeader>
            <DashboardCardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ph">pH Level</Label>
                    <Input id="ph" placeholder="6.8" />
                  </div>
                  <div>
                    <Label htmlFor="moisture">Moisture %</Label>
                    <Input id="moisture" placeholder="68" />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="nitrogen">Nitrogen (N)</Label>
                    <Input id="nitrogen" placeholder="45 ppm" />
                  </div>
                  <div>
                    <Label htmlFor="phosphorus">Phosphorus (P)</Label>
                    <Input id="phosphorus" placeholder="25 ppm" />
                  </div>
                  <div>
                    <Label htmlFor="potassium">Potassium (K)</Label>
                    <Input id="potassium" placeholder="180 ppm" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="temperature">Temperature °C</Label>
                    <Input id="temperature" placeholder="22" />
                  </div>
                  <div>
                    <Label htmlFor="location">Field Location</Label>
                    <Input id="location" placeholder="Field A - North" />
                  </div>
                </div>

                <Button className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Reading
                </Button>
              </div>
            </DashboardCardContent>
          </DashboardCard>

          <DashboardCard>
            <DashboardCardHeader>
              <DashboardCardTitle>Current Soil Status</DashboardCardTitle>
              <DashboardCardDescription>
                Latest readings from all monitored areas
              </DashboardCardDescription>
            </DashboardCardHeader>
            <DashboardCardContent>
              <div className="space-y-4">
                <img 
                  src={soilAnalysisImg} 
                  alt="Soil analysis sample" 
                  className="w-full h-40 object-cover rounded-lg"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <Droplets className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Avg Moisture</p>
                    <p className="text-lg font-bold text-primary">68%</p>
                  </div>
                  <div className="text-center p-3 bg-success/10 rounded-lg">
                    <FlaskConical className="w-6 h-6 text-success mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">pH Balance</p>
                    <p className="text-lg font-bold text-success">6.8</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Soil Health</span>
                    <Badge variant="outline" className="text-success border-success">Excellent</Badge>
                  </div>
                  <Progress value={89} className="h-2" />
                </div>
              </div>
            </DashboardCardContent>
          </DashboardCard>
        </div>

        {/* Detailed Metrics */}
        <DashboardCard className="animate-slide-up">
          <DashboardCardHeader>
            <div className="flex items-center justify-between">
              <div>
                <DashboardCardTitle>Nutrient Analysis - Field A</DashboardCardTitle>
                <DashboardCardDescription>
                  Detailed breakdown of soil composition and nutrients
                </DashboardCardDescription>
              </div>
              <Badge variant="outline" className="text-success border-success">
                Optimal Levels
              </Badge>
            </div>
          </DashboardCardHeader>
          <DashboardCardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">pH Level</span>
                    <span className="text-sm text-success">6.8 (Optimal)</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Target range: 6.0-7.0</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Soil Moisture</span>
                    <span className="text-sm text-primary">68% (Good)</span>
                  </div>
                  <Progress value={68} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Target range: 60-80%</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Temperature</span>
                    <span className="text-sm text-success">22°C (Ideal)</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Target range: 18-25°C</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  N-P-K Levels
                </h4>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Nitrogen (N)</span>
                    <span className="text-sm text-success">45 ppm</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Phosphorus (P)</span>
                    <span className="text-sm text-warning">25 ppm</span>
                  </div>
                  <Progress value={55} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Potassium (K)</span>
                    <span className="text-sm text-success">180 ppm</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>

                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Historical Data
                  </Button>
                </div>
              </div>
            </div>
          </DashboardCardContent>
        </DashboardCard>

        {/* Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DashboardCard>
            <DashboardCardHeader>
              <DashboardCardTitle>Field Recommendations</DashboardCardTitle>
              <DashboardCardDescription>
                AI-powered suggestions based on soil analysis
              </DashboardCardDescription>
            </DashboardCardHeader>
            <DashboardCardContent>
              <div className="space-y-3">
                <div className="p-3 bg-warning/10 rounded-lg border-l-4 border-warning">
                  <p className="font-medium text-sm">Increase Phosphorus</p>
                  <p className="text-xs text-muted-foreground">Consider adding phosphorus fertilizer to reach optimal levels</p>
                </div>
                <div className="p-3 bg-success/10 rounded-lg border-l-4 border-success">
                  <p className="font-medium text-sm">Maintain Current pH</p>
                  <p className="text-xs text-muted-foreground">Current pH levels are optimal for crop growth</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg border-l-4 border-primary">
                  <p className="font-medium text-sm">Monitor Moisture Levels</p>
                  <p className="text-xs text-muted-foreground">Continue current irrigation schedule</p>
                </div>
              </div>
            </DashboardCardContent>
          </DashboardCard>

          <DashboardCard>
            <DashboardCardHeader>
              <DashboardCardTitle>Recent Measurements</DashboardCardTitle>
              <DashboardCardDescription>
                Latest sensor readings from the field
              </DashboardCardDescription>
            </DashboardCardHeader>
            <DashboardCardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                  <div>
                    <p className="text-sm font-medium">Field A - North</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                  <Badge variant="outline" className="text-success border-success">Good</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                  <div>
                    <p className="text-sm font-medium">Field B - South</p>
                    <p className="text-xs text-muted-foreground">4 hours ago</p>
                  </div>
                  <Badge variant="outline" className="text-warning border-warning">Monitor</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                  <div>
                    <p className="text-sm font-medium">Field C - East</p>
                    <p className="text-xs text-muted-foreground">6 hours ago</p>
                  </div>
                  <Badge variant="outline" className="text-success border-success">Excellent</Badge>
                </div>
              </div>
            </DashboardCardContent>
          </DashboardCard>
        </div>
      </div>
    </DashboardLayout>
  );
}