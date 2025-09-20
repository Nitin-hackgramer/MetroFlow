import React from 'react';
import { Calendar, CheckCircle, Clock, Star, Zap, Globe, Smartphone, Users } from 'lucide-react';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      phase: 'Q4 2024',
      title: 'Foundation & Launch',
      status: 'completed',
      icon: CheckCircle,
      items: [
        'AI-powered rush detection',
        'Basic route comparison',
        'Voice assistant integration',
        'Community reporting system',
        'iOS & Android apps launch'
      ]
    },
    {
      phase: 'Q1 2025',
      title: 'Enhanced Intelligence',
      status: 'in-progress',
      icon: Clock,
      items: [
        'Advanced seat predictions',
        'Multi-city expansion (5 new cities)',
        'Real-time crowd analytics',
        'Personalized recommendations',
        'Integration with transit APIs'
      ]
    },
    {
      phase: 'Q2 2025',
      title: 'Smart Features',
      status: 'planned',
      icon: Star,
      items: [
        'Predictive journey planning',
        'Smart notifications system',
        'Social features & commuter groups',
        'Weather impact predictions',
        'Accessibility route options'
      ]
    },
    {
      phase: 'Q3 2025',
      title: 'Global Expansion',
      status: 'planned',
      icon: Globe,
      items: [
        'International metro systems',
        'Multi-language AI assistant',
        'Cultural commuting preferences',
        'Regional transportation modes',
        'Global commuter insights'
      ]
    },
    {
      phase: 'Q4 2025',
      title: 'Future Innovation',
      status: 'planned',
      icon: Zap,
      items: [
        'AR navigation in stations',
        'IoT integration with smart cities',
        'Carbon footprint tracking',
        'AI-powered station amenity finder',
        'Autonomous vehicle integration'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success';
      case 'in-progress': return 'warning';
      case 'planned': return 'primary';
      default: return 'muted';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'in-progress': return Clock;
      default: return Star;
    }
  };

  return (
    <section className="py-20 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Product <span className="text-primary">Roadmap</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Our journey to revolutionize metro travel with cutting-edge AI technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-foreground/20"></div>

            <div className="space-y-12">
              {roadmapItems.map((item, index) => {
                const StatusIcon = getStatusIcon(item.status);
                const statusColor = getStatusColor(item.status);
                
                return (
                  <div
                    key={index}
                    className="relative blur-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-0 flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-full bg-${statusColor}/20 border-4 border-${statusColor}/30 flex items-center justify-center z-10`}>
                        <StatusIcon className={`w-8 h-8 text-${statusColor}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="ml-24">
                      <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`px-3 py-1 rounded-full bg-${statusColor}/10 text-${statusColor} text-sm font-medium`}>
                            {item.phase}
                          </div>
                          <div className={`px-3 py-1 rounded-full bg-${statusColor}/10 text-${statusColor} text-xs uppercase tracking-wide`}>
                            {item.status.replace('-', ' ')}
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-4">
                          {item.title}
                        </h3>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {item.items.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-${statusColor}`}></div>
                              <span className="text-foreground/80 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {item.status === 'in-progress' && (
                          <div className="mt-4 p-3 bg-warning/10 border border-warning/20 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Clock className="w-4 h-4 text-warning" />
                              <span className="text-sm font-medium text-warning">Currently in Development</span>
                            </div>
                            <div className="w-full bg-warning/20 rounded-full h-2">
                              <div className="bg-warning h-2 rounded-full transition-all duration-1000" style={{ width: '65%' }}></div>
                            </div>
                            <p className="text-xs text-foreground/60 mt-1">65% complete</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Community Input Section */}
          <div className="mt-16 glass-card p-8 text-center blur-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Shape Our Future</h3>
            </div>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Your feedback drives our roadmap. Join our community to suggest features, 
              vote on priorities, and help us build the future of metro travel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neuro-btn">
                Join Beta Program
              </button>
              <button className="glass-card px-6 py-3 hover:bg-glass-bg/20 transition-colors duration-300 flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Request Feature
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center blur-in">
              <div className="text-2xl font-bold text-primary mb-2">15+</div>
              <div className="text-foreground/70 text-sm">Cities Planned</div>
            </div>
            <div className="glass-card p-6 text-center blur-in">
              <div className="text-2xl font-bold text-primary mb-2">50+</div>
              <div className="text-foreground/70 text-sm">New Features</div>
            </div>
            <div className="glass-card p-6 text-center blur-in">
              <div className="text-2xl font-bold text-primary mb-2">100K+</div>
              <div className="text-foreground/70 text-sm">Expected Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;