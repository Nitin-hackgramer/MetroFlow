import React from 'react';
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'API Documentation', href: '#' },
        { name: 'Mobile Apps', href: '#' },
        { name: 'Integrations', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#' },
        { name: 'Press Kit', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Community', href: '#' },
        { name: 'Status Page', href: '#' },
        { name: 'Bug Reports', href: '#' },
        { name: 'Feature Requests', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'GDPR Compliance', href: '#' },
        { name: 'Security', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-background/95 border-t border-glass-border/20" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Metro Line Style Divider */}
        <div className="relative mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-4 h-4 rounded-full bg-metro-green"></div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-metro-green via-metro-blue to-metro-red opacity-50"></div>
            <div className="w-4 h-4 rounded-full bg-metro-blue"></div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-metro-blue via-metro-yellow to-metro-red opacity-50"></div>
            <div className="w-4 h-4 rounded-full bg-metro-red"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-bold font-poppins text-foreground">MetroFlow</span>
            </div>
            
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Revolutionizing metro travel with AI-powered intelligence. 
              Smart routes, real-time insights, and stress-free commuting for everyone.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-foreground/80 text-sm">hello@metroflow.ai</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-foreground/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-foreground/80 text-sm">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-glass-bg/20 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-foreground/70 hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 glass-card p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Stay Updated with MetroFlow
            </h3>
            <p className="text-foreground/70 mb-6">
              Get the latest updates on new features, city expansions, and metro intelligence insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="neuro-btn whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-foreground/60 mt-3">
              No spam, unsubscribe at any time. See our Privacy Policy.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-glass-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-foreground/60 text-sm">
              © 2024 MetroFlow. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-foreground/60">
              <span>Made with ❤️ for commuters worldwide</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;