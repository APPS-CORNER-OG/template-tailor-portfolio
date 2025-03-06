
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { usePortfolio } from '@/context/PortfolioContext';
import { Menu, X, Sparkles, User, Lock } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  const { state, dispatch } = usePortfolio();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePreview = () => {
    dispatch({ 
      type: 'TOGGLE_PREVIEW_MODE', 
      isPreview: !state.isPreviewMode 
    });
    
    toast({
      title: state.isPreviewMode ? "Editing Mode" : "Preview Mode",
      description: state.isPreviewMode ? "You can now edit your portfolio." : "This is how your portfolio will look.",
      duration: 3000,
    });
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4',
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b shadow-soft' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 group"
        >
          <div className="relative w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden group-hover:bg-primary/20 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/10 opacity-70"></div>
            <Sparkles className="w-5 h-5 text-primary relative" />
          </div>
          <span className="font-display text-xl font-semibold tracking-tight text-primary">
            Portfol<span className="text-primary/80">io</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">Home</Link>
          <Link to="/templates" className="text-foreground/80 hover:text-primary transition-colors">Templates</Link>
          <Link to="/pricing" className="text-foreground/80 hover:text-primary transition-colors">Pricing</Link>
          <Link to="/examples" className="text-foreground/80 hover:text-primary transition-colors">Examples</Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {state.selectedTemplateId && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={togglePreview}
              className={cn(
                "transition-all",
                state.isPreviewMode 
                  ? "bg-accent text-accent-foreground" 
                  : "bg-transparent hover:bg-accent/50"
              )}
            >
              {state.isPreviewMode ? "Edit" : "Preview"}
            </Button>
          )}
          <Button variant="ghost" size="sm" className="flex items-center space-x-1">
            <User className="w-4 h-4 mr-1" />
            <span>Sign In</span>
          </Button>
          <Button variant="default" size="sm" className="flex items-center space-x-1">
            <Lock className="w-4 h-4 mr-1" />
            <span>Sign Up</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? 
            <X className="w-6 h-6 text-foreground" /> : 
            <Menu className="w-6 h-6 text-foreground" />
          }
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 p-6 mt-2 bg-card border border-border shadow-medium rounded-lg md:hidden animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground px-3 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/templates" 
                className="text-foreground px-3 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Templates
              </Link>
              <Link 
                to="/pricing" 
                className="text-foreground px-3 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/examples" 
                className="text-foreground px-3 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Examples
              </Link>
              <div className="pt-4 space-y-3">
                {state.selectedTemplateId && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      togglePreview();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full"
                  >
                    {state.isPreviewMode ? "Edit" : "Preview"}
                  </Button>
                )}
                <Button variant="ghost" size="sm" className="flex items-center justify-center w-full">
                  <User className="w-4 h-4 mr-1" />
                  <span>Sign In</span>
                </Button>
                <Button variant="default" size="sm" className="flex items-center justify-center w-full">
                  <Lock className="w-4 h-4 mr-1" />
                  <span>Sign Up</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
