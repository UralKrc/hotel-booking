import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../Components/common/Header";
import Loading from "../../Components/common/Loading";
import { ROUTE_PATHS } from "../../Constants/routePaths";
import PoliciesPage from "../../Pages/PoliciesPage";

const PropertiesPage = lazy(() => import("../../Pages/PropertiesPage"));
const PropertyPage = lazy(() => import("../../Pages/PropertyPage"));

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={ROUTE_PATHS.HOME} element={<PropertiesPage />} />
          <Route path={ROUTE_PATHS.PROPERTY} element={<PropertyPage />} />
          <Route path={ROUTE_PATHS.POLICIES} element={<PoliciesPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default MainRouter;
