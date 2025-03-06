
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TemplateSelector from '@/components/ui/custom/TemplateSelector';
import PortfolioPreview from '@/components/ui/custom/PortfolioPreview';
import InputForm from '@/components/ui/custom/InputForm';
import { PortfolioProvider } from '@/context/PortfolioContext';
import { ArrowRight, Heart, CheckCircle, Sparkles, Palette, Maximize, Pencil, Download, Settings } from 'lucide-react';
import { createScrollObserver } from '@/utils/animations';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const observer = createScrollObserver('.scroll-reveal', 'slide-up');
    
    return () => {
      // Clean up observer when component unmounts
      if (observer) {
        document.querySelectorAll('.scroll-reveal').forEach(el => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  const features = [
    {
      icon: <Palette className="w-6 h-6 text-blue-500" />,
      title: "Beautiful Templates",
      description: "Choose from a range of professionally designed templates to showcase your work."
    },
    {
      icon: <Settings className="w-6 h-6 text-indigo-500" />,
      title: "Easy Customization",
      description: "Customize colors, fonts, and layouts to match your personal brand and style."
    },
    {
      icon: <Maximize className="w-6 h-6 text-green-500" />,
      title: "Responsive Design",
      description: "Your portfolio will look great on all devices, from desktops to smartphones."
    },
    {
      icon: <Pencil className="w-6 h-6 text-yellow-500" />,
      title: "Content Management",
      description: "Easily update your information, projects, and skills as you grow professionally."
    },
    {
      icon: <Download className="w-6 h-6 text-purple-500" />,
      title: "Export Options",
      description: "Download your portfolio as PDF or HTML to share it with potential clients or employers."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-rose-500" />,
      title: "Smart Suggestions",
      description: "Get AI-powered recommendations to improve your portfolio content and presentation."
    }
  ];

  return (
    <PortfolioProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] rounded-full opacity-10 bg-gradient-to-br from-primary/20 to-primary/5"></div>
              <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-10 bg-gradient-to-tr from-primary/20 to-primary/5"></div>
            </div>
            
            <div className="container mx-auto px-6 relative">
              <div className="max-w-3xl mx-auto text-center">
                <Badge variant="outline" className="mb-6 py-1 px-4 border-primary/20 bg-primary/5 text-primary">
                  Portfolio Maker
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 animate-fade-in">
                  Create Your Professional 
                  <br />
                  <span className="relative">
                    Portfolio <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20"></span>
                  </span> in Minutes
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 animate-fade-in animate-delay-100">
                  Showcase your skills, projects, and achievements with a 
                  beautifully designed portfolio website.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animate-delay-200">
                  <Button size="lg" className="rounded-full px-8">
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full px-8">
                    Explore Templates
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          {/* How It Works Section */}
          <section className="py-16 md:py-24 bg-secondary/50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 scroll-reveal">
                  How It Works
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto scroll-reveal">
                  Create a stunning portfolio in three simple steps.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="text-center space-y-4 scroll-reveal">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-semibold">Choose a Template</h3>
                  <p className="text-muted-foreground">
                    Select from our collection of professionally designed portfolio templates.
                  </p>
                </div>
                
                <div className="text-center space-y-4 scroll-reveal">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-xl font-semibold">Add Your Content</h3>
                  <p className="text-muted-foreground">
                    Fill in your information, work experience, projects, and skills.
                  </p>
                </div>
                
                <div className="text-center space-y-4 scroll-reveal">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-semibold">Publish & Share</h3>
                  <p className="text-muted-foreground">
                    Preview your portfolio, make any adjustments, and share it with the world.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Template Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 scroll-reveal">
                  Choose Your Template
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto scroll-reveal">
                  Select from various styles to find the perfect showcase for your work.
                </p>
              </div>
            </div>
            
            <TemplateSelector />
          </section>
          
          {/* Preview Section */}
          <section className="py-16 md:py-24 bg-secondary/50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 scroll-reveal">
                  Preview Your Portfolio
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto scroll-reveal">
                  See how your portfolio will look across different devices.
                </p>
              </div>
            </div>
            
            <PortfolioPreview />
          </section>
          
          {/* Features Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 scroll-reveal">
                  Powerful Features
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto scroll-reveal">
                  Everything you need to create a professional portfolio.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="scroll-reveal border p-6 hover:shadow-soft transition-shadow">
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          
          {/* Testimonials (can be added in the future) */}
          
          {/* CTA Section */}
          <section className="py-20 md:py-32 bg-primary text-primary-foreground">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 scroll-reveal">
                  Ready to Showcase Your Work?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8 scroll-reveal">
                  Join thousands of professionals who use our platform to create stunning portfolios.
                </p>
                <div className="scroll-reveal">
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    className="rounded-full px-8 hover:bg-white"
                  >
                    Get Started Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        
        {/* Input Form Modal */}
        <InputForm />
      </div>
    </PortfolioProvider>
  );
};

export default Index;
