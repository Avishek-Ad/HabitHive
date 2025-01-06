import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import HomePageLayout from "./Layout/HomePageLayout";
import DashboardPageLayout from "./Layout/DashboardPageLayout";
import { authState } from "./context/AuthContext";
import { useContext } from "react";
import { DotLoader } from "react-spinners";

function App() {
  const { user, loading } = useContext(authState);
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <DotLoader size={100} speedMultiplier={1.2} />
      </div>
    );
  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/dashboard" /> : <HomePageLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route
        path="/register"
        element={user ? <Navigate to="/dashboard" /> : <RegisterPage />}
      />
      <Route
        path="/login"
        element={user ? <Navigate to="/dashboard" /> : <LoginPage />}
      />

      <Route
        path="/dashboard"
        element={user ? <DashboardPageLayout /> : <Navigate to="/login" />}
      >
        <Route path="" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
