import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

/**
 * Home page component
 */
const Home = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome Raphael Task Manager
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          A modern React application built with Tailwind CSS
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/tasks">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Link>
          <Link to="/api">
            <Button variant="secondary" size="lg">
              View API Data
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Task Management">
          <p className="text-gray-600 dark:text-gray-400">
            Create, manage, and organize your tasks efficiently. Mark tasks as complete,
            filter by status, and keep track of your progress.
          </p>
        </Card>

        <Card title="API Integration">
          <p className="text-gray-600 dark:text-gray-400">
            Fetch and display data from external APIs with loading states, error handling,
            and search functionality.
          </p>
        </Card>

        <Card title="Dark Mode">
          <p className="text-gray-600 dark:text-gray-400">
            Toggle between light and dark themes for comfortable viewing in any lighting
            condition. Your preference is saved automatically.
          </p>
        </Card>

        <Card title="Responsive Design">
          <p className="text-gray-600 dark:text-gray-400">
            Fully responsive layout that works seamlessly on mobile, tablet, and desktop
            devices using Tailwind CSS.
          </p>
        </Card>

        <Card title="Local Storage">
          <p className="text-gray-600 dark:text-gray-400">
            Your tasks and preferences are automatically saved to local storage, so you
            never lose your data.
          </p>
        </Card>

        <Card title="Modern Stack">
          <p className="text-gray-600 dark:text-gray-400">
            Built with React 18, Vite, React Router, and Tailwind CSS for a fast and
            modern development experience.
          </p>
        </Card>
      </div>

      {/* Tech Stack Section */}
      <Card title="Technology Stack">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl mb-2">⚛️</div>
            <div className="font-semibold">React 18</div>
          </div>
          <div>
            <div className="text-3xl mb-2">⚡</div>
            <div className="font-semibold">Vite</div>
          </div>
          <div>
            <div className="text-3xl mb-2">🎨</div>
            <div className="font-semibold">Tailwind CSS</div>
          </div>
          <div>
            <div className="text-3xl mb-2">🧭</div>
            <div className="font-semibold">React Router</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
