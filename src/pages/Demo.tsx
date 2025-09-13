import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Send, Sparkles, MapPin, TrendingUp, Thermometer } from "lucide-react";

const Demo = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sampleQueries = [
    "Show me temperature trends in the Mediterranean Sea",
    "What's the salinity level near the Gulf Stream?",
    "Display oxygen levels in the Pacific Ocean depths",
    "Compare temperature data between 2020 and 2023",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const mockResults = [
    {
      icon: TrendingUp,
      title: "Temperature Trends",
      description: "Mediterranean Sea showing 0.3°C increase over 5 years",
      value: "18.7°C avg",
    },
    {
      icon: MapPin,
      title: "Data Points",
      description: "1,247 ARGO floats contributing to this analysis",
      value: "Active",
    },
    {
      icon: Thermometer,
      title: "Depth Range",
      description: "Surface to 2000m depth measurements",
      value: "Multi-level",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Try FloatChat Demo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Experience the power of AI-driven ocean data exploration. Ask questions in natural language 
              and get instant visualizations from real ARGO float data.
            </p>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground flex items-center justify-center gap-2">
                  <Sparkles className="h-6 w-6 text-accent" />
                  AI Ocean Data Assistant
                </CardTitle>
                <p className="text-muted-foreground">
                  Ask any question about ocean data and get instant insights
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="mb-6">
                  <div className="flex gap-2">
                    <Input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="e.g., Show me temperature trends in the North Atlantic..."
                      className="flex-1"
                      disabled={isLoading}
                    />
                    <Button 
                      type="submit" 
                      variant="ocean"
                      disabled={isLoading || !query.trim()}
                    >
                      {isLoading ? (
                        <div className="animate-spin h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </form>

                {/* Sample Queries */}
                <div className="mb-8">
                  <p className="text-sm text-muted-foreground mb-3">Try these sample queries:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {sampleQueries.map((sample, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="justify-start text-left h-auto py-2 px-3"
                        onClick={() => setQuery(sample)}
                      >
                        <span className="text-xs">{sample}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Mock Results */}
                {(query || isLoading) && (
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Results</h3>
                    
                    {isLoading ? (
                      <div className="text-center py-8">
                        <div className="animate-spin h-8 w-8 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4" />
                        <p className="text-muted-foreground">Analyzing ocean data...</p>
                      </div>
                    ) : (
                      <>
                        {/* Mock Chart Area */}
                        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 mb-6 border">
                          <div className="h-48 bg-gradient-ocean/10 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <TrendingUp className="h-12 w-12 text-accent mx-auto mb-2" />
                              <p className="text-muted-foreground">Interactive visualization would appear here</p>
                              <p className="text-sm text-muted-foreground mt-1">Real charts, maps, and data plots</p>
                            </div>
                          </div>
                        </div>

                        {/* Mock Data Summary */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {mockResults.map((result, index) => {
                            const Icon = result.icon;
                            return (
                              <Card key={index} className="p-4">
                                <CardContent className="p-0">
                                  <div className="flex items-start space-x-3">
                                    <div className="w-10 h-10 bg-gradient-surface rounded-lg flex items-center justify-center flex-shrink-0">
                                      <Icon className="h-5 w-5 text-accent-foreground" />
                                    </div>
                                    <div>
                                      <h4 className="font-medium text-foreground mb-1">{result.title}</h4>
                                      <p className="text-xs text-muted-foreground mb-2">{result.description}</p>
                                      <span className="text-sm font-semibold text-accent">{result.value}</span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>

                        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <strong>Note:</strong> This is a demo showing the interface. The full version provides 
                            real-time access to ARGO float data with interactive visualizations.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Showcase */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What You Can Explore</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                FloatChat gives you access to comprehensive ocean data analysis capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Temperature Analysis",
                  description: "Surface and deep water temperature trends, anomalies, and patterns",
                  queries: ["Temperature maps", "Thermal trends", "Heat waves"],
                },
                {
                  title: "Salinity Monitoring",
                  description: "Ocean salinity levels, gradients, and changes over time",
                  queries: ["Salt content", "Salinity profiles", "Freshwater mixing"],
                },
                {
                  title: "Ocean Currents",
                  description: "Water movement patterns, current strength, and circulation analysis",
                  queries: ["Current maps", "Flow patterns", "Circulation data"],
                },
                {
                  title: "Climate Indicators",
                  description: "Long-term climate patterns, El Niño effects, and ocean-atmosphere interactions",
                  queries: ["Climate trends", "Seasonal patterns", "Anomaly detection"],
                },
              ].map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                    <div className="space-y-1">
                      {feature.queries.map((query, queryIndex) => (
                        <span 
                          key={queryIndex}
                          className="inline-block bg-accent/10 text-accent text-xs px-2 py-1 rounded mr-1"
                        >
                          {query}
                        </span>
                      ))}
                    </div>
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
              Ready for Full Access?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get unlimited access to real-time ARGO data, advanced visualizations, 
              and export capabilities for your research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero">
                Request Early Access
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;