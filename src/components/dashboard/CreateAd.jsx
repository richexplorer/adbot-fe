import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaImage, FaFont } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CreateAd = () => {
  const [step, setStep] = useState(1);
  const [generating, setGenerating] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Ad</h1>

      <div className="bg-white rounded-lg shadow-lg p-6">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Images
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <FaImage className="mx-auto text-4xl text-gray-400 mb-4" />
                <div className="text-gray-600">
                  <p className="mb-2">Drag and drop your images here</p>
                  <p className="text-sm">or</p>
                  <button className="mt-2 text-blue-600 hover:text-blue-700">
                    Browse files
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Continue
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ad Text
              </label>
              <textarea
                className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your ad copy here..."
              />
            </div>

            <button
              onClick={handleGenerate}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              {generating ? 'Generating...' : 'Generate Ad'}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CreateAd;