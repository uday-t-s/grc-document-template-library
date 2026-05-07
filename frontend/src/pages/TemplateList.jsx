import { useEffect, useState } from "react";
import { getTemplates } from "../services/api";

function TemplateList() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    setTemplates([
      { id: 1, title: "Offer Letter", description: "Sample template" },
      { id: 2, title: "NDA", description: "Confidential agreement" },
    ]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Templates</h1>

      <div className="grid grid-cols-3 gap-4">
        {templates.map((t) => (
          <div key={t.id} className="p-4 border rounded shadow">
            <h2 className="font-bold">{t.title}</h2>
            <p>{t.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateList;