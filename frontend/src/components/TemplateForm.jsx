import { useState } from "react";

function TemplateForm({ addTemplate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    const newTemplate = {
      id: Date.now(),
      title,
      description,
    };

    addTemplate(newTemplate);

    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow p-4 rounded mb-6"
    >
      <h2 className="text-xl font-bold mb-4">Add Template</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Template
      </button>
    </form>
  );
}

export default TemplateForm;