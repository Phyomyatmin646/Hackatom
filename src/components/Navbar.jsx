import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-[70px]">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
            SNR Agriculture
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-blue-900 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            <li>
              <Link
                to="/"
                className="px-3 py-2 lg:px-4 rounded-md text-blue-900 font-medium hover:bg-blue-100 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/location"
                className="px-3 py-2 lg:px-4 rounded-md text-blue-900 font-medium hover:bg-blue-100 transition-colors"
              >
                Location
              </Link>
            </li>

            {/* Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="px-3 py-2 lg:px-4 rounded-md text-blue-900 font-medium hover:bg-blue-100 transition-colors flex items-center gap-1">
                Agriculture
                <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md min-w-[200px] py-2 border border-gray-100">
                  <Link
                    to="/locations/data-center"
                    className="block px-4 py-2 text-blue-900 hover:bg-blue-100 transition-colors"
                  >
                   Hakka
                  </Link>
                  <Link
                    to="/locations/farms"
                    className="block px-4 py-2 text-blue-900 hover:bg-blue-100 transition-colors"
                  >
                    City 2
                  </Link>
                  <Link
                    to="/locations/operators"
                    className="block px-4 py-2 text-blue-900 hover:bg-blue-100 transition-colors"
                  >
                    City 3
                  </Link>
                  <Link
                    to="/locations/operators"
                    className="block px-4 py-2 text-blue-900 hover:bg-blue-100 transition-colors"
                  >
                    City 4
                  </Link>
                </div>
              )}
            </li>

            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen1(true)}
              onMouseLeave={() => setIsDropdownOpen1(false)}
            >
              <button className="px-3 py-2 lg:px-4 rounded-md text-blue-900 font-medium hover:bg-blue-100 transition-colors flex items-center gap-1">
                Electricity
                <svg className={`w-4 h-4 transition-transform ${isDropdownOpen1 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen1 && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md min-w-[200px] py-2 border border-gray-100">
                  <Link
                    to="/grid"
                    className="block px-4 py-2 text-blue-900 hover:bg-blue-100 transition-colors"
                  >
                   Grid
                  </Link>
                  <Link
                    to="/data-center"
                    className="block px-4 py-2 text-blue-900 hover:bg-blue-100 transition-colors"
                  >
                    Data Center
                  </Link>
            
                </div>
              )}
            </li>

            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen2(true)}
              onMouseLeave={() => setIsDropdownOpen2(false)}
            >
              <button className="px-3 py-2 lg:px-4 rounded-md text-blue-900 font-medium hover:bg-blue-100 transition-colors flex items-center gap-1">
                Waste
                <svg className={`w-4 h-4 transition-transform ${isDropdownOpen2 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen2 && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md min-w-[200px] py-2 border border-gray-100">
                  <Link
                    to="/locations/data-center"
                    className="block px-4 py-2 text-blue-900 hover:bg-blue-100 transition-colors"
                  >
                   Mutation
                  </Link>
                  <Link
                    to="/locations/farms"
                    className="block px-4 py-2 text-blue-900 hover:bg-blue-100 transition-colors"
                  >
                    Soil Erosion
                  </Link>
            
                </div>
              )}
            </li>

            <li>
              <Link
                to="/contact"
                className="px-3 py-2 lg:px-4 rounded-md text-blue-900 font-medium hover:bg-blue-100 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col pt-4 space-y-1">
              <Link
                to="/"
                className="px-4 py-2 text-blue-900 font-medium hover:bg-blue-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Dropdown */}
              <div>
                <button
                  className="w-full px-4 py-2 text-blue-900 font-medium hover:bg-blue-100 rounded-md transition-colors flex items-center justify-between"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Locations
                  <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    <Link
                      to="/locations/data-center"
                      className="block px-4 py-2 text-blue-800 hover:bg-blue-100 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Data Center
                    </Link>
                    <Link
                      to="/locations/farms"
                      className="block px-4 py-2 text-blue-800 hover:bg-blue-100 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Farms
                    </Link>
                    <Link
                      to="/locations/operators"
                      className="block px-4 py-2 text-blue-800 hover:bg-blue-100 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Operators
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="px-4 py-2 text-blue-900 font-medium hover:bg-blue-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 text-blue-900 font-medium hover:bg-blue-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
