import { useEffect } from 'react';
import { HelpHub } from '@plgos/react';

const PLGHelpHub = () => {
  useEffect(() => {
    // Initialize PLG OS with your configuration
    window.plgos?.init({
      appId: 'your-plg-app-id',
      environment: 'production'
    });
  }, []);

  return (
    <HelpHub
      config={{
        primaryColor: '#2563eb', // blue-600
        position: 'bottom-right',
        categories: [
          {
            id: 'getting-started',
            title: 'Getting Started',
            articles: [
              {
                id: 'quick-start',
                title: 'Quick Start Guide',
                content: 'Learn how to set up your first campaign in under 5 minutes.'
              },
              {
                id: 'platform-overview',
                title: 'Platform Overview',
                content: 'Understand the key features and capabilities of Adbot.AI.'
              }
            ]
          },
          {
            id: 'ad-creation',
            title: 'Ad Creation',
            articles: [
              {
                id: 'create-first-ad',
                title: 'Creating Your First Ad',
                content: 'Step-by-step guide to creating an effective ad campaign.'
              },
              {
                id: 'ad-optimization',
                title: 'Ad Optimization',
                content: 'Learn how to optimize your ads for better performance.'
              }
            ]
          },
          {
            id: 'analytics',
            title: 'Analytics & Reporting',
            articles: [
              {
                id: 'performance-metrics',
                title: 'Understanding Performance Metrics',
                content: 'Deep dive into campaign performance metrics and analytics.'
              },
              {
                id: 'ab-testing',
                title: 'A/B Testing Guide',
                content: 'Learn how to run effective split tests for your ads.'
              }
            ]
          }
        ],
        theme: {
          light: {
            background: '#ffffff',
            text: '#111827',
            primary: '#2563eb'
          },
          dark: {
            background: '#1f2937',
            text: '#ffffff',
            primary: '#3b82f6'
          }
        }
      }}
    />
  );
};

export default PLGHelpHub;