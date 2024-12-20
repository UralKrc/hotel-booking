import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/common/Header";
import Loading from "../Components/common/Loading";

const PropertiesPage = lazy(() => import("../Pages/PropertiesPage"));
const PropertyPage = lazy(() => import("../Pages/PropertyPage"));

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
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
