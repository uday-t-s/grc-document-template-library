import {
  Routes,
  Route
} from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import RegisterPage from "./pages/RegisterPage";
import TemplatesPage from "./pages/TemplatesPage";

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
        path="/templates"
        element={<TemplatesPage />}
      />

    </Routes>
  );
}

export default App;