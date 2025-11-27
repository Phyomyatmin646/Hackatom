import React from 'react';
import { Leaf, Zap, Shield, TrendingUp, Droplets, Atom } from 'lucide-react';

const Mutation = () => {
  const features = [
    {
      icon: Atom,
      title: "Advanced Transmutation",
      desc: "Utilizing innovative nuclear processes to convert agricultural waste into valuable resources",
      color: "text-blue-600"
    },
    {
      icon: Leaf,
      title: "Biosolid Conversion",
      desc: "Transform organic waste into nutrient-rich biosolids for soil enhancement",
      color: "text-green-600"
    },
    {
      icon: Droplets,
      title: "Waste Water Treatment",
      desc: "Advanced purification systems for agricultural runoff and processing water",
      color: "text-cyan-600"
    },
    {
      icon: TrendingUp,
      title: "Resource Recovery",
      desc: "Extract valuable minerals and organic compounds from waste streams",
      color: "text-orange-600"
    },
    {
      icon: Shield,
      title: "Safety Standards",
      desc: "Full compliance with international environmental and health protocols",
      color: "text-purple-600"
    },
    {
      icon: Zap,
      title: "Energy Generation",
      desc: "Convert waste-to-energy through biogas and thermal processes",
      color: "text-yellow-600"
    }
  ];

  const benefits = [
    {
      metric: "95%",
      label: "Waste Reduction",
      description: "Convert up to 95% of agricultural waste into useful products"
    },
    {
      metric: "50MW",
      label: "Energy Recovery",
      description: "Generate renewable energy from waste processing"
    },
    {
      metric: "Zero",
      label: "Landfill Impact",
      description: "Eliminate waste going to landfills through circular economy"
    },
    {
      metric: "3x",
      label: "ROI",
      description: "Triple return on investment through resource recovery"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-purple-900 via-indigo-800 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <Atom className="w-12 h-12 text-purple-300" />
              <span className="text-purple-300 font-bold uppercase tracking-wider text-sm">
                Advanced Waste Solutions
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Waste Mutation &<br />
              <span className="text-purple-300">Resource Transformation</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl mb-8">
              Revolutionary waste-to-value technology converting agricultural and industrial waste streams into renewable energy, 
              biosolids, and valuable chemical compounds through advanced mutation processes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-flex items-center justify-center gap-3 bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 shadow-xl">
                Request Assessment
              </a>
              <a href="/contact" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-purple-900 text-white font-bold py-4 px-8 rounded-lg transition">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Mutation Technology Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six core technologies working in harmony to maximize waste conversion and resource recovery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {features.map((item, i) => (
              <div key={i} className="group bg-linear-to-b from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl hover:border-purple-300 transition-all duration-300">
                <div className="inline-flex p-4 bg-gray-100 rounded-2xl mb-6 group-hover:bg-purple-100 transition">
                  <item.icon className={`w-12 h-12 ${item.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 bg-linear-to-r from-purple-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Performance Metrics
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Industry-leading results in waste conversion and resource recovery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            {benefits.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl lg:text-6xl font-extrabold text-purple-300 mb-4">
                  {item.metric}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.label}</h3>
                <p className="text-purple-100 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Mutation Process Flow
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Waste Intake & Analysis",
                desc: "Comprehensive characterization of incoming waste streams with real-time monitoring"
              },
              {
                step: "02",
                title: "Pre-treatment & Sorting",
                desc: "Advanced separation and preparation using AI-driven sorting systems"
              },
              {
                step: "03",
                title: "Mutation Processing",
                desc: "Core transmutation process converting organic compounds into valuable products"
              },
              {
                step: "04",
                title: "Resource Extraction",
                desc: "Recovery of biosolids, chemicals, and energy through multi-stage extraction"
              },
              {
                step: "05",
                title: "Quality Assurance",
                desc: "Rigorous testing and certification of all output materials"
              },
              {
                step: "06",
                title: "Distribution & Use",
                desc: "Delivery of recovered resources to agriculture, energy, and industrial sectors"
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start pb-8 border-b border-gray-200 last:border-0">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-purple-500 text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-purple-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Waste?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with us to implement advanced mutation technology and turn waste into valuable resources
          </p>
          <a href="/contact" className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-purple-900 font-bold py-4 px-10 rounded-lg transition transform hover:scale-105 shadow-xl">
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Mutation;
