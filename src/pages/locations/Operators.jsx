const Operators = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Operators
          </h1>
          <p className="text-blue-100 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Skilled professionals dedicated to safe and efficient operation
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
                Expert Team
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Our facility is operated by highly trained professionals with extensive
                experience in nuclear technology and agricultural systems. Safety and
                efficiency are our top priorities.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-blue-900">
                  Operator Qualifications
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span className="text-gray-700 text-sm md:text-base">Certified nuclear facility operators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm md:text-base">Continuous safety training programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm md:text-base">Emergency response expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm md:text-base">Agricultural technology specialists</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Our Operators"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400/1e3a8a/ffffff?text=Our+Operators';
                }}
              />
            </div>
          </div>

          {/* Team Stats */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">50+</p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">Trained Operators</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">10+</p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">Years Experience</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">100%</p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">Safety Record</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">24/7</p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">Operation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operators;
