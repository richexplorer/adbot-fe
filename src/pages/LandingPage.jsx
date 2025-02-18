import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRobot, FaChartLine, FaRegLightbulb, FaUpload, FaMagic, FaChartBar, FaPlus, FaMinus } from 'react-icons/fa';
import { useState } from 'react';

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How does Adbot.AI's automation work?",
      answer: "Adbot.AI uses advanced AI algorithms to analyze your brand assets and automatically generate optimized ad creatives across multiple platforms. It learns from performance data to continuously improve results."
    },
    {
      question: "Which social media platforms are supported?",
      answer: "We currently support Facebook, Instagram, Twitter, and Reddit. We're constantly expanding our platform integrations based on user needs."
    },
    {
      question: "How much time can I save using Adbot.AI?",
      answer: "Most users report saving 70-80% of their ad creation and management time. What usually takes hours can be accomplished in minutes with our AI automation."
    },
    {
      question: "Can I customize the AI-generated ads?",
      answer: "Yes! While our AI creates optimized ads automatically, you have full control to review and customize any aspect before publishing."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start."
    }
  ];

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

        {/* How it Works Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUpload className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Upload Assets</h3>
              <p className="text-gray-600">Upload your brand images, logos, and content to get started.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMagic className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. AI Generation</h3>
              <p className="text-gray-600">Our AI creates optimized ad variations for each platform.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartBar className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Optimize & Scale</h3>
              <p className="text-gray-600">Monitor performance and let AI optimize your campaigns.</p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <FaMinus className="text-blue-600" />
                  ) : (
                    <FaPlus className="text-blue-600" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Ad Creation?</h2>
            <p className="text-xl text-gray-600 mb-8">Join thousands of businesses using Adbot.AI to scale their advertising</p>
            <Link
              to="/login"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 inline-block"
            >
              Start Your Free Trial
            </Link>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;