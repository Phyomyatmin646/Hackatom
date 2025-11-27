const Farms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Partner Farms
          </h1>
          <p className="text-blue-100 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Supporting local agricultural communities with clean energy solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
                Agricultural Excellence
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Our network of partner farms across Chin State benefits from reliable,
                clean energy provided by our SNR facility. These farms showcase modern
                agricultural practices powered by sustainable nuclear energy.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-blue-900">
                  Farm Services
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🌾</span>
                    <span className="text-gray-700 text-sm md:text-base">Automated irrigation systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🏭</span>
                    <span className="text-gray-700 text-sm md:text-base">Food processing facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">❄️</span>
                    <span className="text-gray-700 text-sm md:text-base">Cold storage warehouses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🔬</span>
                    <span className="text-gray-700 text-sm md:text-base">Research and development labs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">📡</span>
                    <span className="text-gray-700 text-sm md:text-base">Smart farming IoT networks</span>
                  </li>
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="text-2xl md:text-3xl font-bold text-blue-900">500+</p>
                  <p className="text-gray-600 text-sm">Hectares Covered</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="text-2xl md:text-3xl font-bold text-blue-900">150+</p>
                  <p className="text-gray-600 text-sm">Partner Farms</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop"
                alt="Partner Farms"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400/1e3a8a/ffffff?text=Partner+Farms';
                }}
              />
            </div>
          </div>

          {/* Farm Types Grid */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 text-center">
              Types of Farms We Support
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <span className="text-3xl mb-3 block">🌾</span>
                <h4 className="font-semibold text-blue-900">Rice Paddies</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <span className="text-3xl mb-3 block">🥬</span>
                <h4 className="font-semibold text-blue-900">Vegetable Farms</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <span className="text-3xl mb-3 block">🍎</span>
                <h4 className="font-semibold text-blue-900">Fruit Orchards</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <span className="text-3xl mb-3 block">🐄</span>
                <h4 className="font-semibold text-blue-900">Livestock Farms</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Farms;
