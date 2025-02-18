import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaBook, FaVideo, FaQuestionCircle, FaChevronRight } from 'react-icons/fa';

const categories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: FaBook,
    articles: [
      {
        id: 1,
        title: 'Quick Start Guide',
        content: 'Learn how to set up your first campaign in under 5 minutes.'
      },
      {
        id: 2,
        title: 'Platform Overview',
        content: 'Understand the key features and capabilities of Adbot.AI.'
      },
      {
        id: 3,
        title: 'Account Setup',
        content: 'Configure your account settings and preferences.'
      }
    ]
  },
  {
    id: 'tutorials',
    title: 'Video Tutorials',
    icon: FaVideo,
    articles: [
      {
        id: 4,
        title: 'Creating Your First Ad',
        content: 'Step-by-step guide to creating an effective ad campaign.'
      },
      {
        id: 5,
        title: 'Advanced Analytics',
        content: 'Deep dive into campaign performance metrics and optimization.'
      },
      {
        id: 6,
        title: 'A/B Testing Guide',
        content: 'Learn how to run effective split tests for your ads.'
      }
    ]
  },
  {
    id: 'faq',
    title: 'FAQ',
    icon: FaQuestionCircle,
    articles: [
      {
        id: 7,
        title: 'Billing & Subscription',
        content: 'Common questions about billing, plans, and payments.'
      },
      {
        id: 8,
        title: 'Platform Support',
        content: 'Which social media platforms are supported and how to connect them.'
      },
      {
        id: 9,
        title: 'Troubleshooting',
        content: 'Solutions to common issues and error messages.'
      }
    ]
  }
];

const HelpContent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredCategories = categories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.articles.length > 0);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setSelectedCategory(null);
    setSelectedArticle(null);
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-6">
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {selectedArticle ? (
          <div>
            <button
              onClick={() => setSelectedArticle(null)}
              className="text-blue-600 mb-4 flex items-center"
            >
              <FaChevronRight className="transform rotate-180 mr-2" />
              Back to articles
            </button>
            <h3 className="text-xl font-semibold mb-4">{selectedArticle.title}</h3>
            <p className="text-gray-600">{selectedArticle.content}</p>
          </div>
        ) : selectedCategory ? (
          <div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-blue-600 mb-4 flex items-center"
            >
              <FaChevronRight className="transform rotate-180 mr-2" />
              Back to categories
            </button>
            <h3 className="text-xl font-semibold mb-4">{selectedCategory.title}</h3>
            <div className="space-y-4">
              {selectedCategory.articles.map((article) => (
                <motion.div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <h4 className="font-medium text-gray-900">{article.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{article.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {(searchQuery ? filteredCategories : categories).map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ y: -5 }}
                className="bg-white border rounded-lg p-6 cursor-pointer hover:shadow-lg"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <category.icon className="text-2xl text-blue-600" />
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>
                <ul className="space-y-2">
                  {category.articles.slice(0, 3).map((article) => (
                    <li
                      key={article.id}
                      className="flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <FaChevronRight className="mr-2 text-sm" />
                      <span>{article.title}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpContent;