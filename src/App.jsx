import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import Home from "./pages/Home";
import WebDev from "./pages/WebDev";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/web-development" element={<WebDev />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
