export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of DevOps: AI-Powered Automation",
      excerpt: "Exploring how artificial intelligence is revolutionizing DevOps practices, from automated testing to intelligent monitoring and predictive maintenance.",
      platform: "Medium",
      author: "Jatin Kumar",
      date: "Dec 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Kubernetes Best Practices for Production",
      excerpt: "A comprehensive guide to deploying and managing Kubernetes clusters in production environments with security, monitoring, and scalability considerations.",
      platform: "Dev.to",
      author: "Jatin Kumar",
      date: "Dec 10, 2024",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Infrastructure as Code: Terraform vs Ansible",
      excerpt: "Comparing the strengths and use cases of Terraform and Ansible for infrastructure automation, with real-world examples and best practices.",
      platform: "Hashnode",
      author: "Jatin Kumar",
      date: "Dec 5, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="w-full py-16" id="blog">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-500 mb-4">Recent Articles</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-orange-400 mb-2">{post.title}</h3>
                <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                  {post.readTime}
                </span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <span>{post.author}</span>
                  <span>for {post.platform}</span>
                </div>
                <span>{post.date}</span>
              </div>
              <button className="mt-4 text-red-400 hover:text-red-300 font-medium transition-colors">
                Read article →
              </button>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="text-red-400 hover:text-red-300 font-medium transition-colors">
            Read all articles
          </button>
        </div>
      </div>
    </section>
  );
} 