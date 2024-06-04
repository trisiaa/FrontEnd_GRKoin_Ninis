import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from '../src/pages/login';
import Home from '../src/pages/home';
import TukarKoin from "./pages/tukar_koin";
import Riwayat from "./pages/riwayat_koin";
import AboutUs from "./pages/aboutus";
import Admin from "./pages/admin";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/tukar-koin" element={<TukarKoin />} />
          <Route path="/riwayat" element={<Riwayat />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/admin" element={<Admin />} />

        </Routes>
      </Router>
  );
}

export default App;
