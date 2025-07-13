export default function StatsSection() {
  const stats = [
    {
      id: 1,
      number: "50+",
      label: "Infrastructure Deployments",
      description: "Successfully deployed and managed"
    },
    {
      id: 2,
      number: "99.9%",
      label: "Uptime Achieved",
      description: "Production system reliability"
    },
    {
      id: 3,
      number: "24/7",
      label: "Monitoring Coverage",
      description: "Continuous system oversight"
    },
    {
      id: 4,
      number: "4",
      label: "Cloud Certifications",
      description: "Professional qualifications earned"
    }
  ];

  return (
    <section className="w-full py-16" id="stats">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-500 mb-4">Stats & Achievements</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-gray-800 rounded-lg p-6 text-center hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-orange-400 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-300 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 