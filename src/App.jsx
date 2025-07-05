import React from 'react';
import ThemeProvider from './context/ThemeContext';
import './index.css';

// Simple homepage component for now
function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-bureau-purple to-bureau-pink flex items-center justify-center">
                <span className="text-white font-bold">PB</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                The Pay Bureau
              </span>
            </div>
            <button className="bg-gradient-to-r from-bureau-purple to-bureau-pink text-white px-6 py-2 rounded-xl font-medium hover:opacity-90 transition-opacity">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-bureau-purple via-bureau-pink to-bureau-peach text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            The Complete
            <span className="block text-yellow-200">Compliance Platform</span>
            for Payroll Professionals
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Automate pension compliance, track HMRC registrations, streamline employee onboarding, 
            and manage your entire payroll consultancy with our comprehensive Flow suite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-bureau-purple px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors">
              Start Free Trial
            </button>
            <button className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Flow Suite
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Six powerful products that work together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bureau-purple to-bureau-pink rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">TPR</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">TPRFlow</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Automate pension re-enrolment cycles and compliance tracking. Never miss a TPR deadline again.
              </p>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Live
              </span>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bureau-pink to-bureau-peach rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">HMR</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">HMRCFlow</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Track new business registrations and PAYE setup deadlines seamlessly.
              </p>
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Beta
              </span>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bureau-peach to-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">TEA</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">TeamFlow</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Streamline employee onboarding with automated workflows and document collection.
              </p>
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Beta
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-bureau-purple to-bureau-pink flex items-center justify-center">
              <span className="text-white font-bold">PB</span>
            </div>
            <span className="text-xl font-bold">The Pay Bureau</span>
          </div>
          <p className="text-gray-400 mb-6">
            The complete compliance platform for payroll professionals
          </p>
          <div className="text-gray-400 text-sm">
            © 2025 The Pay Bureau. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;