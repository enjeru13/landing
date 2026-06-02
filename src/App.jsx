import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const WebDev = lazy(() => import("./pages/WebDev"));
const MobileDev = lazy(() => import("./pages/MobileDev"));
const ErpDev = lazy(() => import("./pages/ErpDev"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageLoader = () => (
  <div className="min-h-screen bg-background-light dark:bg-background-dark" />
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/servicios/web-development" element={<WebDev />} />
          <Route path="/servicios/mobile-development" element={<MobileDev />} />
          <Route path="/servicios/erp-crm" element={<ErpDev />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}


export default App;
