import React, { useState } from 'react';
import { AlertCircle, Users, Star, Trophy, Plus, TrendingUp } from 'lucide-react';

const GamifiedInput = () => {
  const [points, setPoints] = useState(1247);
  const [level, setLevel] = useState(8);
  const [selectedCrowdLevel, setSelectedCrowdLevel] = useState<string | null>(null);

  const handleReportRush = (crowdLevel: string) => {
    setSelectedCrowdLevel(crowdLevel);
    setPoints(prev => prev + 10);
    // Reset selection after animation
    setTimeout(() => setSelectedCrowdLevel(null), 1000);
  };

  const crowdLevels = [
    { id: 'low', label: 'Low Rush', color: 'success', icon: Users, points: 10 },
    { id: 'medium', label: 'Medium Rush', color: 'warning', icon: Users, points: 15 },
    { id: 'high', label: 'High Rush', color: 'danger', icon: Users, points: 20 },
  ];

  const achievements = [
    { name: 'Rush Reporter', description: 'Reported 50 rush levels', completed: true },
    { name: 'Community Helper', description: 'Help 100 commuters', completed: true },
    { name: 'Data Champion', description: 'Accurate predictions 30 days', completed: false },
  ];

  return (
    <section className="py-20 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Community-Driven <span className="text-primary">Intelligence</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Earn MetroPoints by contributing real-time data and helping fellow commuters
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Report Rush Section */}
          <div className="glass-card p-8 blur-in">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Report Current Rush</h3>
              <p className="text-foreground/70">Help others by sharing real-time crowd levels</p>
            </div>

            <div className="space-y-4">
              {crowdLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => handleReportRush(level.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    selectedCrowdLevel === level.id
                      ? `border-${level.color} bg-${level.color}/10 animate-pulse`
                      : `border-${level.color}/30 hover:border-${level.color}/50 hover:bg-${level.color}/5`
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <level.icon className={`w-6 h-6 text-${level.color}`} />
                      <span className="font-medium text-foreground">{level.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Plus className="w-4 h-4 text-primary" />
                      <span className="text-primary font-bold">{level.points} pts</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-xl">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-success" />
                <span className="text-sm font-medium text-success">Accuracy Bonus Available</span>
              </div>
              <p className="text-xs text-foreground/70 mt-1">
                +5 bonus points for reports that match AI predictions
              </p>
            </div>
          </div>

          {/* Points & Achievements */}
          <div className="space-y-6">
            {/* Points Display */}
            <div className="glass-card p-6 blur-in">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Trophy className="w-6 h-6 text-warning" />
                  <span className="text-sm font-medium text-foreground/80">Level {level}</span>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {points.toLocaleString()}
                </div>
                <p className="text-foreground/70 text-sm">MetroPoints</p>
                
                {/* Progress to next level */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-foreground/60 mb-1">
                    <span>Level {level}</span>
                    <span>Level {level + 1}</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-primary/50 transition-all duration-1000"
                      style={{ width: '73%' }}
                    ></div>
                  </div>
                  <p className="text-xs text-foreground/60 mt-1">253 points to next level</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="glass-card p-6 blur-in">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Recent Achievements
              </h4>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      achievement.completed 
                        ? 'bg-success/10 border border-success/20' 
                        : 'bg-muted/20 border border-muted/30'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.completed ? 'bg-success/20' : 'bg-muted/30'
                    }`}>
                      <Star className={`w-4 h-4 ${
                        achievement.completed ? 'text-success' : 'text-foreground/40'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h5 className={`text-sm font-medium ${
                        achievement.completed ? 'text-foreground' : 'text-foreground/60'
                      }`}>
                        {achievement.name}
                      </h5>
                      <p className="text-xs text-foreground/60">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leaderboard Preview */}
            <div className="glass-card p-6 blur-in">
              <h4 className="font-semibold text-foreground mb-4">This Week's Top Contributors</h4>
              <div className="space-y-2">
                {[
                  { rank: 1, name: 'MetroMaster', points: 2847 },
                  { rank: 2, name: 'RushReporter', points: 2156 },
                  { rank: 3, name: 'You', points: points, isUser: true },
                ].map((user) => (
                  <div 
                    key={user.rank}
                    className={`flex items-center justify-between p-2 rounded-lg ${
                      user.isUser ? 'bg-primary/10 border border-primary/20' : 'bg-muted/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-bold ${
                        user.rank === 1 ? 'text-warning' : 
                        user.rank === 2 ? 'text-foreground/70' : 
                        user.rank === 3 ? 'text-warning/70' : 'text-foreground'
                      }`}>
                        #{user.rank}
                      </span>
                      <span className={`text-sm ${user.isUser ? 'font-medium' : ''}`}>
                        {user.name}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-foreground/80">
                      {user.points.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamifiedInput;