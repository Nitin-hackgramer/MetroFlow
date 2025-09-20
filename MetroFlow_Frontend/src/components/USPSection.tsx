import React from 'react';
import { Shield, Brain, Users, Clock, Lock, Zap, TrendingUp, Globe } from 'lucide-react';

const USPSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your location and journey data stays private. End-to-end encryption ensures your commute patterns remain confidential.',
      color: 'success',
      stats: '100% Encrypted'
    },
    {
      icon: Brain,
      title: 'AI-Powered Predictions',
      description: 'Machine learning algorithms analyze patterns from millions of journeys to provide accurate crowd and timing predictions.',
      color: 'primary',
      stats: '95% Accuracy'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Real-time reports from thousands of commuters create the most accurate, up-to-date metro intelligence network.',
      color: 'warning',
      stats: '50K+ Contributors'
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Live data every 30 seconds'
    },
    {
      icon: Zap,
      title: 'Instant Responses',
      description: 'AI answers in under 2 seconds'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast trends up to 2 hours ahead'
    },
    {
      icon: Globe,
      title: 'Multi-city Support',
      description: 'Works across 12+ metro systems'
    }
  ];

  return (
    <section className="py-20 bg-background/80" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Why Choose <span className="text-primary">MetroFlow</span>?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            The most advanced metro intelligence platform built for modern commuters
          </p>
        </div>

        {/* Main USPs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:scale-105 transition-all duration-300 blur-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className={`w-20 h-20 rounded-full bg-${feature.color}/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-10 h-10 text-${feature.color}`} />
                </div>
                <div className={`inline-block px-3 py-1 rounded-full bg-${feature.color}/10 text-${feature.color} text-sm font-medium mb-4`}>
                  {feature.stats}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-foreground/70 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 blur-in text-center"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <advantage.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{advantage.title}</h4>
              <p className="text-sm text-foreground/70">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="glass-card p-8 blur-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">99.9%</div>
              <div className="text-foreground/70">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">2M+</div>
              <div className="text-foreground/70">Daily Predictions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">4.9★</div>
              <div className="text-foreground/70">User Rating</div>
            </div>
          </div>
        </div>

        {/* Security & Privacy Details */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-8 blur-in">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-success" />
              <h3 className="text-xl font-semibold text-foreground">Data Security</h3>
            </div>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                End-to-end encryption for all user data
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                GDPR compliant data handling
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                Anonymous usage analytics only
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                No location tracking when app is closed
              </li>
            </ul>
          </div>

          <div className="glass-card p-8 blur-in">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">AI Technology</h3>
            </div>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Advanced neural networks for pattern recognition
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Real-time learning from community feedback
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Predictive modeling with 95% accuracy
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Multi-language natural language processing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;