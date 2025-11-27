import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import DataCenter from './pages/electricity/DataCenter.jsx';
import Grid from './pages/electricity/Grid.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/data-center" element={<DataCenter />} />
      </Routes>
    </div>
  );
}

export default App;
