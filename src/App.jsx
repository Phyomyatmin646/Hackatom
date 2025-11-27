import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import DataCenter from './pages/locations/DataCenter.jsx';
import Farms from './pages/locations/Farms.jsx';
import Operators from './pages/locations/Operators.jsx';
import Kalay from './pages/locations/Kalay.jsx';
import MainLongyi from './pages/locations/Main-longyi.jsx'; // ✅ Fixed

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locations/data-center" element={<DataCenter />} />
        <Route path="/locations/farms" element={<Farms />} />
        <Route path="/locations/operators" element={<Operators />} />
        <Route path="/locations/kalay" element={<Kalay />} />
        <Route path="/locations/main-longyi" element={<MainLongyi />} />
      </Routes>
    </div>
  );
}

export default App;
