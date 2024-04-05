import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductPage from "./pages/ProductPage/ProductPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import RecommendationPage from "./pages/RecommendationPage/RecommendationPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/recommendation" element={<RecommendationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
