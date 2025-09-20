import React, { useState } from 'react';
import { Clock, Users, Zap, Route, ArrowRight, CheckCircle } from 'lucide-react';

const RouteComparison = () => {
  const [selectedRoute, setSelectedRoute] = useState(0);

  const routeOptions = [
    {
      id: 0,
      name: 'Fastest Route',
      line: 'Blue → Green Transfer',
      duration: '24 min',
      comfort: 65,
      transfers: 1,
      walkTime: '3 min',
      crowdLevel: 'Medium',
      advantages: ['Shortest travel time', 'Single transfer', 'Good connectivity'],
      color: 'metro-blue'
    },
    {
      id: 1,
      name: 'Most Comfortable',
      line: 'Red Line Direct',
      duration: '31 min',
      comfort: 90,
      transfers: 0,
      walkTime: '5 min',
      crowdLevel: 'Low',
      advantages: ['No transfers required', 'Less crowded', 'Higher seat probability'],
      color: 'metro-red'
    },
    {
      id: 2,
      name: 'Balanced Option',
      line: 'Yellow → Blue Transfer',
      duration: '27 min',
      comfort: 75,
      transfers: 1,
      walkTime: '2 min',
      crowdLevel: 'Low-Medium',
      advantages: ['Good time vs comfort', 'Quick transfer', 'Reliable schedule'],
      color: 'metro-yellow'
    }
  ];

  const getComfortColor = (comfort: number) => {
    if (comfort >= 80) return 'text-success';
    if (comfort >= 60) return 'text-warning';
    return 'text-danger';
  };

  const getComfortBg = (comfort: number) => {
    if (comfort >= 80) return 'bg-success';
    if (comfort >= 60) return 'bg-warning';
    return 'bg-danger';
  };

  return (
    <section className="py-20 bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Smart Route <span className="text-primary">Comparison</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Choose between speed, comfort, or the perfect balance for your journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {routeOptions.map((route, index) => (
              <div
                key={route.id}
                onClick={() => setSelectedRoute(route.id)}
                className={`glass-card p-6 cursor-pointer transition-all duration-300 hover:scale-105 blur-in ${
                  selectedRoute === route.id 
                    ? 'ring-2 ring-primary/50 bg-primary/5' 
                    : 'hover:bg-glass-bg/10'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-${route.color}`}></div>
                    <h3 className="font-semibold text-foreground">{route.name}</h3>
                  </div>
                  {selectedRoute === route.id && (
                    <CheckCircle className="w-5 h-5 text-primary" />
                  )}
                </div>

                {/* Route Info */}
                <div className="mb-4">
                  <p className="text-sm text-foreground/60 mb-2">{route.line}</p>
                  <div className="text-2xl font-bold text-foreground mb-2">{route.duration}</div>
                </div>

                {/* Comfort Score */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground/80">Comfort Score</span>
                    <span className={`text-sm font-bold ${getComfortColor(route.comfort)}`}>
                      {route.comfort}/100
                    </span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ${getComfortBg(route.comfort)}/20`}
                      style={{ width: `${route.comfort}%` }}
                    ></div>
                  </div>
                </div>

                {/* Route Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Route className="w-4 h-4 text-foreground/60" />
                      <span className="text-foreground/80">Transfers</span>
                    </div>
                    <span className="text-foreground">{route.transfers}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-foreground/60" />
                      <span className="text-foreground/80">Walk time</span>
                    </div>
                    <span className="text-foreground">{route.walkTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-foreground/60" />
                      <span className="text-foreground/80">Crowd level</span>
                    </div>
                    <span className="text-foreground">{route.crowdLevel}</span>
                  </div>
                </div>

                {/* Advantages */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground/80">Key advantages:</h4>
                  <ul className="space-y-1">
                    {route.advantages.map((advantage, idx) => (
                      <li key={idx} className="text-xs text-foreground/70 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Route Action */}
          <div className="text-center mt-12">
            <div className="glass-card p-6 max-w-md mx-auto">
              <h3 className="font-semibold text-foreground mb-2">
                {routeOptions[selectedRoute].name} Selected
              </h3>
              <p className="text-sm text-foreground/70 mb-4">
                {routeOptions[selectedRoute].line} • {routeOptions[selectedRoute].duration}
              </p>
              <button className="neuro-btn w-full flex items-center justify-center gap-2">
                <span>Start Navigation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteComparison;