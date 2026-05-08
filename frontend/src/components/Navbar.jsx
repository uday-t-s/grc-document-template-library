import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        background: "#0f172a",
        color: "white",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >

      <h2>
        GRC Library
      </h2>

      <div
        style={{
          display: "flex",
          gap: "15px"
        }}
      >

        <button
          onClick={() =>
            navigate("/dashboard")
          }
          style={{
            padding: "10px 15px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Dashboard
        </button>

        <button
          onClick={() =>
            navigate("/templates")
          }
          style={{
            padding: "10px 15px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Templates
        </button>

        <button
          onClick={() => {

            localStorage.clear();

            navigate("/");
          }}
          style={{
            padding: "10px 15px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            background: "#ef4444",
            color: "white"
          }}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;