import React from 'react';

// Define types for feature tags
type FeatureTag = 'Build & integrate' | 'Deploy & collaborate' | 'Run & scale';

// Interface for individual feature
interface Feature {
  tag: FeatureTag;
  title: string;
  description: string;
}

// Type for tag styling
interface TagStyle {
  backgroundColor: string;
  color: string;
}

// Props interface for FeatureCard component
interface FeatureCardProps extends Feature {
  className?: string;
}

// Get tag styling based on tag type
const getTagStyle = (tag: FeatureTag): TagStyle => {
  switch (tag) {
    case 'Build & integrate':
      return {
        backgroundColor: 'rgb(224, 242, 241)',
        color: 'rgb(0, 150, 136)'
      };
    case 'Deploy & collaborate':
      return {
        backgroundColor: 'rgb(232, 240, 254)',
        color: 'rgb(66, 133, 244)'
      };
    case 'Run & scale':
      return {
        backgroundColor: 'rgb(255, 248, 225)',
        color: 'rgb(251, 140, 0)'
      };
  }
};

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  tag, 
  title, 
  description, 
  className = '' 
}) => {
  const tagStyle = getTagStyle(tag);

  return (
    <div className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <span 
        className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-6"
        style={tagStyle}
      >
        {tag}
      </span>
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  const features: Feature[] = [
    {
      tag: 'Build & integrate',
      title: 'Experiment faster',
      description: 'Build any frontend app with your favorite stack and more flexible serverless infrastructure than anywhere else - from edge functions to background jobs.'
    },
    {
      tag: 'Deploy & collaborate',
      title: 'Iterate together',
      description: 'Turn every Git push into a production-ready release. Get instant deploy previews and keep your team in sync without managing configs, variables, or staging servers.'
    },
    {
      tag: 'Run & scale',
      title: 'Scale automatically',
      description: 'Deliver sub-second experiences globally with granular cache and routing controls. Go from zero to enterprise-level traffic with built-in security.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          One platform. All your sites, stores, & apps.
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          A developer experience that just works—optimized builds, collaborative previews, and instant 
          rollbacks on a global edge network. Focus on your users and code while we handle the rest.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index} 
            {...feature} 
          />
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors"
        >
          Explore the platform
        </button>
      </div>
    </div>
  );
};

export default About;