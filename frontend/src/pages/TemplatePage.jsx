import { useState } from "react";

function TemplatePage() {
  const [templates, setTemplates] = useState([
    {
      title: "Offer Letter",
      description: "Sample template",
    },
    {
      title: "NDA",
      description: "Confidential agreement",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredTemplates = templates.filter(
    (template) =>
      template.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-5xl font-bold mb-8">
        Document Templates
      </h1>

      <input
        type="text"
        placeholder="Search templates..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-3 rounded-lg text-black w-full max-w-md mb-8"
      />

      <div className="grid gap-6">
        {filteredTemplates.map((template, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold">
              {template.title}
            </h2>

            <p className="text-gray-300 mt-2">
              {template.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplatePage;