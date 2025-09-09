import { Button } from "@/components/ui/button";
import { DashboardCard, DashboardCardContent, DashboardCardDescription, DashboardCardHeader, DashboardCardTitle } from "@/components/ui/dashboard-card";
import { Badge } from "@/components/ui/badge";
import { Sprout, Brain, BarChart3, Zap, ArrowRight, CheckCircle, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import farmHeroImg from "@/assets/farm-hero.jpg";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-farm-primary rounded-md flex items-center justify-center">
              <Sprout className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">SmartFarm AI</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/dashboard">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary">
                  <Zap className="w-3 h-3 mr-1" />
                  AI-Powered Agriculture
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="gradient-farm-primary bg-clip-text text-transparent">Empowering Farmers</span>
                  <br />
                  with AI Technology
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Monitor, analyze, and grow smarter with our comprehensive AI farming dashboard. 
                  Make data-driven decisions for optimal crop yields.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard">
                  <Button size="lg" className="gradient-farm-primary text-white border-0 hover:opacity-90">
                    Start Farming Smarter
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">10,000+ Farmers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-sm text-muted-foreground">98% Success Rate</span>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <img 
                src={farmHeroImg} 
                alt="Smart farming with AI technology" 
                className="rounded-2xl shadow-farm-elevated w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-farm border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-farm-primary rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">AI Analysis Complete</p>
                    <p className="text-xs text-muted-foreground">Crop health: 94% optimal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">Why Choose SmartFarm AI?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to revolutionize your farming operations with cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardCard className="text-center hover:shadow-farm-elevated transition-all duration-300">
              <DashboardCardHeader>
                <div className="w-12 h-12 gradient-farm-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sprout className="w-6 h-6 text-white" />
                </div>
                <DashboardCardTitle>Crop Health Monitoring</DashboardCardTitle>
                <DashboardCardDescription>
                  Real-time analysis of crop conditions using advanced imaging
                </DashboardCardDescription>
              </DashboardCardHeader>
            </DashboardCard>

            <DashboardCard className="text-center hover:shadow-farm-elevated transition-all duration-300">
              <DashboardCardHeader>
                <div className="w-12 h-12 gradient-farm-mint rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <DashboardCardTitle>Soil Analysis</DashboardCardTitle>
                <DashboardCardDescription>
                  Comprehensive soil health monitoring and nutrient tracking
                </DashboardCardDescription>
              </DashboardCardHeader>
            </DashboardCard>

            <DashboardCard className="text-center hover:shadow-farm-elevated transition-all duration-300">
              <DashboardCardHeader>
                <div className="w-12 h-12 gradient-farm-warning rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-warning-foreground" />
                </div>
                <DashboardCardTitle>Pest Detection</DashboardCardTitle>
                <DashboardCardDescription>
                  Early warning system for pest identification and prevention
                </DashboardCardDescription>
              </DashboardCardHeader>
            </DashboardCard>

            <DashboardCard className="text-center hover:shadow-farm-elevated transition-all duration-300">
              <DashboardCardHeader>
                <div className="w-12 h-12 gradient-farm-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <DashboardCardTitle>AI Recommendations</DashboardCardTitle>
                <DashboardCardDescription>
                  Smart insights and actionable recommendations for optimal yields
                </DashboardCardDescription>
              </DashboardCardHeader>
            </DashboardCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of farmers already using AI to optimize their operations and increase yields
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/dashboard">
                <Button size="lg" className="gradient-farm-primary text-white border-0">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 gradient-farm-primary rounded-md flex items-center justify-center">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">SmartFarm AI</span>
            </div>
            <p className="text-muted-foreground">
              Empowering farmers with AI-driven insights for sustainable agriculture
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 SmartFarm AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}