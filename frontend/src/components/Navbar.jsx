import { useNavigate } from "react-router-dom";

function Navbar({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");

    setIsAuthenticated(false);

    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/templates")}
      >
        Document Template Library
      </h1>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg"
        >
          Dashboard
        </button>

        <button
          onClick={() => navigate("/templates")}
          className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg"
        >
          Templates
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;