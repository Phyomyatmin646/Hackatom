import React from 'react';
import { Leaf, Zap, Shield, TrendingUp, Droplets, Atom, Sprout } from 'lucide-react';

const Mutation = () => {
  const features = [
    {
      icon: Atom,
      title: "Radiation-Induced Mutation",
      desc: "Controlled use of gamma rays and ion beams to create beneficial genetic variations in plants and animals",
      color: "text-blue-600"
    },
    {
      icon: Leaf,
      title: "Crop Improvement",
      desc: "Enhanced yield, disease resistance, climate tolerance, and nutritional quality through mutation breeding",
      color: "text-green-600"
    },
    {
      icon: Sprout,
      title: "Livestock Enhancement",
      desc: "Improvement of growth rate, fertility, and disease resistance in animals using safe nuclear techniques",
      color: "text-lime-600"
    },
    {
      icon: Droplets,
      title: "Stress Tolerance",
      desc: "Development of drought, flood, and salinity-resistant crop varieties",
      color: "text-cyan-600"
    },
    {
      icon: Shield,
      title: "Safety & Regulation",
      desc: "Strict compliance with IAEA and international biosafety standards for radiation use",
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Agricultural Productivity",
      desc: "Higher yields and faster breeding cycles compared to conventional methods",
      color: "text-orange-600"
    }
  ];

  const benefits = [
    {
      metric: "3000+",
      label: "Mutant Varieties",
      description: "More than 3000 officially released mutant crop varieties worldwide"
    },
    {
      metric: "40%",
      label: "Yield Increase",
      description: "Average production improvement in mutation-bred crops"
    },
    {
      metric: "Zero",
      label: "GM DNA Transfer",
      description: "No foreign genes are introduced in mutation breeding"
    },
    {
      metric: "2–3x",
      label: "Faster Breeding",
      description: "Compared to traditional cross-breeding methods"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
     {/* Hero Section */}
<section className="relative bg-linear-to-br from-green-900 via-emerald-800 to-teal-800 text-white overflow-hidden">
  <div className="absolute inset-0 bg-black opacity-30"></div>
        
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

    {/* Text Content */}
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Atom className="w-8 h-8 sm:w-12 sm:h-12 text-green-300" />
        <span className="text-green-300 font-bold uppercase tracking-wider text-xs sm:text-sm">
          Nuclear Agriculture Technology
        </span>
      </div>
            
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
        Nuclear Mutation Breeding<br />
        <span className="text-green-300">For Plants & Animals</span>
      </h1>
            
      <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed max-w-2xl mb-6 sm:mb-8">
        Advanced nuclear techniques using controlled radiation to create stronger, higher-yield, 
        and climate-resilient crops and healthier livestock without genetic modification.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a href="/contact" className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 text-sm sm:text-base rounded-lg transition transform hover:scale-105 shadow-xl">
          Research Collaboration
        </a>
        <a href="/contact" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-green-900 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 text-sm sm:text-base rounded-lg transition">
          Learn More
        </a>
      </div>
    </div>

    {/* Image Content */}
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <img 
          src="https://www.iaea.org/sites/default/files/styles/landscape_medium/public/2025-09/plantmutationbreedingnuclearexplained.png.webp?itok=CBKidQjv" 
          alt="Gamma irradiation of plant seeds"
          className="rounded-2xl shadow-2xl object-cover h-56 w-full"
        />
        <img 
          src="https://www.iaea.org/sites/default/files/indonesias_national_nuclear_energy_agency_batan_use_irradiation_plant_breeding.jpg" 
          alt="Mutation-bred crops in field trials"
          className="rounded-2xl shadow-2xl object-cover h-56 w-full"
        />
        <img 
          src="https://media.4-paws.org/1/a/b/4/1ab49d54b09acebe4faf0d95225ebe1c7e98463d/Chickens_Scandinavia_JMcArthur_2017-4134-2882x1996-1920x1330.jpg" 
          alt="Nuclear agriculture research laboratory"
          className="rounded-2xl shadow-2xl object-cover h-56 w-full col-span-2"
        />
      </div>
    </div>

  </div>
</section>


      {/* Key Features Grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mutation Breeding Technology Platform
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Nuclear science applied safely to improve agriculture and food security
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {features.map((item, i) => (
              <div key={i} className="group bg-linear-to-b from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:shadow-2xl hover:border-green-400 transition-all duration-300">
                <div className="inline-flex p-3 sm:p-4 bg-gray-100 rounded-2xl mb-4 sm:mb-6 group-hover:bg-green-100 transition">
                  <item.icon className={`w-8 h-8 sm:w-12 sm:h-12 ${item.color}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-12 sm:py-16 lg:py-24 bg-linear-to-r from-green-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Proven Global Impact
            </h2>
            <p className="text-base sm:text-lg text-green-100 max-w-3xl mx-auto">
              Decades of successful application in agriculture and livestock development
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {benefits.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-300 mb-2 sm:mb-4">
                  {item.metric}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.label}</h3>
                <p className="text-sm sm:text-base text-green-100 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 sm:mb-16 text-center">
            Nuclear Mutation Breeding Process
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Selection of Seeds & Specimens",
                desc: "High-quality plant seeds and animal specimens are selected for mutation treatment"
              },
              {
                step: "02",
                title: "Controlled Radiation Exposure",
                desc: "Gamma rays, X-rays, or ion beams induce beneficial genetic mutations"
              },
              {
                step: "03",
                title: "Mutation Screening",
                desc: "Thousands of variants are screened to identify desirable traits"
              },
              {
                step: "04",
                title: "Field & Lab Testing",
                desc: "Selected mutants undergo extensive biological and safety testing"
              },
              {
                step: "05",
                title: "Stabilization & Breeding",
                desc: "Successful mutants are stabilized and multiplied through breeding"
              },
              {
                step: "06",
                title: "Agricultural Deployment",
                desc: "Improved crop varieties and livestock are released for commercial use"
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-start pb-6 sm:pb-8 border-b border-gray-200 last:border-0">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-lg bg-green-500 text-white font-bold text-sm sm:text-base lg:text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-linear-to-r from-green-700 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Advancing Agriculture with Nuclear Science</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Partner with us to implement nuclear mutation breeding and strengthen global food security
          </p>
          <a href="/contact" className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-green-900 font-bold py-3 px-6 sm:py-4 sm:px-8 text-sm sm:text-base rounded-lg transition transform hover:scale-105 shadow-xl">
            Join the Research Program
          </a>
        </div>
      </section>
    </div>
  );
};

export default Mutation;
