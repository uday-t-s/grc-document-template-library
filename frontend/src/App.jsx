import { ToastContainer } from "react-toastify";
import { useState } from "react";


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import TemplatePage from "./pages/TemplatePage";
import Dashboard from "./pages/Dashboard";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] =
    useState(
      localStorage.getItem("isAuthenticated") === "true"
    );

  return (
    <BrowserRouter>
      {isAuthenticated && (
        <Navbar
          setIsAuthenticated={setIsAuthenticated}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <AuthPage
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />

        <Route
          path="/templates"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
            >
              <TemplatePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
            >
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;