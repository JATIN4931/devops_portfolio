export default function CertificatesSection() {
  const certificates = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "AWS",
      status: "Active"
    },
    {
      id: 2,
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2024",
      image: "K8s",
      status: "Active"
    },
    {
      id: 3,
      name: "Terraform Associate",
      issuer: "HashiCorp",
      date: "2024",
      image: "Terraform",
      status: "Active"
    },
    {
      id: 4,
      name: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2023",
      image: "Docker",
      status: "Active"
    }
  ];

  return (
    <section className="w-full py-16" id="certificates">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-500 mb-4">Certificates</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-orange-400">{cert.name}</h3>
                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                  {cert.status}
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-2">{cert.issuer}</p>
              <p className="text-gray-400 text-sm">{cert.date}</p>
              <div className="mt-3">
                <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                  {cert.image}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 