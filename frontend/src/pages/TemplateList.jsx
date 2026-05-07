import { useState } from "react";
import TemplateForm from "../components/TemplateForm";

function TemplateList() {
  const [templates, setTemplates] = useState([
    {
      id: 1,
      title: "Offer Letter",
      description: "Sample template",
    },
    {
      id: 2,
      title: "NDA",
      description: "Confidential agreement",
    },
  ]);

  const [search, setSearch] = useState("");

  const addTemplate = (template) => {
    setTemplates([...templates, template]);
  };

  const filteredTemplates = templates.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Document Templates
      </h1>

      <TemplateForm addTemplate={addTemplate} />

      <input
        type="text"
        placeholder="Search templates..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 w-full mb-6 rounded-lg max-w-2xl mx-auto block"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTemplates.map((t) => (
          <div
            key={t.id}
            className="border rounded p-4 shadow bg-white"
          >
            <h2 className="text-xl font-bold">{t.title}</h2>
            <p>{t.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateList;