import React from 'react';
import { Sprout, Shield, TrendingUp, Droplets, Mountain, Zap } from 'lucide-react';

const SoilErosion = () => {
  const solutions = [
    {
      icon: Sprout,
      title: "Vegetation Management",
      desc: "Strategic planting and native species restoration to stabilize soil and prevent erosion",
      color: "text-green-600"
    },
    {
      icon: Mountain,
      title: "Terracing & Contouring",
      desc: "Advanced soil engineering techniques to reduce water runoff and surface erosion",
      color: "text-amber-600"
    },
    {
      icon: Droplets,
      title: "Water Retention Systems",
      desc: "Smart irrigation and moisture management for improved soil stability",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Soil Binding Technology",
      desc: "Organic and biotech solutions to strengthen soil structure and cohesion",
      color: "text-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "Productivity Enhancement",
      desc: "Increase crop yields while simultaneously preventing soil degradation",
      color: "text-orange-600"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      desc: "IoT sensors and AI analytics to track soil health and erosion patterns",
      color: "text-yellow-600"
    }
  ];

  const statistics = [
    {
      metric: "80%",
      label: "Erosion Reduction",
      description: "Prevent up to 80% of soil loss through integrated management"
    },
    {
      metric: "40%",
      label: "Yield Increase",
      description: "Improve agricultural productivity while protecting soil"
    },
    {
      metric: "25 Years",
      label: "Soil Lifespan",
      description: "Extend productive soil lifetime by 25+ years"
    },
    {
      metric: "100%",
      label: "Carbon Positive",
      description: "All practices contribute to carbon sequestration"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-green-900 via-emerald-800 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <Mountain className="w-12 h-12 text-green-300" />
              <span className="text-green-300 font-bold uppercase tracking-wider text-sm">
                Soil Conservation
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Soil Erosion Prevention &<br />
              <span className="text-green-300">Land Restoration</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl mb-8">
              Comprehensive soil conservation strategy protecting agricultural assets while enhancing productivity through 
              sustainable erosion management and land restoration technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 shadow-xl">
                Get Soil Assessment
              </a>
              <a href="/contact" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-green-900 text-white font-bold py-4 px-8 rounded-lg transition">
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Six-Pillar Erosion Control System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated approach combining nature-based solutions with advanced technology for maximum soil protection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {solutions.map((item, i) => (
              <div key={i} className="group bg-linear-to-b from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl hover:border-green-300 transition-all duration-300">
                <div className="inline-flex p-4 bg-gray-100 rounded-2xl mb-6 group-hover:bg-green-100 transition">
                  <item.icon className={`w-12 h-12 ${item.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 bg-linear-to-r from-green-800 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Proven Impact
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Measurable results protecting soil and enhancing agricultural sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            {statistics.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl lg:text-6xl font-extrabold text-green-300 mb-4">
                  {item.metric}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.label}</h3>
                <p className="text-green-100 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Integrated Technology Stack
          </h2>

          <div className="space-y-8">
            {[
              {
                phase: "Assessment",
                items: [
                  "Soil composition analysis",
                  "Erosion rate mapping",
                  "Hydrological modeling",
                  "Climate impact assessment"
                ]
              },
              {
                phase: "Prevention",
                items: [
                  "Vegetative barriers",
                  "Contour farming design",
                  "Cover crop implementation",
                  "Mulching strategies"
                ]
              },
              {
                phase: "Restoration",
                items: [
                  "Biological soil enhancement",
                  "Organic matter incorporation",
                  "Microbial inoculation",
                  "Structural stabilization"
                ]
              },
              {
                phase: "Monitoring",
                items: [
                  "Real-time soil sensors",
                  "Satellite imagery tracking",
                  "AI-powered analytics",
                  "Predictive modeling"
                ]
              }
            ].map((phase, i) => (
              <div key={i} className="bg-linear-to-r from-gray-50 to-white rounded-2xl p-10 border border-gray-200 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center h-10 w-10 rounded-full bg-green-500 text-white font-bold">
                    {i + 1}
                  </span>
                  {phase.phase}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {phase.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-green-700 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Land for Future Generations</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Implement proven soil erosion management and land restoration strategies backed by decades of agricultural science
          </p>
          <a href="/contact" className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-green-900 font-bold py-4 px-10 rounded-lg transition transform hover:scale-105 shadow-xl">
            Schedule Site Assessment
          </a>
        </div>
      </section>
    </div>
  );
};

export default SoilErosion;
