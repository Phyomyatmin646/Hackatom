import ImageSlider from '../components/ImageSlider';
import LocationMap from '../components/LocationMap';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Image Slider Section */}
      <section>
        <ImageSlider />
      </section>

      {/* SNR Information Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 text-center mb-8 md:mb-12">
            Small Nuclear Reactor for Agriculture
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-blue-900 hover:shadow-xl transition-shadow">
              <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">
                What is SNR?
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Small Nuclear Reactors (SNRs) are advanced, compact nuclear power plants
                designed to provide clean, reliable energy for specialized applications.
                Our SNR in Chin State will power agricultural innovations and support
                sustainable farming practices.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-blue-900 hover:shadow-xl transition-shadow">
              <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">
                Benefits for Agriculture
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  Reliable power for irrigation systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  Energy for food processing facilities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  Power for agricultural research centers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  Support for cold storage facilities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  Clean energy for sustainable farming
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-blue-900 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To revolutionize agriculture in Chin State through clean nuclear energy,
                enhancing food security, supporting local farmers, and promoting
                sustainable development in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-blue-50">
        <LocationMap />
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Join Us in Building a Sustainable Future
          </h2>
          <p className="text-blue-100 mb-6 md:mb-8 text-sm md:text-base">
            Learn more about how our SNR project is transforming agriculture in Chin State
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm md:text-base"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
