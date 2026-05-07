import { useState } from "react";

function AIGenerator() {
  const [prompt, setPrompt] = useState("");

  const [loading, setLoading] = useState(false);

  const [generatedText, setGeneratedText] =
    useState("");

  const handleGenerate = () => {
    if (!prompt) {
      alert("Please enter a prompt");
      return;
    }

    setLoading(true);

    setGeneratedText("");

    setTimeout(() => {
      setGeneratedText(`
Dear Employee,

We are pleased to offer you the position based on your request:

"${prompt}"

Your employment details will be shared shortly.

Regards,
HR Team
      `);

      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-gray-800 text-white rounded-xl p-6 mt-10 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">
        AI Document Generator
      </h2>

      <textarea
        placeholder="Enter document prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-4 rounded-lg text-black h-32"
      />

      <button
        onClick={handleGenerate}
        className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg mt-4"
      >
        Generate Document
      </button>

      {loading && (
        <div className="mt-6">
          <p className="animate-pulse text-purple-300">
            Generating AI document...
          </p>
        </div>
      )}

      {generatedText && (
        <div className="bg-gray-900 p-6 rounded-xl mt-6 whitespace-pre-line">
          <h3 className="text-xl font-bold mb-4">
            Generated Document
          </h3>

          <p>{generatedText}</p>
        </div>
      )}
    </div>
  );
}

export default AIGenerator;