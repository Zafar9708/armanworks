import React from 'react';

const features = [
  {
    icon: '⚙️',
    title: 'Precision Engineering',
    description: 'State-of-the-art CNC machinery with 99.9% accuracy rate',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    stats: '±0.01mm'
  },
  {
    icon: '💡',
    title: 'Innovation Hub',
    description: 'R&D center with 25+ active patents and innovations',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    stats: '25+ Patents'
  },
  {
    icon: '🔧',
    title: '24/7 Support',
    description: 'Round-the-clock technical assistance and maintenance',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    stats: '24/7 Available'
  },
  {
    icon: '🌍',
    title: 'Global Standards',
    description: 'ISO 9001:2015 certified with international quality standards',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    stats: 'ISO Certified'
  },
  {
    icon: '📊',
    title: 'Smart Solutions',
    description: 'IoT-enabled monitoring and predictive maintenance',
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-50',
    stats: 'Real-time'
  },
  {
    icon: '🤝',
    title: 'Partnership',
    description: 'Long-term relationships with Fortune 500 companies',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    stats: '50+ Partners'
  }
];

const Features = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Arman Engineering?
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            We combine technical expertise with industry experience to deliver exceptional results
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{feature.icon}</span>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Stats/Tag */}
              <div className={`inline-block px-3 py-1 ${feature.bgColor} rounded-full text-sm font-semibold bg-opacity-50`}>
                {feature.stats}
              </div>
              
              {/* Animated border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Engineers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;