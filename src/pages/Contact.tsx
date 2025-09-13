import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Users, Globe } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about FloatChat? Want to collaborate or provide feedback? 
              We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                      
                      <div>
                        <Label htmlFor="organization">Organization (Optional)</Label>
                        <Input id="organization" placeholder="University, Research Institute, etc." />
                      </div>
                      
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="What's this about?" />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us more about your inquiry..."
                          rows={5}
                        />
                      </div>
                      
                      <Button variant="ocean" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Other Ways to Reach Us</h2>
                  
                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        title: "Email Us",
                        description: "For general inquiries and support",
                        contact: "hello@floatchat.ai",
                        action: "mailto:hello@floatchat.ai",
                      },
                      {
                        icon: Users,
                        title: "Research Collaboration",
                        description: "Interested in collaborating on research projects",
                        contact: "research@floatchat.ai",
                        action: "mailto:research@floatchat.ai",
                      },
                      {
                        icon: MessageSquare,
                        title: "Technical Support",
                        description: "Need help with the platform or have technical questions",
                        contact: "support@floatchat.ai",
                        action: "mailto:support@floatchat.ai",
                      },
                      {
                        icon: Globe,
                        title: "Social Media",
                        description: "Follow us for updates and ocean data insights",
                        contact: "@FloatChatAI",
                        action: "#",
                      },
                    ].map((contact, index) => {
                      const Icon = contact.icon;
                      return (
                        <Card key={index} className="p-4 hover:shadow-card transition-all duration-300">
                          <CardContent className="p-0">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-gradient-surface rounded-lg flex items-center justify-center flex-shrink-0">
                                <Icon className="h-6 w-6 text-accent-foreground" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-foreground mb-1">{contact.title}</h3>
                                <p className="text-muted-foreground text-sm mb-2">{contact.description}</p>
                                <a 
                                  href={contact.action}
                                  className="text-accent hover:text-accent-light transition-colors font-medium"
                                >
                                  {contact.contact}
                                </a>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* FAQ Preview */}
                <Card className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg text-foreground">Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      {[
                        {
                          question: "How accurate is the ocean data?",
                          answer: "We use official ARGO float data maintained by international oceanographic institutions with rigorous quality control.",
                        },
                        {
                          question: "Can I use FloatChat for academic research?",
                          answer: "Absolutely! FloatChat is designed for researchers, students, and educators. We offer special academic pricing.",
                        },
                        {
                          question: "What data formats can I export?",
                          answer: "Data can be exported in CSV, JSON, NetCDF, and various image formats for visualizations.",
                        },
                      ].map((faq, index) => (
                        <div key={index} className="border-l-4 border-accent/30 pl-4">
                          <h4 className="font-medium text-foreground mb-1">{faq.question}</h4>
                          <p className="text-muted-foreground text-sm">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-6">
                      View All FAQs
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Response Times</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  type: "General Inquiries",
                  time: "Within 24 hours",
                  description: "Questions about features, pricing, or general information",
                },
                {
                  type: "Technical Support",
                  time: "Within 12 hours",
                  description: "Platform issues, bugs, or technical difficulties",
                },
                {
                  type: "Research Collaboration",
                  time: "Within 48 hours",
                  description: "Partnership opportunities and research proposals",
                },
              ].map((response, index) => (
                <Card key={index} className="p-4">
                  <CardContent className="p-0 text-center">
                    <h3 className="font-semibold text-foreground mb-2">{response.type}</h3>
                    <p className="text-accent font-medium mb-2">{response.time}</p>
                    <p className="text-muted-foreground text-sm">{response.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;