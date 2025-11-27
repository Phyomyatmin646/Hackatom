import React from 'react';
import { Zap, ShieldCheck, ArrowRight, Globe, Activity, Gauge } from 'lucide-react';
import Slideshow from '../../components/ImageSlideshow';

export default function Grid() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Globe className="w-12 h-12 text-cyan-300" />
                <span className="text-cyan-300 font-bold uppercase tracking-wider text-sm">
                  Grid-Connected Power
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                Stable, Scalable &<br />
                <span className="text-cyan-300">Smart Grid Electricity</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl">
                Reliable grid-tied power distribution optimized for large-scale agriculture, food processing plants,
                and industrial zones — with real-time monitoring and zero downtime.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-6">
                <a href="#solutions" className="group inline-flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-5 px-9 rounded-xl transition transform hover:scale-105 shadow-xl">
                  Explore Grid Solutions <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition" />
                </a>
                <a href="/contact" className="inline-flex items-center justify-center gap-3 border-2 border-white hover:bg-white hover:text-blue-800 text-white font-bold py-5 px-9 rounded-xl transition">
                  Request Site Assessment
                </a>
              </div>
            </div>

            {/* Right Slideshow */}
            <div className="relative">
              <div className="w-full h-96 lg:h-full lg:min-h-[500px] xl:min-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Slideshow
                  images={[
                    { src: "/images/grid1.png", title: "33/11 kV Substation", caption: "Serving 800+ Hectares" },
                    { src: "/images/grid2.png", title: "Smart Grid Control Room", caption: "24/7 Monitoring" },
                    { src: "/images/grid3.png", title: "Transformer Bay", caption: "Real-Time Load Management" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section id="solutions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Built for Agricultural & Industrial Demands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineered for high-load stability, seasonal fluctuations, and future-ready expansion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: ShieldCheck,
                title: "99.99% Grid Reliability",
                desc: "Redundant feeds, automatic transfer switches, and predictive maintenance",
                color: "text-blue-600"
              },
              {
                icon: Gauge,
                title: "Smart Load Management",
                desc: "Real-time demand response and peak shaving for lower energy costs",
                color: "text-cyan-600"
              },
              {
                icon: Zap,
                title: "Scalable from 5MW to 200MW+",
                desc: "Modular design grows with your operation — no bottlenecks",
                color: "text-green-600"
              }
            ].map((item, i) => (
              <div key={i} className="group bg-gradient-to-b from-gray-50 to-white rounded-2xl p-10 border border-gray-200 hover:shadow-2xl hover:border-cyan-300 transition-all duration-300">
                <div className={`inline-flex p-4 bg-gray-100 rounded-2xl mb-6 group-hover:bg-cyan-100 transition`}>
                  <item.icon className={`w-12 h-12 ${item.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: "500+", label: "Hectares Powered" },
              { value: "33/11 kV", label: "Standard Voltage" },
              { value: "< 1%", label: "Annual Downtime" },
              { value: "24/7", label: "Control Room" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl lg:text-6xl font-extrabold mb-2">{stat.value}</div>
                <div className="text-cyan-200 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready for Rock-Solid Grid Power?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            From greenfield farms to massive agro-industrial parks — we deliver grid electricity that never fails.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:+1234567890" className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-lg py-5 px-12 rounded-full transition transform hover:scale-105 shadow-2xl">
              Call Our Grid Team Now
            </a>
            <a href="/contact" className="border-2 border-cyan-500 hover:bg-cyan-500 text-white font-bold text-lg py-5 px-12 rounded-full transition">
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}