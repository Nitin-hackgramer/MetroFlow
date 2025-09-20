import React from 'react';
import { Train, TrendingUp, TrendingDown, Minus, Clock, Users } from 'lucide-react';

const LiveRushIndicator = () => {
  const rushData = [
    {
      line: 'Green Line',
      status: 'low',
      percentage: 25,
      trend: 'down',
      stations: ['Central', 'Park St', 'Boylston'],
      waitTime: '2-3 min',
      icon: Train,
      color: 'metro-green'
    },
    {
      line: 'Blue Line',
      status: 'medium',
      percentage: 65,
      trend: 'up',
      stations: ['Vaishali', 'Mayur Vihar', 'Noida sector 16'],
      waitTime: '4-6 min',
      icon: Train,
      color: 'metro-blue'
    },
    {
      line: 'Red Line',
      status: 'high',
      percentage: 90,
      trend: 'stable',
      stations: ['Kashmeri Gate', 'Welcome', 'Shaheed Sthal'],
      waitTime: '8-12 min',
      icon: Train,
      color: 'metro-red'
    },
    {
      line: 'Yellow Line',
      status: 'medium',
      percentage: 55,
      trend: 'down',
      stations: ['Rajeev Chowk', 'AIIMS', 'VishwaVidyalaye'],
      waitTime: '3-5 min',
      icon: Train,
      color: 'metro-yellow'
    }
  ];

  const getRushClass = (status: string) => {
    switch (status) {
      case 'low': return 'rush-green';
      case 'medium': return 'rush-yellow';
      case 'high': return 'rush-red';
      default: return 'rush-green';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return TrendingUp;
      case 'down': return TrendingDown;
      default: return Minus;
    }
  };

  return (
    <section className="py-20 bg-background/50" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Live Rush <span className="text-primary">Monitoring</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Real-time crowd levels across all metro lines with AI-powered predictions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {rushData.map((line, index) => {
            const TrendIcon = getTrendIcon(line.trend);
            return (
              <div 
                key={line.line}
                className={`glass-card p-6 hover:scale-105 transition-all duration-300 blur-in ${getRushClass(line.status)} group cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-${line.color}/20 flex items-center justify-center`}>
                      <line.icon className={`w-6 h-6 text-${line.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{line.line}</h3>
                      <p className="text-sm text-foreground/60 capitalize">{line.status} congestion</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendIcon className={`w-5 h-5 ${
                      line.trend === 'up' ? 'text-danger' : 
                      line.trend === 'down' ? 'text-success' : 'text-foreground/60'
                    }`} />
                    <span className="text-2xl font-bold text-foreground">{line.percentage}%</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-${line.color} rounded-full transition-all duration-1000 ease-out group-hover:opacity-80`}
                      style={{ width: `${line.percentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Station Info */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-foreground/60" />
                    <span className="text-foreground/80">
                      Busy stations: {line.stations.join(', ')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-foreground/60" />
                    <span className="text-foreground/80">Wait: {line.waitTime}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Update Indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
            <span className="text-sm text-foreground/80">Live updates every 30 seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveRushIndicator;