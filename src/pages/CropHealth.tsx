import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardCard, DashboardCardContent, DashboardCardDescription, DashboardCardHeader, DashboardCardTitle } from "@/components/ui/dashboard-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, Camera, Sprout, TrendingUp, AlertTriangle, CheckCircle, Leaf } from "lucide-react";
import cropHealthImg from "@/assets/crop-health.jpg";

export default function CropHealth() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
              <Sprout className="w-8 h-8 text-primary" />
              Crop Health Monitoring
            </h1>
            <p className="text-muted-foreground">Real-time analysis of crop conditions using advanced imaging technology</p>
          </div>
        </div>

        {/* Upload Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DashboardCard>
            <DashboardCardHeader>
              <DashboardCardTitle>Upload Field Images</DashboardCardTitle>
              <DashboardCardDescription>
                Upload drone or satellite images for AI analysis
              </DashboardCardDescription>
            </DashboardCardHeader>
            <DashboardCardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-muted-foreground/40 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm font-medium mb-2">Drag and drop your images here</p>
                  <p className="text-xs text-muted-foreground mb-4">or</p>
                  <Button variant="outline" size="sm">
                    <Camera className="w-4 h-4 mr-2" />
                    Select Images
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Field name or location" />
                  <Button>
                    Analyze
                  </Button>
                </div>
              </div>
            </DashboardCardContent>
          </DashboardCard>

          <DashboardCard>
            <DashboardCardHeader>
              <DashboardCardTitle>Current Field Status</DashboardCardTitle>
              <DashboardCardDescription>
                Overview of all monitored fields
              </DashboardCardDescription>
            </DashboardCardHeader>
            <DashboardCardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <div>
                      <p className="font-medium text-sm">Field A - North</p>
                      <p className="text-xs text-muted-foreground">Last updated: 2 hours ago</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-success border-success">Healthy</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-warning" />
                    <div>
                      <p className="font-medium text-sm">Field B - South</p>
                      <p className="text-xs text-muted-foreground">Last updated: 4 hours ago</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-warning border-warning">Monitor</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Leaf className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Field C - East</p>
                      <p className="text-xs text-muted-foreground">Last updated: 1 hour ago</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary">Good</Badge>
                </div>
              </div>
            </DashboardCardContent>
          </DashboardCard>
        </div>

        {/* Detailed Analysis */}
        <DashboardCard className="animate-slide-up">
          <DashboardCardHeader>
            <div className="flex items-center justify-between">
              <div>
                <DashboardCardTitle>Field A - Detailed Analysis</DashboardCardTitle>
                <DashboardCardDescription>
                  Comprehensive health assessment based on multispectral imaging
                </DashboardCardDescription>
              </div>
              <Badge variant="outline" className="text-success border-success">
                <CheckCircle className="w-3 h-3 mr-1" />
                94% Healthy
              </Badge>
            </div>
          </DashboardCardHeader>
          <DashboardCardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <img 
                  src={cropHealthImg} 
                  alt="Crop health analysis" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" size="sm">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Trends
                  </Button>
                  <Button variant="outline" size="sm">
                    Export Report
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Plant Health Index</span>
                    <span className="text-sm text-success">94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Chlorophyll Content</span>
                    <span className="text-sm text-success">High</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Water Stress Level</span>
                    <span className="text-sm text-primary">Low</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Disease Risk</span>
                    <span className="text-sm text-primary">Minimal</span>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>

                <div className="pt-4 space-y-2">
                  <h4 className="font-semibold text-sm">Key Recommendations:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Continue current irrigation schedule</li>
                    <li>• Monitor for early signs of nutrient deficiency</li>
                    <li>• Consider increasing phosphorus levels in sector 3</li>
                    <li>• Optimal conditions for continued growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </DashboardCardContent>
        </DashboardCard>

        {/* Historical Data */}
        <DashboardCard>
          <DashboardCardHeader>
            <DashboardCardTitle>Historical Trends (Last 30 Days)</DashboardCardTitle>
            <DashboardCardDescription>
              Track crop health changes over time
            </DashboardCardDescription>
          </DashboardCardHeader>
          <DashboardCardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-success/10 rounded-lg">
                <p className="text-2xl font-bold text-success">94%</p>
                <p className="text-xs text-muted-foreground">Avg Health</p>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <p className="text-2xl font-bold text-primary">12</p>
                <p className="text-xs text-muted-foreground">Scans Complete</p>
              </div>
              <div className="text-center p-4 bg-warning/10 rounded-lg">
                <p className="text-2xl font-bold text-warning">3</p>
                <p className="text-xs text-muted-foreground">Issues Detected</p>
              </div>
              <div className="text-center p-4 bg-accent/10 rounded-lg">
                <p className="text-2xl font-bold text-accent">8</p>
                <p className="text-xs text-muted-foreground">Recommendations</p>
              </div>
            </div>
          </DashboardCardContent>
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
}