import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRobot, FaPlus, FaChartLine, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import AdsList from '../components/dashboard/AdsList';
import CreateAd from '../components/dashboard/CreateAd';
import Analytics from '../components/dashboard/Analytics';
import Settings from '../components/dashboard/Settings';

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-200 ease-in-out`}>
        <div className="flex items-center space-x-2 px-6 py-4 border-b">
          <FaRobot className="text-blue-600 text-2xl" />
          <span className="text-xl font-bold">Adbot.AI</span>
        </div>
        
        <nav className="px-4 py-6">
          <Link to="/dashboard" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">
            <FaChartLine />
            <span>Dashboard</span>
          </Link>
          <Link to="/dashboard/create" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg mt-2">
            <FaPlus />
            <span>Create Ad</span>
          </Link>
          <Link to="/dashboard/analytics" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg mt-2">
            <FaChartLine />
            <span>Analytics</span>
          </Link>
          <Link to="/dashboard/settings" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg mt-2">
            <FaCog />
            <span>Settings</span>
          </Link>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-gray-700 hover:text-red-600 w-full px-4 py-2"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${sidebarOpen ? 'ml-64' : 'ml-0'} transition-margin duration-200 ease-in-out`}>
        <main className="p-8">
          <Routes>
            <Route path="/" element={<AdsList />} />
            <Route path="/create" element={<CreateAd />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;