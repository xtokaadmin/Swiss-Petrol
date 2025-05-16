import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import PetrolPowers from "./components/pages/services/PetrolPowers";
import AssetManagement from "./components/pages/services/AssetManagement";
import Immobilien from "./components/pages/services/Immobilien";
import AI from "./components/pages/services/AI";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* Service detail routes */}
          <Route path="/services/petrol-powers" element={<PetrolPowers />} />
          <Route
            path="/services/asset-management"
            element={<AssetManagement />}
          />
          <Route path="/services/immobilien" element={<Immobilien />} />
          <Route path="/services/ai" element={<AI />} />

          {/* Add this before any catchall route */}
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
