'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const experiences = [
    {
      year: "Aug 2024 - Present",
      title: "DevOps & ML Engineer",
      company: "Personal Projects & Learning",
      description: "Currently working on DevOps practices while continuing ML projects. Building CI/CD pipelines for ML models, containerizing applications with Docker, and learning Kubernetes orchestration."
    },
    {
      year: "Jan 2024 - Jul 2024",
      title: "Machine Learning Developer",
      company: "Academic & Personal Projects",
      description: "Developed machine learning models using Python, TensorFlow, and scikit-learn. Built predictive models, worked on data preprocessing, and created ML pipelines for various problem domains."
    },
    {
      year: "Jun 2023 - Dec 2023",
      title: "Full Stack Web Developer",
      company: "Freelance & Personal Projects",
      description: "Built responsive web applications using React, Node.js, and databases. Created portfolio websites, e-commerce platforms, and learned modern web development frameworks and deployment practices."
    },
    {
      year: "Sep 2022 - May 2023",
      title: "Programming Student",
      company: "College - Computer Science",
      description: "Started programming fundamentals in college with C, C++, and Java. Learned data structures, algorithms, object-oriented programming, and built foundation for software development."
    }
  ];

  const skills = [
    { name: "Programming & Development", level: 85 },
    { name: "Web Development (Full Stack)", level: 80 },
    { name: "Machine Learning & AI", level: 75 },
    { name: "DevOps & Infrastructure", level: 60 },
    { name: "Containerization (Docker)", level: 65 },
    { name: "CI/CD Pipelines", level: 55 }
  ];

  const handleConnectClick = () => {
    // LinkedIn messaging URL - opens directly to chat
    const linkedinMessageUrl = 'https://www.linkedin.com/messaging/compose/?recipient=jatin-kumar-9169b9286';
    
    // Open LinkedIn messaging in a new tab
    window.open(linkedinMessageUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-gray-900" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-red-500 mb-4">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate DevOps engineer dedicated to building scalable, reliable infrastructure that empowers teams to deliver faster and more confidently.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-orange-400 mb-6">My Journey</h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                My tech journey started in college with programming fundamentals - learning C, C++, and Java through 
                academic coursework. What began as classroom assignments quickly turned into a passion for problem-solving 
                and building software solutions.
              </p>
              <p className="text-lg leading-relaxed">
                After mastering programming basics, I ventured into web development, creating full-stack applications 
                with React and Node.js. Building real-world projects like portfolio websites and e-commerce platforms 
                taught me the importance of user experience and scalable architecture.
              </p>
              <p className="text-lg leading-relaxed">
                My curiosity led me to explore machine learning and AI, where I discovered the power of data-driven 
                solutions. Working with Python, TensorFlow, and scikit-learn opened up a whole new world of predictive 
                modeling and intelligent systems.
              </p>
              <p className="text-lg leading-relaxed">
                Currently, I&apos;m diving deep into DevOps practices, learning how to bridge the gap between 
                development and operations. Combining my ML knowledge with infrastructure automation, I&apos;m building 
                CI/CD pipelines for ML models and exploring containerization with Docker and Kubernetes.
              </p>
            </div>

            {/* Key Values */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-semibold text-white mb-2">Automation First</h4>
                <p className="text-sm text-gray-400">Eliminate manual tasks through intelligent automation</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-orange-500">
                <h4 className="font-semibold text-white mb-2">Security Minded</h4>
                <p className="text-sm text-gray-400">Build security into every layer of infrastructure</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-semibold text-white mb-2">Scalable Design</h4>
                <p className="text-sm text-gray-400">Architect solutions that grow with your needs</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-orange-500">
                <h4 className="font-semibold text-white mb-2">Continuous Learning</h4>
                <p className="text-sm text-gray-400">Stay current with emerging technologies</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-6">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-gray-700"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 bg-red-500 rounded-full transform -translate-x-2"></div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-sm text-orange-400 font-medium">{exp.year}</div>
                      <h4 className="text-lg font-semibold text-white mt-1">{exp.title}</h4>
                      <div className="text-sm text-gray-400 mb-2">{exp.company}</div>
                      <p className="text-sm text-gray-300">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Progress */}
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-6">Core Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-orange-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
            <h3 className="text-2xl font-bold text-white mb-4">Interested in Learning Together?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I&apos;m passionate about DevOps and always eager to learn from others. Let&apos;s connect to share knowledge, 
              collaborate on projects, or discuss the latest in cloud and infrastructure technologies.
            </p>
            <button 
              onClick={handleConnectClick}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
            >
              Let&apos;s Connect
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 