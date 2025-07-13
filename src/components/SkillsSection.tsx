'use client';

import { useState, useEffect } from 'react';

interface Skill {
  name: string;
  category: string;
  logo: string;
  proficiency: number; // 1-100
  description: string;
}

interface Category {
  name: string;
  color: string;
  icon: string;
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('Cloud & Infrastructure');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skills: Skill[] = [
    // Cloud & Infrastructure
    { 
      name: 'AWS', 
      category: 'Cloud & Infrastructure', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      proficiency: 70,
      description: 'Cloud computing services and infrastructure management'
    },
    { 
      name: 'Azure', 
      category: 'Cloud & Infrastructure', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original-wordmark.svg',
      proficiency: 65,
      description: 'Microsoft cloud platform and services'
    },
    { 
      name: 'Google Cloud', 
      category: 'Cloud & Infrastructure', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original-wordmark.svg',
      proficiency: 60,
      description: 'Google cloud platform and services'
    },
    { 
      name: 'Terraform', 
      category: 'Cloud & Infrastructure', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original-wordmark.svg',
      proficiency: 68,
      description: 'Infrastructure as Code tool'
    },
    { 
      name: 'Ansible', 
      category: 'Cloud & Infrastructure', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ansible/ansible-original-wordmark.svg',
      proficiency: 65,
      description: 'Configuration management and automation'
    },
    { 
      name: 'Docker', 
      category: 'Cloud & Infrastructure', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
      proficiency: 72,
      description: 'Containerization platform'
    },
    { 
      name: 'Kubernetes', 
      category: 'Cloud & Infrastructure', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain-wordmark.svg',
      proficiency: 55,
      description: 'Container orchestration platform'
    },
    { 
      name: 'Helm', 
      category: 'Cloud & Infrastructure', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/helm/helm-original-wordmark.svg',
      proficiency: 50,
      description: 'Kubernetes package manager'
    },
    
    // CI/CD & Monitoring
    { 
      name: 'GitLab', 
      category: 'CI/CD & Monitoring', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original-wordmark.svg',
      proficiency: 70,
      description: 'DevOps platform with CI/CD pipelines'
    },
    { 
      name: 'Jenkins', 
      category: 'CI/CD & Monitoring', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg',
      proficiency: 68,
      description: 'Automation server for CI/CD'
    },
    { 
      name: 'GitHub Actions', 
      category: 'CI/CD & Monitoring', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg',
      proficiency: 65,
      description: 'CI/CD automation platform'
    },
    { 
      name: 'Prometheus', 
      category: 'CI/CD & Monitoring', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/prometheus/prometheus-original-wordmark.svg',
      proficiency: 45,
      description: 'Monitoring and alerting toolkit'
    },
    { 
      name: 'Grafana', 
      category: 'CI/CD & Monitoring', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original-wordmark.svg',
      proficiency: 50,
      description: 'Data visualization and monitoring'
    },
    { 
      name: 'Elasticsearch', 
      category: 'CI/CD & Monitoring', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/elasticsearch/elasticsearch-original-wordmark.svg',
      proficiency: 40,
      description: 'Search and analytics engine'
    },
    
    // Programming & Scripting
    { 
      name: 'Python', 
      category: 'Programming & Scripting', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg',
      proficiency: 75,
      description: 'Programming language for automation and scripting'
    },
    { 
      name: 'Bash/Shell', 
      category: 'Programming & Scripting', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg',
      proficiency: 70,
      description: 'Shell scripting and command line automation'
    },
    { 
      name: 'JavaScript', 
      category: 'Programming & Scripting', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      proficiency: 65,
      description: 'Web development and automation scripting'
    },
    { 
      name: 'Node.js', 
      category: 'Programming & Scripting', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
      proficiency: 60,
      description: 'JavaScript runtime for backend development'
    },
    { 
      name: 'Go', 
      category: 'Programming & Scripting', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original-wordmark.svg',
      proficiency: 55,
      description: 'Programming language for cloud-native applications'
    },
    { 
      name: 'PowerShell', 
      category: 'Programming & Scripting', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/powershell/powershell-original.svg',
      proficiency: 65,
      description: 'Windows automation and scripting'
    },
    
    // Database
    { 
      name: 'MySQL', 
      category: 'Database', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
      proficiency: 70,
      description: 'Relational database management system'
    },
    { 
      name: 'MongoDB', 
      category: 'Database', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
      proficiency: 65,
      description: 'NoSQL document database'
    },
    { 
      name: 'PostgreSQL', 
      category: 'Database', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',
      proficiency: 60,
      description: 'Advanced open-source database'
    },
    { 
      name: 'Redis', 
      category: 'Database', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg',
      proficiency: 55,
      description: 'In-memory data structure store'
    },
    
    // Operating Systems & Tools
    { 
      name: 'Linux', 
      category: 'Operating Systems & Tools', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
      proficiency: 75,
      description: 'Open-source operating system'
    },
    { 
      name: 'Ubuntu', 
      category: 'Operating Systems & Tools', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ubuntu/ubuntu-plain-wordmark.svg',
      proficiency: 70,
      description: 'Linux distribution for servers and desktops'
    },
    { 
      name: 'CentOS', 
      category: 'Operating Systems & Tools', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/centos/centos-original-wordmark.svg',
      proficiency: 65,
      description: 'Enterprise Linux distribution'
    },
    { 
      name: 'Git', 
      category: 'Operating Systems & Tools', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg',
      proficiency: 80,
      description: 'Version control system'
    },
    { 
      name: 'Nginx', 
      category: 'Operating Systems & Tools', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg',
      proficiency: 60,
      description: 'Web server and reverse proxy'
    },
    { 
      name: 'Apache', 
      category: 'Operating Systems & Tools', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original-wordmark.svg',
      proficiency: 55,
      description: 'Web server software'
    },
    { 
      name: 'Vagrant', 
      category: 'Operating Systems & Tools', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vagrant/vagrant-original-wordmark.svg',
      proficiency: 50,
      description: 'Development environment management'
    }
  ];

  const categories: Category[] = [
    { name: 'Cloud & Infrastructure', color: 'from-red-500 to-red-600', icon: '☁️' },
    { name: 'CI/CD & Monitoring', color: 'from-orange-500 to-orange-600', icon: '🔄' },
    { name: 'Programming & Scripting', color: 'from-red-500 to-red-600', icon: '💻' },
    { name: 'Database', color: 'from-orange-500 to-orange-600', icon: '🗄️' },
    { name: 'Operating Systems & Tools', color: 'from-red-500 to-red-600', icon: '🛠️' }
  ];

  const getSkillsByCategory = (categoryName: string) => {
    return skills.filter(skill => skill.category === categoryName);
  };

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category?.color || 'from-red-500 to-red-600';
  };

  return (
    <section className="w-full py-16 bg-black" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl font-bold text-red-500 mb-4">My Skills & Expertise</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various DevOps and development technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-6"></div>
        </div>

        {/* Category Navigation */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.name
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {getSkillsByCategory(activeCategory).map((skill, index) => (
                  <div 
                    key={skill.name} 
              className="group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Proficiency Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-700">
                <div 
                  className={`h-full bg-gradient-to-r ${getCategoryColor(activeCategory)} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>

              {/* Skill Content */}
              <div className="text-center">
                <div className="flex justify-center items-center mb-4">
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                    className="w-16 h-16 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300 transform group-hover:scale-110"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const nextElement = target.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'block';
                          }
                        }}
                      />
                  <span className="text-4xl hidden">{skill.name.charAt(0)}</span>
                    </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                  {skill.description}
                </p>
                
                <div className="flex items-center justify-center">
                  <span className="text-xs text-gray-500 mr-2">Proficiency:</span>
                  <span className="text-sm font-medium text-orange-400">
                    {skill.proficiency}%
                  </span>
                  </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
} 