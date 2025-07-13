'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  github?: string;
  live?: string;
  featured: boolean;
}

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Multi-Cloud CI/CD Pipeline',
      description: 'Learning project: CI/CD pipeline deploying to AWS and Azure with automated testing and security scanning.',
      longDescription: 'Built a comprehensive CI/CD pipeline using GitHub Actions as a learning project that deploys applications to both AWS and Azure cloud platforms. The pipeline includes automated testing, security vulnerability scanning, and blue-green deployment strategies for zero-downtime releases.',
      image: '/api/placeholder/400/250',
      technologies: ['GitHub Actions', 'AWS', 'Azure', 'Docker', 'Terraform'],
      category: 'CI/CD',
      github: 'https://github.com/jatin-kumar/multi-cloud-cicd',
      featured: true
    },
    {
      id: '2',
      title: 'Kubernetes Monitoring Stack',
      description: 'Academic project: Complete monitoring solution with Prometheus, Grafana, and AlertManager on Kubernetes.',
      longDescription: 'Deployed and configured a comprehensive monitoring stack on Kubernetes as part of my academic studies, including Prometheus for metrics collection, Grafana for visualization, and AlertManager for notifications. Created custom dashboards and alerting rules for infrastructure and application monitoring.',
      image: '/api/placeholder/400/250',
      technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'Helm', 'AlertManager'],
      category: 'Monitoring',
      github: 'https://github.com/jatin-kumar/k8s-monitoring',
      featured: true
    },
    {
      id: '3',
      title: 'Infrastructure as Code',
      description: 'Learning project: Reusable Terraform modules for AWS infrastructure with security best practices.',
      longDescription: 'Created modular and reusable Terraform configurations for AWS infrastructure as a learning project, including VPC, EC2 instances, RDS databases, and load balancers. Implemented security best practices with proper IAM roles, security groups, and encryption.',
      image: '/api/placeholder/400/250',
      technologies: ['Terraform', 'AWS', 'VPC', 'RDS', 'IAM'],
      category: 'Infrastructure',
      github: 'https://github.com/jatin-kumar/terraform-aws',
      featured: true
    },
    {
      id: '4',
      title: 'Container Orchestration',
      description: 'Academic project: Microservices architecture with Docker, Kubernetes, and Istio service mesh.',
      longDescription: 'Designed and implemented a scalable microservices architecture using Docker containers orchestrated by Kubernetes as part of my academic coursework. Integrated Istio service mesh for advanced traffic management, security, and observability.',
      image: '/api/placeholder/400/250',
      technologies: ['Docker', 'Kubernetes', 'Istio', 'Microservices', 'Helm'],
      category: 'Containerization',
      github: 'https://github.com/jatin-kumar/container-orchestration',
      featured: false
    },
    {
      id: '5',
      title: 'Automated Backup System',
      description: 'Learning project: Python-based backup automation with encryption and cloud storage integration.',
      longDescription: 'Developed a comprehensive backup automation system using Python as a learning project that creates encrypted backups of databases and files. Features automated scheduling, cloud storage integration, and disaster recovery capabilities.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Cron', 'Encryption', 'S3', 'Bash'],
      category: 'Automation',
      github: 'https://github.com/jatin-kumar/backup-automation',
      featured: false
    },
    {
      id: '6',
      title: 'Log Aggregation Pipeline',
      description: 'Academic project: ELK stack implementation for centralized logging with custom dashboards.',
      longDescription: 'Built a centralized logging solution using the ELK stack (Elasticsearch, Logstash, Kibana) as part of my academic studies for comprehensive log aggregation and analysis. Created custom dashboards and alerting for application and system logs.',
      image: '/api/placeholder/400/250',
      technologies: ['ELK Stack', 'Docker', 'Kibana', 'Logstash', 'Elasticsearch'],
      category: 'Monitoring',
      github: 'https://github.com/jatin-kumar/log-aggregation',
      featured: false
    }
  ];

  const categories = ['All', 'CI/CD', 'Monitoring', 'Infrastructure', 'Containerization', 'Automation'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-900 to-black" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-red-500 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  A showcase of my DevOps projects demonstrating infrastructure automation, CI/CD pipelines, and cloud-native solutions.
                </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                <div className="text-6xl opacity-20">🚀</div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    Featured
          </div>
                )}
        </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-400 text-xs px-3 py-1 rounded-full border border-red-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-gray-500 text-xs px-2 py-1">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
          </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      Live Demo →
                    </a>
                  )}
          </div>
        </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-8 border border-red-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in My Learning Journey?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm constantly learning and working on new projects to improve my DevOps skills. Let's connect to share knowledge, 
              collaborate on projects, or discuss the latest technologies in cloud and infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                View All Projects
              </button>
              <button className="border-2 border-orange-500 text-orange-400 font-semibold px-8 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
                Let's Learn Together
              </button>
        </div>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-800 rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {selectedProject.longDescription}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-400 text-sm px-3 py-1 rounded-full border border-red-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors duration-300"
                >
                  View on GitHub
                </a>
              )}
              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-6 py-2 rounded-lg transition-colors duration-300"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
} 