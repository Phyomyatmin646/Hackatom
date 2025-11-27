import { useEffect, useState, useRef } from "react";

const farms = [
  {
    icon: "🌾",
    title: "Rice Paddies",
    details: "We support rice paddies with irrigation and monitoring systems.",
    image: "/images/rice.jpg",
  },
  {
    icon: "🥬",
    title: "Vegetable Farms",
    details: "Vegetable farms get soil analysis and growth tracking.",
    image: "/images/vegetable.jpg",
  },
  {
    icon: "🍎",
    title: "Fruit Orchards",
    details: "Fruit orchards benefit from pest control and yield predictions.",
    image: "/images/fruit.jpg",
  },
  {
    icon: "🐄",
    title: "Livestock Farms",
    details: "Livestock farms get feeding, health, and breeding management.",
    image: "/images/livestone.jpg",
  },
];

const Kalay = () => {
  const [selectedFarm, setSelectedFarm] = useState(null);

  const farmSectionRef = useRef(null);

  // Scroll function
  const scrollToFarmSection = () => {
    if (farmSectionRef.current) {
      farmSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Scroll Animation system
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/falam.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-6 animate-fadeInUp">
          <h1 className="flex items-center justify-center gap-2 text-5xl md:text-6xl font-bold mb-4">
            Falam
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              className="text-white"
            >
              <path d="M12 2l7 10h-4l4 6h-6v4h-2v-4H5l4-6H5z " />
            </svg>
          </h1>

          <p className="text-blue-100 text-lg font-semibold">
            Falam is a cool, high-altitude mountain city and the capital of Chin
            State.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6 scroll-animate opacity-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
                Agricultural Excellence
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Our network of partner farms across Chin State benefits from
                reliable, clean energy provided by our SNR facility. These
                farms showcase modern agricultural practices powered by
                sustainable nuclear energy.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-blue-900">
                  Farm Services
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🌾</span>
                    <span className="text-gray-700 text-sm md:text-base">
                      Automated irrigation systems
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🏭</span>
                    <span className="text-gray-700 text-sm md:text-base">
                      Food processing facilities
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">❄️</span>
                    <span className="text-gray-700 text-sm md:text-base">
                      Cold storage warehouses
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🔬</span>
                    <span className="text-gray-700 text-sm md:text-base">
                      Research and development labs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">📡</span>
                    <span className="text-gray-700 text-sm md:text-base">
                      Smart farming IoT networks
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="scroll-animate opacity-0">
              <img
                src="/images/2.jpg"
                alt="Partner Farms"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x400/1e3a8a/ffffff?text=Partner+Farms";
                }}
              />
            </div>
          </div>

          {/* Farms Grid */}
          <div
            ref={farmSectionRef}
            className="mt-12 md:mt-16 scroll-animate opacity-0"
          >
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 text-center">
              Types of Farms We Support
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {farms.map((farm, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedFarm(farm);
                    scrollToFarmSection(); // Scroll to farm detail
                  }}
                  className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <span className="text-3xl mb-3 block">{farm.icon}</span>
                  <h4 className="font-semibold text-blue-900">{farm.title}</h4>
                </div>
              ))}
            </div>

            {/* Farm Details */}
            {selectedFarm && (
              <div className="mt-6 p-6 bg-blue-50 rounded-lg shadow-inner animate-fadeInUp flex flex-col md:flex-row gap-6 items-center">
                <img
                  src={selectedFarm.image}
                  alt={selectedFarm.title}
                  className="w-full md:w-1/2 h-auto rounded-lg object-cover shadow"
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Farm+Image")
                  }
                />

                <div className="flex-1">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">
                    {selectedFarm.title}
                  </h4>
                  <p className="text-gray-700">{selectedFarm.details}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kalay;
