import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaReddit, FaTwitter } from 'react-icons/fa';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  
  const handleComplete = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`w-1/3 h-2 rounded-full mx-1 ${
                    num <= step ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {step === 1 && "Let's connect your social accounts"}
              {step === 2 && "Upload your brand assets"}
              {step === 3 && "Choose your plan"}
            </h2>
          </div>

          {step === 1 && (
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-2 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600">
                <FaFacebook className="text-2xl text-blue-600" />
                <span>Connect Facebook</span>
              </button>
              <button className="flex items-center justify-center space-x-2 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600">
                <FaInstagram className="text-2xl text-pink-600" />
                <span>Connect Instagram</span>
              </button>
              <button className="flex items-center justify-center space-x-2 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600">
                <FaReddit className="text-2xl text-orange-600" />
                <span>Connect Reddit</span>
              </button>
              <button className="flex items-center justify-center space-x-2 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600">
                <FaTwitter className="text-2xl text-blue-400" />
                <span>Connect Twitter</span>
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <div className="text-gray-600">
                  <p className="mb-2">Drag and drop your brand assets here</p>
                  <p className="text-sm">or</p>
                  <button className="mt-2 text-blue-600 hover:text-blue-700">
                    Browse files
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <p className="text-3xl font-bold mb-4">$29<span className="text-gray-500 text-base">/mo</span></p>
                <ul className="space-y-2 mb-6">
                  <li>Up to 5 ads/month</li>
                  <li>Basic analytics</li>
                  <li>2 social platforms</li>
                </ul>
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg">
                  Select Plan
                </button>
              </div>
              
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow border-blue-600">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <p className="text-3xl font-bold mb-4">$79<span className="text-gray-500 text-base">/mo</span></p>
                <ul className="space-y-2 mb-6">
                  <li>Up to 20 ads/month</li>
                  <li>Advanced analytics</li>
                  <li>All social platforms</li>
                </ul>
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg">
                  Select Plan
                </button>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-3xl font-bold mb-4">$199<span className="text-gray-500 text-base">/mo</span></p>
                <ul className="space-y-2 mb-6">
                  <li>Unlimited ads</li>
                  <li>Custom analytics</li>
                  <li>Priority support</li>
                </ul>
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg">
                  Select Plan
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Back
              </button>
            )}
            <button
              onClick={() => step < 3 ? setStep(step + 1) : handleComplete()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ml-auto"
            >
              {step === 3 ? 'Complete Setup' : 'Continue'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Onboarding;