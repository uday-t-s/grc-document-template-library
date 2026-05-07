return (
  <form
    onSubmit={handleSubmit}
    className="bg-white shadow-lg p-6 rounded-xl mb-6 max-w-2xl mx-auto"
  >
    <h2 className="text-2xl font-bold mb-4 text-center">
      Add Template
    </h2>

    <input
      type="text"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="border p-3 w-full mb-4 rounded-lg"
    />

    <textarea
      placeholder="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="border p-3 w-full mb-4 rounded-lg"
    />

    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg w-full"
    >
      Add Template
    </button>
  </form>
);