
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

      {/* Enhanced 3D Globe with Mobile-First Design */}
      <div
        className="absolute left-1/2 bottom-0 sm:bottom-auto sm:top-[75%] md:top-[95%] lg:top-[110%] transform -translate-x-1/2 translate-y-0 sm:-translate-y-1/2 pointer-events-none z-0 globe-iframe-wrapper"
        aria-hidden="true"
        style={{ width: 'clamp(500px, 100vw, 1600px)', height: 'clamp(400px, 75vw, 1000px)' }}
      >
        <style>{`
          .globe-iframe-wrapper { 
            visibility: visible; 
            filter: drop-shadow(0 25px 50px rgba(0,0,0,0.15));
          }
          
          .globe-iframe-wrapper .globe-iframe {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
            display: block;
            overflow: visible;
            transform-origin: 50% 0%;
            box-shadow: 
              0 25px 80px rgba(0,0,0,0.12),
              0 0 0 1px rgba(255,255,255,0.05),
              inset 0 1px 0 rgba(255,255,255,0.1);
          }

          /* Mobile-first: Make the semi-sphere the hero element */
          @media (max-width: 640px) {
            .globe-iframe-wrapper {
              height: clamp(450px, 90vw, 600px);
              filter: drop-shadow(0 35px 70px rgba(0,0,0,0.25));
            }
            .globe-iframe-wrapper .globe-iframe {
              clip-path: ellipse(150% 80% at 50% 0%);
              -webkit-clip-path: ellipse(150% 80% at 50% 0%);
              transform: translateY(8%) scale(1.35);
              border-radius: 9999px 9999px 0 0;
              box-shadow: 
                0 40px 120px rgba(0,0,0,0.25),
                0 0 0 1px rgba(255,255,255,0.1),
                inset 0 2px 0 rgba(255,255,255,0.15);
            }
          }

          /* Small tablets */
          @media (min-width: 641px) and (max-width: 900px) {
            .globe-iframe-wrapper .globe-iframe {
              clip-path: ellipse(130% 70% at 50% 0%);
              -webkit-clip-path: ellipse(130% 70% at 50% 0%);
              transform: translateY(12%) scale(1.2);
              border-radius: 9999px 9999px 0 0;
              box-shadow: 
                0 35px 90px rgba(0,0,0,0.18),
                0 0 0 1px rgba(255,255,255,0.08);
            }
          }

          /* Large screens: show full globe */
          @media (min-width: 901px) {
            .globe-iframe-wrapper .globe-iframe {
              clip-path: none;
              -webkit-clip-path: none;
              transform: none;
              border-radius: 1rem;
              box-shadow: 
                0 25px 80px rgba(0,0,0,0.12),
                0 0 0 1px rgba(255,255,255,0.05);
            }
          }
        `}</style>

        <iframe
          src="https://my.spline.design/3dglobe-PrQYveWALbIYSuf1qdXYYpID/"
          title="3D Globe"
          frameBorder="0"
          loading="lazy"
          className="globe-iframe"
        />
      </div>

      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 animate-pulse">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-success animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-foreground/80">AI-Powered Metro Intelligence</span>
          </div>

          {/* Main Headlines - Optimized for mobile */}
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold font-poppins mb-4 sm:mb-6 leading-tight px-2">
            <span className="text-foreground">Smart, Stress-Free</span>
            <br />
            <span className="bg-gradient-to-r from-metro-green via-metro-blue to-metro-yellow bg-clip-text text-transparent">
              Metro Journeys
            </span>
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl text-foreground/70 mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
            Real-time crowd insights, AI-powered forecasts, and comfort-first route choices. 
            Transform your daily commute with intelligent metro navigation.
          </p>

          {/* CTA Buttons - Mobile optimized */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
            <button className="neuro-btn group flex items-center gap-3 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="glass-card px-6 sm:px-8 py-3 sm:py-4 hover:bg-glass-bg/20 transition-all duration-300 flex items-center gap-3 group w-full sm:w-auto">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:scale-110 transition-transform duration-200" />
              <span className="text-foreground/90 text-base sm:text-base">Watch Demo</span>
            </button>
          </div>

          {/* Enhanced Stats Cards - Mobile optimized with better spacing */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-sm sm:max-w-2xl md:max-w-4xl mx-auto px-2">
            <div className="glass-card p-3 sm:p-4 md:p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-metro-green" />
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 leading-tight">12+</div>
              <div className="text-xs sm:text-sm md:text-base text-foreground/70 leading-tight">Metro Lines</div>
            </div>
            
            <div className="glass-card p-3 sm:p-4 md:p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-metro-blue" />
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 leading-tight">95%</div>
              <div className="text-xs sm:text-sm md:text-base text-foreground/70 leading-tight">Accuracy</div>
            </div>
            
            <div className="glass-card p-3 sm:p-4 md:p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-metro-yellow" />
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 leading-tight">50K+</div>
              <div className="text-xs sm:text-sm md:text-base text-foreground/70 leading-tight">Active Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
