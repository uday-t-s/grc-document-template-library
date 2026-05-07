import FileManager from "../components/FileManager";
import AIGenerator from "../components/AIGenerator";

function Dashboard() {
  const stats = [
    {
      title: "Total Templates",
      value: 12,
    },
    {
      title: "Users",
      value: 8,
    },
    {
      title: "Generated Docs",
      value: 25,
    },
    {
      title: "Downloads",
      value: 14,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-lg text-gray-300">
              {item.title}
            </h2>

            <p className="text-3xl font-bold mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 mt-10 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3">
          <li className="border-b border-gray-600 pb-2">
            Offer Letter generated
          </li>

          <li className="border-b border-gray-600 pb-2">
            NDA template updated
          </li>

          <li className="border-b border-gray-600 pb-2">
            Resume template downloaded
          </li>
        </ul>
      </div>

      <FileManager />

      <AIGenerator />
    </div>
  );
}

export default Dashboard;