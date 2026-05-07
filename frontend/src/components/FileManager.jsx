import { useState } from "react";

function FileManager() {
  const [files, setFiles] = useState([]);

  const handleUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);

    setFiles([...files, ...uploadedFiles]);
  };

  return (
    <div className="bg-gray-800 shadow-lg rounded-xl p-6 mt-10 text-white">
      <h2 className="text-2xl font-bold mb-6">
        File Manager
      </h2>

      <input
        type="file"
        multiple
        onChange={handleUpload}
        className="mb-6"
      />

      {files.length === 0 ? (
        <p className="text-gray-400">
          No files uploaded
        </p>
      ) : (
        <div className="space-y-4">
          {files.map((file, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold">
                  {file.name}
                </h3>

                <p className="text-sm text-gray-400">
                  {(file.size / 1024).toFixed(2)} KB
                </p>
              </div>

              <div className="flex gap-3">
                <button className="bg-blue-500 px-4 py-2 rounded-lg">
                  Export PDF
                </button>

                <button className="bg-green-500 px-4 py-2 rounded-lg">
                  Export DOCX
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FileManager;