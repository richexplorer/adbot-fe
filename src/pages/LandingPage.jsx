import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRobot, FaChartLine, FaRegLightbulb } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaRobot className="text-blue-600 text-3xl" />
          <span className="text-2xl font-bold text-gray-800">Adbot.AI</span>
        </div>
        <div className="space-x-4">
          <Link to="/login" className="text-blue-600 hover:text-blue-700">Login</Link>
          <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Automate Your Ad Creation with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create, optimize, and manage your social media ads across multiple platforms with our AI-powered automation.
          </p>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 inline-block"
          >
            Start Free Trial
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <FaRobot className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Creation</h3>
            <p className="text-gray-600">Automatically generate engaging ad creatives from your brand assets.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <FaChartLine className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Analytics</h3>
            <p className="text-gray-600">Track performance metrics and optimize your campaigns in real-time.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <FaRegLightbulb className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">A/B Testing</h3>
            <p className="text-gray-600">Automatically test different variations to maximize your ROI.</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;