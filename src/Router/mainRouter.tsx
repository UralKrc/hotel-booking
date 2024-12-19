import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "../Components/common/Loading";
import Navbar from "../Components/common/Navbar";

const PropertiesPage = lazy(() => import("../Pages/PropertiesPage"));
const PropertyPage = lazy(() => import("../Pages/PropertyPage"));

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<PropertiesPage />} />
          <Route path="/property/:id" element={<PropertyPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default MainRouter;
