import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, MapPin, Clock, Users } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 metro-lines-bg"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-metro-green/20 blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-metro-blue/20 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-metro-yellow/20 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* 3D Globe (Spline) - non-interactive, behind main content */}
      <div
        className="hidden lg:block absolute left-1/2 top-[120%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-90 z-0 rounded-xl"
        aria-hidden="true"
        style={{ width: '100vw', height: '100vw' }}
      >
        <iframe
          src="https://my.spline.design/3dglobe-PrQYveWALbIYSuf1qdXYYpID/"
          title="3D Globe"
          frameBorder="0"
          loading="lazy"
          className="w-full h-full rounded-xl shadow-2xl"
        />
      </div>

      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-pulse">
        <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
        <span className="text-sm font-medium text-foreground/80">AI-Powered Metro Intelligence</span>
          </div>

          {/* Main Headlines */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-poppins mb-6 leading-tight">
        <span className="text-foreground">Smart, Stress-Free</span>
        <br />
        <span className="bg-gradient-to-r from-metro-green via-metro-blue to-metro-yellow bg-clip-text text-transparent">
          Metro Journeys
        </span>
          </h1>

          <p className="text-xl sm:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
        Real-time crowd insights, AI-powered forecasts, and comfort-first route choices. 
        Transform your daily commute with intelligent metro navigation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <button className="neuro-btn group flex items-center gap-3 text-lg px-8 py-4">
          <span>Get Started</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
        
        <button className="glass-card px-8 py-4 hover:bg-glass-bg/20 transition-all duration-300 flex items-center gap-3 group">
          <Play className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-200" />
          <span className="text-foreground/90">Watch Demo</span>
        </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center mb-3">
            <MapPin className="w-8 h-8 text-metro-green" />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">12+</div>
          <div className="text-foreground/70">Metro Lines</div>
        </div>
        
        <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center mb-3">
            <Clock className="w-8 h-8 text-metro-blue" />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">95%</div>
          <div className="text-foreground/70">Accuracy</div>
        </div>
        
        <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center mb-3">
            <Users className="w-8 h-8 text-metro-yellow" />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">50K+</div>
          <div className="text-foreground/70">Active Users</div>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
