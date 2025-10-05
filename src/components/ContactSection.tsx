'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link as primary method
      const mailtoLink = `mailto:jatinthakur51385@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="w-full py-16" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-500 mb-4">Get in touch</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Is there something on your mind you&apos;d like to talk about? Whether it&apos;s related to DevOps, 
            infrastructure automation, or just a casual conversation, I am here and ready to listen. 
            Please don&apos;t hesitate to reach out to me at any time. 
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
                  placeholder="Enter your first name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
                  placeholder="Enter your last name"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
                placeholder="Enter your email address"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
                placeholder="What&apos;s this about?"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400 resize-none"
                placeholder="Tell me more about your project or inquiry..."
                required
                disabled={isSubmitting}
              />
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg">
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg">
                Failed to send message. Please try again or contact me directly.
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          
<div className="mt-8 pt-8 border-t border-gray-700 text-center">
  <h3 className="text-lg font-semibold mb-4 text-gray-300">Connect with me</h3>

  <div className="flex flex-wrap justify-center gap-6">
    {/* GitHub */}
    <a
      href="https://github.com/JATIN4931"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
    >
      <svg
        className="w-6 h-6 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 
        3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234
        c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756
        -1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237
        1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604
        -2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221
        -.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266
        1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 
        2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176
        .77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921
        .43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 
        4.765-1.589 8.199-6.086 8.199-11.386 
        0-6.627-5.373-12-12-12z" />
      </svg>
      <span className="text-sm sm:text-base">GitHub</span>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/jatin-kumar-9169b9286"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
    >
      <svg
        className="w-6 h-6 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 
        1.77 24h20.46C23.2 24 24 23.23 24 22.27V1.73C24 .77 
        23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 
        7.43a2.07 2.07 0 110-4.13 2.07 2.07 0 010 4.13zM20.45 
        20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 
        1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 
        1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28z" />
      </svg>
      <span className="text-sm sm:text-base">LinkedIn</span>
    </a>

    {/* Instagram */}
    <a
      href="https://instagram.com/jatin_thakur616"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-gray-400 hover:text-pink-500 transition-colors"
    >
      <svg
        className="w-6 h-6 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 
        4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 
        1.265.069 1.645.069 4.849 0 3.205-.012 
        3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 
        4.919-1.266.058-1.644.07-4.85.07-3.204 
        0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699
        -4.919-4.92-.058-1.265-.07-1.644-.07-4.849 
        0-3.204.013-3.583.07-4.849.149-3.227 
        1.664-4.771 4.919-4.919C8.416 2.175 
        8.796 2.163 12 2.163zM12 5.838a6.162 
        6.162 0 100 12.324 6.162 6.162 0 000-12.324z
        m6.406-1.683a1.44 1.44 0 11-2.881 
        0 1.44 1.44 0 012.881 0z" />
      </svg>
      <span className="text-sm sm:text-base">Instagram</span>
    </a>

    {/* Discord */}
    <a
      href="https://discord.com/users/jinsakai2179"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-gray-400 hover:text-indigo-400 transition-colors"
    >
      <svg
        className="w-6 h-6 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.317 4.37a19.8 19.8 0 00-4.885-1.515
        .075.075 0 00-.079.037c-.211.375-.445.865-.609 
        1.25-1.845-.276-3.68-.276-5.487 0-.164-.393-.406-.874-.618-1.25a.077.077 
        0 00-.079-.037 19.74 19.74 0 00-4.885 1.515.07.07 
        0 00-.032.028C.533 9.046-.319 13.58.099 18.058a.082.082 
        0 00.031.056c2.053 1.508 4.041 2.423 5.993 3.03a.078.078 
        0 00.084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 
        0 00-.042-.106c-.653-.247-1.274-.55-1.872-.892a.077.077 
        0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 
        0 01.079-.011c3.928 1.793 8.18 1.793 12.062 0a.074.074 
        0 01.079.01c.12.099.246.198.373.292a.077.077 
        0 01-.007.128 12.3 12.3 0 01-1.873.892.076.076 
        0 00-.04.107c.36.698.772 1.363 1.225 
        1.993a.076.076 0 00.084.029c1.961-.607 
        3.95-1.522 6.002-3.03a.077.077 
        0 00.032-.055c.5-5.177-.838-9.674-3.548-13.66a.061.061 
        0 00-.031-.029zM8.02 15.33c-1.183 0-2.157-1.086-2.157-2.419 
        0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.095 
        2.157 2.419-.019 1.333-.956 2.419-2.157 2.419zm7.975 
        0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 
        2.157-2.419 1.211 0 2.176 1.095 2.157 2.419 
        0 1.333-.956 2.419-2.157 2.419z" />
      </svg>
      <span className="text-sm sm:text-base">Discord</span>
    </a>
  </div>
</div>

        </div>
      </div>
    </section>
  );
} 