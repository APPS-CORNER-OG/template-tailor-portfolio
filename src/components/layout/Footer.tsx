
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and tagline */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden group-hover:bg-primary/20 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/10 opacity-70"></div>
                <Sparkles className="w-5 h-5 text-primary relative" />
              </div>
              <span className="font-display text-xl font-semibold tracking-tight text-primary">
                Portfol<span className="text-primary/80">io</span>
              </span>
            </Link>
            <p className="text-muted-foreground">
              Create stunning portfolios with ease. Showcase your work professionally with our intuitive portfolio maker.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/templates" className="text-muted-foreground hover:text-primary transition-colors">Templates</Link></li>
              <li><Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/examples" className="text-muted-foreground hover:text-primary transition-colors">Examples</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/tutorials" className="text-muted-foreground hover:text-primary transition-colors">Tutorials</Link></li>
              <li><Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">Support</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-semibold text-foreground">Newsletter</h3>
            <p className="text-muted-foreground text-sm">Stay updated with the latest templates and features.</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border/50 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Portfolio Maker. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Portfolio Maker Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
