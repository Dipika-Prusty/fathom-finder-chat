import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About FloatChat
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Democratizing access to ocean data through AI-powered natural language queries and real-time visualizations.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  FloatChat was born from the recognition that ocean data, particularly from the ARGO program, 
                  contains invaluable insights that remain locked away due to technical barriers. We believe 
                  that oceanographic research and understanding should be accessible to everyone.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our AI-powered platform bridges the gap between complex oceanographic datasets and intuitive 
                  natural language queries, making it possible for researchers, students, policymakers, and 
                  curious minds to explore the ocean's secrets without needing specialized technical knowledge.
                </p>
                <p className="text-lg text-muted-foreground">
                  By democratizing access to ocean data, we're empowering a new generation of ocean advocates 
                  and enabling more informed decisions about our planet's most critical resource.
                </p>
              </div>
              <div className="relative">
                <Card className="p-8 shadow-card bg-gradient-to-br from-card to-secondary/20">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Why It Matters</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>Climate research requires accessible ocean data insights</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>Educational institutions need intuitive data exploration tools</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>Policy makers need clear visualizations for informed decisions</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>The public deserves to understand our changing oceans</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A passionate group of oceanographers, data scientists, and AI researchers 
                working together to make ocean data accessible to everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Sarah Ocean",
                  role: "Lead Oceanographer",
                  bio: "20+ years in marine research with expertise in ARGO float data analysis and climate modeling.",
                },
                {
                  name: "Alex Chen",
                  role: "AI Research Lead",
                  bio: "Specializes in natural language processing and machine learning for scientific data interpretation.",
                },
                {
                  name: "Maria Rodriguez",
                  role: "Data Visualization Expert",
                  bio: "Expert in creating intuitive interfaces that transform complex datasets into actionable insights.",
                },
              ].map((member, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0 text-center">
                    <div className="w-20 h-20 bg-gradient-ocean rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary-foreground text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                    <p className="text-accent font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our mission to democratize ocean data access.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Accessibility",
                  description: "Making complex data simple and understandable for everyone.",
                },
                {
                  title: "Innovation",
                  description: "Pushing the boundaries of AI and data visualization technology.",
                },
                {
                  title: "Collaboration",
                  description: "Working with the global research community to advance ocean science.",
                },
                {
                  title: "Transparency",
                  description: "Open science principles with clear, verifiable data sources.",
                },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-surface rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-accent-foreground text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;