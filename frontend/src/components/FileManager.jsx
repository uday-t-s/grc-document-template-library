function FileManager() {

  const files = [
    "HR_Policy.docx",
    "Security_Audit.pdf",
    "Risk_Report.csv"
  ];

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >

      <h1
        style={{
          fontSize: "40px",
          marginBottom: "10px",
          color: "#1e293b"
        }}
      >
        File Manager
      </h1>

      <p
        style={{
          color: "#64748b",
          marginBottom: "30px"
        }}
      >
        Manage generated files and exports
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px"
        }}
      >

        {files.map((file, index) => (

          <div
            key={index}
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.08)"
            }}
          >

            <h3
              style={{
                marginBottom: "20px",
                color: "#1e293b"
              }}
            >
              {file}
            </h3>

            <button
              style={{
                padding: "10px 18px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                marginRight: "10px"
              }}
            >
              Download
            </button>

            <button
              style={{
                padding: "10px 18px",
                background: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default FileManager;