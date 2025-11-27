import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownTimeout = useRef(null);

  const handleMouseEnter = (dropdown) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-[70px]">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors"
          >
            UF<sub>6</sub>
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
                to="/Location"
                className="px-3 py-2 lg:px-4 rounded-md text-blue-900 font-medium hover:bg-blue-100 transition-colors"
              >
                Location
              </Link>
            </li>

            {/* Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('agricultural')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-3 py-2 lg:px-4 rounded-md text-blue-900 font-medium hover:bg-blue-100 transition-colors flex items-center gap-1">
                Agricultural
                <svg
                  className={`w-4 h-4 transition-transform ${openDropdown === 'agricultural' ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === 'agricultural' && (
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
                    Falam
                  </Link>
                  <Link
                    to="/locations/thantlang"
                    className="block px-4 py-2 text-blue-900 hover:bg-blue-100 transition-colors"
                  >
                    Thantlang
                  </Link>
                  <Link
                    to="/locations/tedim"
                    className="block px-4 py-2 text-blue-900 hover:bg-blue-100 transition-colors"
                  >
                    Tedim
                  </Link>
                  <Link
                    to="/locations/operators"
                    className="block px-4 py-2 text-blue-900 hover:bg-blue-100 transition-colors"
                  >
                    Kalay
                  </Link>
                </div>
              )}
            </li>

            {/* Other Dropdowns */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('electricity')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-3 py-2 lg:px-4 rounded-md text-blue-900 font-medium hover:bg-blue-100 transition-colors flex items-center gap-1">
                Electricity
                <svg
                  className={`w-4 h-4 transition-transform ${openDropdown === 'electricity' ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === 'electricity' && (
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
              onMouseEnter={() => handleMouseEnter('radiation')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-3 py-2 lg:px-4 rounded-md text-blue-900 font-medium hover:bg-blue-100 transition-colors flex items-center gap-1">
                Radiation
                <svg
                  className={`w-4 h-4 transition-transform ${openDropdown === 'radiation' ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === 'radiation' && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md min-w-[200px] py-2 border border-gray-100">
                  <Link
                    to="/locations/mutation"
                    className="block px-4 py-2 text-blue-900 hover:bg-blue-100 transition-colors"
                  >
                    Mutation
                  </Link>
                  <Link
                    to="/locations/soil-erosion"
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
                  <svg
                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
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
