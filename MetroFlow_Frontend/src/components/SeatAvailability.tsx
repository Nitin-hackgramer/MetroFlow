import React, { useState, useEffect } from 'react';
import { Armchair, MapPin, Clock, TrendingUp } from 'lucide-react';

const SeatAvailability = () => {
  const [selectedRoute, setSelectedRoute] = useState(0);
  const [animationProgress, setAnimationProgress] = useState(0);

  const routes = [
    {
      name: 'Vaishali → Noida Sector 62',
      line: 'Blue Line',
      stations: [
        { name: 'Vaishali', seatProbability: 85, time: '0 min', current: true },
        { name: 'Yamuna Bank', seatProbability: 70, time: '3 min', current: false },
        { name: 'Mayur Vihar', seatProbability: 45, time: '6 min', current: false },
        { name: 'Noida Sector 62', seatProbability: 25, time: '9 min', current: false },
      ],
      color: 'metro-blue'
    },
    {
      name: 'Harvard → MIT',
      line: 'Red Line',
      stations: [
        { name: 'Harvard', seatProbability: 90, time: '0 min', current: true },
        { name: 'Porter', seatProbability: 75, time: '4 min', current: false },
        { name: 'Davis', seatProbability: 60, time: '7 min', current: false },
        { name: 'Kendall/MIT', seatProbability: 30, time: '12 min', current: false },
      ],
      color: 'metro-red'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationProgress(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const getSeatColor = (probability: number) => {
    if (probability >= 70) return 'text-success';
    if (probability >= 40) return 'text-warning';
    return 'text-danger';
  };

  const getSeatBgColor = (probability: number) => {
    if (probability >= 70) return 'bg-success/20';
    if (probability >= 40) return 'bg-warning/20';
    return 'bg-danger/20';
  };

  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Seat Availability <span className="text-primary">Prediction</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            AI-powered seat probability forecasts for your entire journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Route Selector */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            {routes.map((route, index) => (
              <button
                key={index}
                onClick={() => setSelectedRoute(index)}
                className={`glass-card p-4 text-left transition-all duration-300 hover:scale-105 ${
                  selectedRoute === index ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-${route.color}`}></div>
                  <div>
                    <h3 className="font-semibold text-foreground">{route.name}</h3>
                    <p className="text-sm text-foreground/60">{route.line}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Journey Timeline */}
          <div className="glass-card p-8 blur-in">
            <div className="space-y-6">
              {routes[selectedRoute].stations.map((station, index) => (
                <div key={index} className="flex items-center gap-6">
                  {/* Station Indicator */}
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      station.current 
                        ? `bg-${routes[selectedRoute].color} border-${routes[selectedRoute].color}` 
                        : 'border-foreground/30'
                    }`}></div>
                    {index < routes[selectedRoute].stations.length - 1 && (
                      <div className="w-0.5 h-12 bg-foreground/20 mt-2"></div>
                    )}
                  </div>

                  {/* Station Info */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-foreground/60" />
                      <span className="font-medium text-foreground">{station.name}</span>
                      {station.current && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-foreground/60" />
                      <span className="text-foreground/80">{station.time}</span>
                    </div>

                    {/* Seat Probability */}
                    <div className="flex items-center gap-3">
                      <Armchair className={`w-5 h-5 ${getSeatColor(station.seatProbability)}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-foreground/80">Seat chance</span>
                          <span className={`text-sm font-bold ${getSeatColor(station.seatProbability)}`}>
                            {station.seatProbability}%
                          </span>
                        </div>
                        <div className="w-full bg-muted/30 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ${getSeatBgColor(station.seatProbability)}`}
                            style={{ width: `${station.seatProbability}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Trend Indicator */}
                    <div className="flex justify-end">
                      {index > 0 && (
                        <div className={`flex items-center gap-1 ${
                          station.seatProbability < routes[selectedRoute].stations[index - 1].seatProbability
                            ? 'text-danger' : 'text-success'
                        }`}>
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-xs">
                            {Math.abs(station.seatProbability - routes[selectedRoute].stations[index - 1].seatProbability)}%
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Best Time Recommendation */}
            <div className="mt-8 p-4 bg-success/10 border border-success/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-success" />
                <span className="font-semibold text-success">AI Recommendation</span>
              </div>
              <p className="text-foreground/80">
                Best seat availability if you depart in <strong>12 minutes</strong> - 
                seat probability increases to <strong>95%</strong> at Central station.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeatAvailability;