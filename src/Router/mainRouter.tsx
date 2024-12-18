import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/common/Navbar";
import PropertiesPage from "../Pages/PropertiesPage";
import PropertyPage from "../Pages/PropertyPage";

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PropertiesPage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
