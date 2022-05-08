import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookmarked from "./pages/Bookmarked";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Register from "./pages/Register";
import TvSeries from "./pages/TvSeries";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-dark-blue h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-series" element={<TvSeries />} />
          <Route path="/bookmarked" element={<Bookmarked />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
