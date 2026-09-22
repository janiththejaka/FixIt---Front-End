import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";
import PublicLayout from "../../layouts/PublicLayout";

import DashboardPage from "../../pages/DashboardPage";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import ProviderProfilePage from "../../pages/ProviderProfilePage";
import ProvidersPage from "../../pages/ProvidersPage";
import RegisterPage from "../../pages/RegisterPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/providers" element={<ProvidersPage />} />
          <Route
            path="/providers/:profileId"
            element={<ProviderProfilePage />}
          />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;