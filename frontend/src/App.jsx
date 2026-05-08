import {
  Routes,
  Route
} from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import TemplatesPage from "./pages/TemplatesPage";
import TemplateDetailsPage from "./pages/TemplateDetailsPage";
import FileManager from "./components/FileManager";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<AuthPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/templates"
        element={<TemplatesPage />}
      />

      <Route
        path="/template"
        element={<TemplateDetailsPage />}
      />

      <Route
        path="/files"
        element={<FileManager />}
      />

    </Routes>
  );
}

export default App;