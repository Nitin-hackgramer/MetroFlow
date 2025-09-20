import React, { useState } from 'react';
import { Mic, MicOff, Volume2, MessageCircle, Sparkles, Play } from 'lucide-react';

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [currentQuery, setCurrentQuery] = useState('');

  const sampleQueries = [
    "Is Blue Line crowded right now?",
    "Best route to Downtown with seats?",
    "When is the next train at Central?",
    "Show me least crowded metro lines"
  ];

  const [selectedQuery, setSelectedQuery] = useState(0);

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setCurrentQuery(sampleQueries[selectedQuery]);
      setTimeout(() => {
        setIsListening(false);
        setSelectedQuery((prev) => (prev + 1) % sampleQueries.length);
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-background/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            AI Voice <span className="text-primary">Assistant</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Ask MetroAI anything about your journey - get instant, personalized responses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Voice Interface */}
            <div className="glass-card p-8 text-center blur-in">
              <div className="mb-8">
                <div className="relative inline-block">
                  {/* AI Glow Effect */}
                  <div className={`absolute inset-0 rounded-full ai-glow blur-xl ${
                    isListening ? 'animate-pulse' : ''
                  }`}></div>
                  
                  {/* Main Voice Button */}
                  <button
                    onClick={handleVoiceToggle}
                    className={`relative w-24 h-24 rounded-full transition-all duration-300 hover:scale-110 ${
                      isListening 
                        ? 'bg-primary/20 border-2 border-primary animate-pulse' 
                        : 'neuro-btn'
                    }`}
                  >
                    {isListening ? (
                      <MicOff className="w-10 h-10 text-primary mx-auto" />
                    ) : (
                      <Mic className="w-10 h-10 text-primary-foreground mx-auto" />
                    )}
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {isListening ? 'Listening...' : 'Tap to Ask MetroAI'}
              </h3>
              
              {currentQuery && (
                <div className="glass-card p-4 mb-6 animate-fade-in-up">
                  <p className="text-foreground/80 italic">"{currentQuery}"</p>
                </div>
              )}

              {isListening && (
                <div className="flex justify-center space-x-1 mb-4">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-1 bg-primary rounded-full animate-pulse"
                      style={{
                        height: '20px',
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '1s'
                      }}
                    ></div>
                  ))}
                </div>
              )}

              <p className="text-sm text-foreground/60">
                {isListening 
                  ? 'Processing your voice command...' 
                  : 'Ask about routes, crowds, timing, or seat availability'
                }
              </p>
            </div>

            {/* Sample Queries & Responses */}
            <div className="space-y-6 blur-in">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Try These Voice Commands
              </h3>

              <div className="space-y-4">
                {sampleQueries.map((query, index) => (
                  <div
                    key={index}
                    className={`glass-card p-4 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedQuery === index ? 'ring-2 ring-primary/50' : ''
                    }`}
                    onClick={() => setSelectedQuery(index)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">"{query}"</span>
                    </div>
                    
                    <div className="ml-8 space-y-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-ai-glow" />
                        <span className="text-sm text-foreground/80">
                          {index === 0 && "Blue Line has medium congestion (65%). Red Line is less crowded (30%)."}
                          {index === 1 && "Take Red Line direct route - 90% seat probability, 31 minutes."}
                          {index === 2 && "Next Blue Line train in 4 minutes, followed by 7-minute intervals."}
                          {index === 3 && "Red and Yellow lines currently have lowest crowd levels."}
                        </span>
                      </div>
                      
                      <button className="flex items-center gap-2 text-xs text-primary hover:text-primary-glow transition-colors">
                        <Play className="w-3 h-3" />
                        Play response
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Voice Features */}
              <div className="glass-card p-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-primary" />
                  Voice Features
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span className="text-foreground/80">Multi-language support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span className="text-foreground/80">Hands-free operation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span className="text-foreground/80">Context awareness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span className="text-foreground/80">Real-time responses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAssistant;