import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb"
      }}
    >

      <Navbar />

      <div
        style={{
          padding: "40px"
        }}
      >

        <h1
          style={{
            fontSize: "40px",
            marginBottom: "10px",
            color: "#1e293b"
          }}
        >
          Dashboard
        </h1>

        <p
          style={{
            color: "#64748b",
            marginBottom: "40px"
          }}
        >
          Welcome to GRC Document Template Library
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px"
          }}
        >

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
            }}
          >

            <h2
              style={{
                marginBottom: "15px"
              }}
            >
              Templates
            </h2>

            <p
              style={{
                color: "#64748b",
                marginBottom: "20px"
              }}
            >
              View and manage templates
            </p>

            <button
  onClick={() =>
    navigate("/templates")
  }
  style={{
    padding: "12px 20px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  }}
>
  Open Templates
</button>

          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
            }}
          >

            <h2
              style={{
                marginBottom: "15px"
              }}
            >
              File Manager
            </h2>

            <p
              style={{
                color: "#64748b",
                marginBottom: "20px"
              }}
            >
              Manage generated files
            </p>

            <button
              onClick={() =>
                navigate("/files")
              }
              style={{
                padding: "12px 20px",
                background: "#16a34a",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Open File Manager
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;