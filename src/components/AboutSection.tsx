'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const experiences = [
    {
      year: "2024 - Present",
      title: "DevOps Engineering Student",
      company: "Self-Learning & Academic Projects",
      description: "Learning infrastructure automation, CI/CD pipelines, and cloud-native solutions through hands-on projects"
    },
    {
      year: "2023 - 2024",
      title: "Cloud & DevOps Learning",
      company: "Personal Projects & Courses",
      description: "Started exploring cloud platforms and containerization technologies through online courses and tutorials"
    },
    {
      year: "2022 - 2023",
      title: "Programming Fundamentals",
      company: "Academic Studies",
      description: "Built foundation in programming and software development concepts"
    }
  ];

  const skills = [
    { name: "Infrastructure as Code", level: 65 },
    { name: "CI/CD Pipelines", level: 60 },
    { name: "Cloud Architecture", level: 55 },
    { name: "Container Orchestration", level: 50 },
    { name: "Monitoring & Observability", level: 45 },
    { name: "Security & Compliance", level: 40 }
  ];

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
                I'm a DevOps engineering student passionate about learning automation and infrastructure optimization. 
                My journey began with curiosity about how modern applications are deployed and scaled, 
                which led me to explore cloud platforms, containerization, and infrastructure as code.
              </p>
              <p className="text-lg leading-relaxed">
                I believe in the power of automation to transform how we build and deliver software. 
                My learning approach combines hands-on projects with cloud platforms (AWS, Azure, GCP), 
                containerization technologies (Docker, Kubernetes), and modern CI/CD practices.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not studying or working on projects, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge through technical writing 
                and community engagement.
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
              I'm passionate about DevOps and always eager to learn from others. Let's connect to share knowledge, 
              collaborate on projects, or discuss the latest in cloud and infrastructure technologies.
            </p>
            <button className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300">
              Let's Connect
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 