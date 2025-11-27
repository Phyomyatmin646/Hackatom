const LocationMap = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6 md:mb-8">
        Our Location - Chin State, Myanmar
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {/* Map Image */}
        <div className="lg:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
            alt="Chin State Map Location"
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x400/1e3a8a/ffffff?text=Chin+State+Map+Near+Kalay+City+River';
            }}
          />
        </div>

        {/* Location Info */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 md:mb-6">
            Strategic Location
          </h3>
          <ul className="space-y-3 md:space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-xl md:text-2xl">📍</span>
              <span className="text-gray-700 text-sm md:text-base">Chin State, Myanmar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl md:text-2xl">🏙️</span>
              <span className="text-gray-700 text-sm md:text-base">Near Kalay City</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl md:text-2xl">🌊</span>
              <span className="text-gray-700 text-sm md:text-base">Close to River for cooling water</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl md:text-2xl">🌾</span>
              <span className="text-gray-700 text-sm md:text-base">Serving agricultural communities</span>
            </li>
          </ul>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Our strategic location ensures efficient energy distribution to local farms 
              and agricultural facilities throughout the region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
