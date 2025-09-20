import React, { useState } from 'react';
import { Check, Zap, Crown, Sparkles, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Free',
      icon: Zap,
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for casual commuters',
      features: [
        'Basic rush level indicators',
        'Standard route suggestions',
        '3 daily voice queries',
        'Community rush reports',
        'Basic seat predictions'
      ],
      color: 'metro-green',
      popular: false
    },
    {
      name: 'Premium',
      icon: Crown,
      price: { monthly: 9.99, yearly: 99.99 },
      description: 'For daily metro users',
      features: [
        'Real-time crowd analytics',
        'AI-powered route optimization',
        'Unlimited voice assistant',
        'Advanced seat predictions',
        'Historical trend analysis',
        'Priority customer support',
        'Custom notifications',
        'Metro line comparisons'
      ],
      color: 'primary',
      popular: true
    },
    {
      name: 'Pro',
      icon: Sparkles,
      price: { monthly: 19.99, yearly: 199.99 },
      description: 'For power users & businesses',
      features: [
        'Everything in Premium',
        'Predictive journey planning',
        'Multi-city metro access',
        'API access for developers',
        'White-label solutions',
        'Advanced analytics dashboard',
        'Custom integrations',
        'Dedicated account manager'
      ],
      color: 'ai-glow',
      popular: false
    }
  ];

  const savings = Math.round(((plans[1].price.monthly * 12 - plans[1].price.yearly) / (plans[1].price.monthly * 12)) * 100);

  return (
    <section className="py-20 bg-muted/10" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Choose Your <span className="text-primary">MetroFlow</span> Plan
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            Upgrade your commute with AI-powered insights and real-time intelligence
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center glass-card p-2 mb-8">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                !isYearly 
                  ? 'bg-primary/20 text-primary font-medium' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 relative ${
                isYearly 
                  ? 'bg-primary/20 text-primary font-medium' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-success text-background text-xs px-2 py-0.5 rounded-full">
                Save {savings}%
              </span>
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`glass-card p-8 hover:scale-105 transition-all duration-300 blur-in relative ${
                plan.popular 
                  ? 'ring-2 ring-primary/50 bg-primary/5' 
                  : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-full bg-${plan.color}/20 flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className={`w-8 h-8 text-${plan.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-foreground/70 text-sm">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-foreground/60">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  )}
                </div>
                {isYearly && plan.price.monthly > 0 && (
                  <p className="text-sm text-success mt-1">
                    Save ${(plan.price.monthly * 12 - plan.price.yearly).toFixed(2)} per year
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button 
                className={`w-full neuro-btn flex items-center justify-center gap-2 ${
                  plan.popular ? 'ring-2 ring-primary/30' : ''
                }`}
              >
                <span>
                  {plan.name === 'Free' ? 'Get Started' : `Choose ${plan.name}`}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {plan.name === 'Free' && (
                <p className="text-center text-xs text-foreground/60 mt-3">
                  No credit card required
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-foreground/70 mb-6">
              Enterprise plans available for transit authorities, large corporations, 
              and organizations with specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neuro-btn">
                Contact Sales
              </button>
              <button className="glass-card px-6 py-3 hover:bg-glass-bg/20 transition-colors duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;