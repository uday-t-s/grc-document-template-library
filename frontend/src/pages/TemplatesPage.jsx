import { useState } from "react";

function TemplatesPage() {

  const [search, setSearch] = useState("");

  const templates = [
    "Invoice Template",
    "HR Policy Template",
    "Security Audit Template",
    "Compliance Report",
    "Risk Assessment Template"
  ];

  const filteredTemplates =
    templates.filter((item) =>
      item.toLowerCase()
        .includes(search.toLowerCase())
    );

  const exportCSV = () => {

    const csvContent =
      filteredTemplates.join("\n");

    const blob = new Blob(
      [csvContent],
      { type: "text/csv" }
    );

    const url =
      window.URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download = "templates.csv";

    a.click();
  };

  return (

    <div
      style={{
        padding: "20px",
        fontFamily: "Arial"
      }}
    >

      <h1>
        Dashboard
      </h1>

      <input
        type="text"
        placeholder="Search templates..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px"
        }}
      />

      <br />

      <button
        onClick={exportCSV}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          background: "#198754",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Export CSV
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "15px"
        }}
      >

        {filteredTemplates.map((item, index) => (

          <div
            key={index}
            style={{
              padding: "20px",
              background: "#f5f5f5",
              borderRadius: "10px"
            }}
          >

            <h3>{item}</h3>

          </div>
        ))}

      </div>

    </div>
  );
}

export default TemplatesPage;