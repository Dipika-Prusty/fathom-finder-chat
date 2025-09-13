import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, BarChart3, Globe, Zap, ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-ocean.jpg";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Queries",
      description: "Ask questions in natural language and get instant insights from complex ocean datasets.",
    },
    {
      icon: BarChart3,
      title: "Real-time Visualizations",
      description: "Interactive charts, maps, and dashboards that bring ocean data to life.",
    },
    {
      icon: Globe,
      title: "Global ARGO Access",
      description: "Access to the world's largest collection of ocean profile data from 4,000+ active floats.",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get comprehensive analysis and visualizations in seconds, not hours.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground pt-16">
          <div className="absolute inset-0 bg-black/20"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
                FloatChat
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
                Democratize ocean data discovery through AI-powered natural language queries 
                and stunning visualizations
              </p>
              <p className="text-lg mb-10 max-w-2xl mx-auto opacity-80">
                Transform complex ARGO float data into actionable insights with simple conversations. 
                No technical expertise required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button variant="surface" size="lg" className="group">
                  Try Interactive Demo
                  <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Watch Video Tour
                </Button>
              </div>

              <div className="text-sm opacity-75">
                Trusted by researchers at 50+ institutions worldwide
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Powerful Ocean Data Analysis Made Simple
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the future of oceanographic research with AI that understands your questions 
                and delivers instant, accurate insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-2 group">
                    <CardContent className="p-0 text-center">
                      <div className="w-16 h-16 bg-gradient-ocean rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Researchers Choose FloatChat
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Save 90% of Analysis Time",
                      description: "Skip complex queries and programming. Get insights with simple questions like 'Show me temperature trends in the Arctic Ocean.'",
                    },
                    {
                      title: "Access 20+ Years of Data",
                      description: "Comprehensive ARGO float database spanning two decades of global ocean measurements at your fingertips.",
                    },
                    {
                      title: "Export-Ready Visualizations",
                      description: "Publication-quality charts, maps, and data exports perfect for research papers and presentations.",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-accent-foreground text-sm font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Card className="p-8 shadow-float bg-gradient-to-br from-card to-accent/5">
                  <CardContent className="p-0">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-surface rounded-full mx-auto mb-6 flex items-center justify-center">
                        <BarChart3 className="h-10 w-10 text-accent-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">Real Impact</h3>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-3xl font-bold text-accent mb-1">2M+</div>
                          <div className="text-sm text-muted-foreground">Ocean Profiles</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-accent mb-1">4K+</div>
                          <div className="text-sm text-muted-foreground">Active Floats</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-accent mb-1">50+</div>
                          <div className="text-sm text-muted-foreground">Institutions</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-accent mb-1">95%</div>
                          <div className="text-sm text-muted-foreground">Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-deep text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Exploring Ocean Data Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join researchers worldwide who are discovering new insights with FloatChat's 
              AI-powered ocean data platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="surface" size="lg" className="group">
                Try Demo Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Request Early Access
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
