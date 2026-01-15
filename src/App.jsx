import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import Home from "./pages/Home";
import WebDev from "./pages/WebDev";
import MobileDev from "./pages/MobileDev";
import ErpDev from "./pages/ErpDev";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/web-development" element={<WebDev />} />
        <Route path="/servicios/mobile-development" element={<MobileDev />} />
        <Route path="/servicios/erp-crm" element={<ErpDev />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
