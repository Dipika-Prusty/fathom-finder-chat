import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Brain, BarChart3, Database } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Ask in Natural Language",
      description: "Simply type your question about ocean data in plain English. No technical queries or complex syntax required.",
      example: "Show me temperature trends in the North Atlantic over the past 5 years",
    },
    {
      icon: Brain,
      title: "AI Processing",
      description: "Our advanced AI interprets your question, identifies relevant ARGO datasets, and determines the best analysis approach.",
      technical: "Natural Language Processing → Query Understanding → Data Selection",
    },
    {
      icon: Database,
      title: "Data Retrieval",
      description: "The system automatically accesses and processes vast amounts of ARGO float data from global ocean databases.",
      stats: "Access to 2M+ ocean profiles from 4,000+ active floats worldwide",
    },
    {
      icon: BarChart3,
      title: "Intelligent Visualization",
      description: "Results are presented through interactive charts, maps, and dashboards tailored to your specific question.",
      features: "Interactive maps, time series, 3D ocean profiles, trend analysis",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How FloatChat Works
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Transform complex ocean data queries into simple conversations. 
              Our AI-powered system makes oceanographic research as easy as asking a question.
            </p>
            <Button variant="surface" size="lg">
              Try It Now
            </Button>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">The Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From your natural language question to actionable ocean insights in four simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="text-sm text-accent font-medium mb-1">Step {index + 1}</div>
                          <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      {step.example && (
                        <div className="bg-muted/50 p-3 rounded-lg border-l-4 border-accent">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Example: </span>
                            "{step.example}"
                          </p>
                        </div>
                      )}
                      {step.technical && (
                        <div className="bg-primary/5 p-3 rounded-lg">
                          <p className="text-sm text-primary font-medium">{step.technical}</p>
                        </div>
                      )}
                      {step.stats && (
                        <div className="bg-accent/10 p-3 rounded-lg">
                          <p className="text-sm text-accent-foreground font-medium">{step.stats}</p>
                        </div>
                      )}
                      {step.features && (
                        <div className="bg-secondary/50 p-3 rounded-lg">
                          <p className="text-sm text-secondary-foreground">{step.features}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Technology Stack</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built on cutting-edge AI and data processing technologies to deliver fast, accurate insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: "AI & ML",
                  technologies: ["Large Language Models", "Natural Language Processing", "Machine Learning Pipelines", "Computer Vision"],
                  color: "bg-gradient-ocean",
                },
                {
                  category: "Data Processing",
                  technologies: ["Real-time Data Streams", "Distributed Computing", "Time Series Analysis", "Geospatial Processing"],
                  color: "bg-gradient-surface",
                },
                {
                  category: "Visualization",
                  technologies: ["Interactive Charts", "3D Ocean Maps", "Real-time Dashboards", "Mobile-Responsive Design"],
                  color: "bg-gradient-deep",
                },
              ].map((stack, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-6">
                    <div className={`w-full h-2 ${stack.color} rounded-full mb-4`}></div>
                    <CardTitle className="text-xl text-foreground">{stack.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2">
                      {stack.technologies.map((tech, techIndex) => (
                        <li key={techIndex} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                          <span className="text-muted-foreground text-sm">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Explore Ocean Data?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the power of AI-driven ocean data exploration. Start asking questions 
              and get instant insights from the world's largest ocean database.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero">
                Try Interactive Demo
              </Button>
              <Button variant="outline" size="lg">
                View Sample Queries
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;