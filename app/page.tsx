'use client'

import { useState } from 'react';
import { FaLinkedin, FaGithub, FaLaptopCode, FaServer, FaCloud, FaBrain, FaCalendar } from 'react-icons/fa';
import CalendarModal from './components/CalendarModal';



export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Hossein Vahedi
          </h1>
          <p className="text-xl md:text-2xl font-medium text-indigo-600 dark:text-indigo-400 mb-8">
            AI-Equipped Full Stack Software Engineer
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.linkedin.com/in/hossein-vahedi-a9b19774/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
              <FaLinkedin className="inline-block w-7 h-7" />
            </a>
            <a href="https://github.com/HsnVahedi" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
              <FaGithub className="inline-block w-7 h-7" />
            </a>
          </div>
          <button 
            onClick={openModal}
            className="inline-flex mb-8 items-center px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
          >
            <FaCalendar className="mr-2" />
            Book a Meeting
          </button>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Building scalable and fault-tolerant web applications with speed and precision, 
            powered by modern technologies and Cursor AI.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills & Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FaLaptopCode className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              8+ years of experience building modern, responsive web interfaces.
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• ReactJS</li>
              <li>• TypeScript</li>
              <li>• NextJS</li>
              <li>• Tailwind CSS</li>
              <li>• Webpack</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FaServer className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              8+ years of experience developing robust backend services.
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Python</li>
              <li>• Django</li>
              <li>• PostgreSQL</li>
              <li>• Redis</li>
              <li>• API Design</li>
            </ul>
          </div>

          {/* Cloud */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FaCloud className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h3 className="text-xl font-semibold">Cloud</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              7+ years of experience with cloud platforms and infrastructure.
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• AWS (S3, Fargate, ECS, RDS, EKS, Lambda)</li>
              <li>• Google Cloud Platform</li>
              <li>• Microsoft Azure</li>
              <li>• Infrastructure as Code</li>
              <li>• CI/CD Pipelines</li>
            </ul>
          </div>

          {/* AI */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FaBrain className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h3 className="text-xl font-semibold">AI Integration</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Leveraging AI tools for enhanced productivity and innovation.
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Cursor AI for accelerated development</li>
              <li>• Machine Learning integration</li>
              <li>• ML models deployment</li>
              <li>• AI-powered features</li>
              <li>• ML workflow optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          My Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">
                TennisBuddies.club
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A web application for tennis players, allowing them to find partners by watching their videos.
                Connect with like-minded tennis enthusiasts based on skill level and playing style.
              </p>
              <a 
                href="https://tennisbuddies.club" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
              >
                Visit Website
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">
                FreeVideoSlicer.com
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A simple web application that allows users to extract several clips from their long video files.
                Easy-to-use interface for quick video editing without professional software.
              </p>
              <a 
                href="https://freevideoslicer.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Certifications
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <ul className="space-y-4">
            <li className="pb-4 border-b border-gray-200 dark:border-gray-700">
              <a 
                href="https://www.coursera.org/account/accomplishments/records/LN8KWCZ9GKP5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <h3 className="text-lg font-semibold">Structuring Machine Learning Projects</h3>
                <p className="text-gray-600 dark:text-gray-300">DeepLearning.AI</p>
              </a>
            </li>
            <li className="py-4 border-b border-gray-200 dark:border-gray-700">
              <a 
                href="https://www.coursera.org/account/accomplishments/verify/LFKK3BABVK9F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <h3 className="text-lg font-semibold">Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">DeepLearning.AI</p>
              </a>
            </li>
            <li className="py-4 border-b border-gray-200 dark:border-gray-700">
              <a 
                href="https://www.coursera.org/account/accomplishments/verify/FMJN27WGW2PY" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <h3 className="text-lg font-semibold">Neural Networks and Deep Learning</h3>
                <p className="text-gray-600 dark:text-gray-300">DeepLearning.AI</p>
              </a>
            </li>
            <li className="py-4 border-b border-gray-200 dark:border-gray-700">
              <a 
                href="https://www.coursera.org/account/accomplishments/verify/YWPSFVPEFGAC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <h3 className="text-lg font-semibold">Unsupervised Learning, Recommenders, Reinforcement Learning</h3>
                <p className="text-gray-600 dark:text-gray-300">DeepLearning.AI</p>
              </a>
            </li>
            <li className="py-4 border-b border-gray-200 dark:border-gray-700">
              <a 
                href="https://www.coursera.org/account/accomplishments/verify/97299F8AFVU3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <h3 className="text-lg font-semibold">Advanced Learning Algorithms</h3>
                <p className="text-gray-600 dark:text-gray-300">DeepLearning.AI</p>
              </a>
            </li>
            <li className="pt-4">
              <a 
                href="https://www.coursera.org/account/accomplishments/verify/UNH4ZY798ZZK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <h3 className="text-lg font-semibold">Supervised Machine Learning: Regression and Classification</h3>
                <p className="text-gray-600 dark:text-gray-300">DeepLearning.AI</p>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <button 
          onClick={openModal}
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
        >
          <FaCalendar className="mr-2" />
          Book a Meeting
        </button>
      </section>

      <footer className="py-8 px-4 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <p>© {new Date().getFullYear()} Hossein Vahedi. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.linkedin.com/in/hossein-vahedi-a9b19774/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
            <FaLinkedin className="inline-block w-5 h-5" />
          </a>
          <a href="https://github.com/HsnVahedi" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
            <FaGithub className="inline-block w-5 h-5" />
          </a>
        </div>
      </footer>

      {/* Calendar Modal */}
      <CalendarModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}