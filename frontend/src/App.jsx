import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import AuthPage from "./pages/AuthPage";
import TemplateList from "./pages/TemplateList";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");

    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

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
              <TemplateList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;