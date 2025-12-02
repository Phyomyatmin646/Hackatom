import { useEffect, useState, useRef } from "react";

const farms = [
  {
    icon: "🌾",
    title: "Rice Paddies",
    details: "We support rice paddies with irrigation and monitoring systems.",
    images: [
      "/images/rice1.jpg",
      "/images/rice2.jpg",
      "/images/rice3.jpg",
    ],
  },
  {
    icon: "🥬",
    title: "Vegetable Farms",
    details: "Vegetable farms get soil analysis and growth tracking.",
    images: [
      "/images/veg1.jpg",
      "/images/veg2.jpg",
      "/images/veg3.jpg",
    ],
  },
  {
    icon: "🍎",
    title: "Fruit Orchards",
    details: "Fruit orchards benefit from pest control and yield predictions.",
    images: [
      "/images/fruit1.jpg",
      "/images/fruit2.jpg",
      "/images/fruit3.jpg",
    ],
  },
  {
    icon: "🐄",
    title: "Livestock Farms",
    details: "Livestock farms get feeding, health, and breeding management.",
    images: [
      "/images/cow1.jpg",
      "/images/cow2.jpg",
      "/images/cow3.jpg",
    ],
  },
];

const DataCenter = () => {
  const [selectedFarm, setSelectedFarm] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const farmSectionRef = useRef(null);

  const scrollToFarmSection = () => {
    if (farmSectionRef.current) {
      farmSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const nextSlide = () => {
    if (!selectedFarm) return;
    setCurrentSlide((prev) =>
      prev === selectedFarm.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    if (!selectedFarm) return;
    setCurrentSlide((prev) =>
      prev === 0 ? selectedFarm.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (selectedFarm) setCurrentSlide(0);
  }, [selectedFarm]);

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
          backgroundImage:
            "url('/images/viber_image_2025-11-27_23-13-42-524.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-6 animate-fadeInUp">
          <h1 className="flex items-center justify-center gap-2 text-10xl md:text-5xl font-bold mb-4">
            Hakha
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" className="text-white">
              <path d="M12 2l7 10h-4l4 6h-6v4h-2v-4H5l4-6H5z" />
            </svg>
          </h1>

          <p className="text-blue-100 text-lg font-semibold">
            Hakha is a cool,high-altitude mountain city and the capital of Chin State.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Farm Section */}
          <div ref={farmSectionRef} className="mt-12 md:mt-16 scroll-animate opacity-0">
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 text-center">
              Types of Farms We Support
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {farms.map((farm, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedFarm(farm);
                    scrollToFarmSection();
                  }}
                  className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <span className="text-3xl mb-3 block">{farm.icon}</span>
                  <h4 className="font-semibold text-blue-900">{farm.title}</h4>
                </div>
              ))}
            </div>

            {selectedFarm && (
              <div className="mt-6 p-6 bg-blue-50 rounded-lg shadow-inner animate-fadeInUp flex flex-col md:flex-row gap-6 items-center">

                {/* 🔥 Image Slider Section */}
                {/* 🔥 Image Slider Section */}
<div className="relative w-full md:w-1/2">
  <img
    src={selectedFarm.images[currentSlide]}
    className="w-full h-[300px] object-cover rounded-lg shadow"
  />

  {/* Prev Button (only show if more than 1 image) */}
  {selectedFarm.images.length > 1 && (
    <button
      onClick={prevSlide}
      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full shadow"
    >
      ‹
    </button>
  )}

  {/* Next Button */}
  {selectedFarm.images.length > 1 && (
    <button
      onClick={nextSlide}
      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full shadow"
    >
      ›
    </button>
  )}

  {/* Dots (Auto adjust by number of images) */}
  {selectedFarm.images.length > 1 && (
    <div className="absolute bottom-3 w-full flex justify-center gap-2">
      {selectedFarm.images.map((_, idx) => (
        <div
          key={idx}
          className={`w-3 h-3 rounded-full ${
            idx === currentSlide ? "bg-blue-600" : "bg-white/60"
          }`}
        ></div>
      ))}
    </div>
  )}
</div>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCenter;
