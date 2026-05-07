import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import AuthPage from "./pages/AuthPage";
import TemplateList from "./pages/TemplateList";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
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