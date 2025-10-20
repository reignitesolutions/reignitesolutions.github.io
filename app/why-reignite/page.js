import React from 'react';
import { Lightbulb, Users, Leaf, ArrowRight, TrendingUp } from 'lucide-react';

// Main App component to be rendered.
// This component displays the "Why Reignite?" page with a consistent, responsive design.
const App = () => {
  return (
    <div className="bg-gray-50 pt-48 min-h-screen">
      <div className="container mx-auto max-w-7xl px-6">

        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Why Reignite?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reignite is more than just a platform; it's a movement to foster creativity, collaboration, and personal growth.
          </p>
        </header>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

          {/* Feature Card 1: Community */}
          <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
              <Users size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Community Driven</h2>
              <p className="mt-2 text-gray-600">
                Join a vibrant community of creators, thinkers, and innovators who inspire and support one another.
              </p>
            </div>
          </div>

          {/* Feature Card 2: Growth */}
          <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
              <TrendingUp size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Accelerate Your Growth</h2>
              <p className="mt-2 text-gray-600">
                Access curated resources and expert insights to help you rapidly develop your skills and achieve your goals.
              </p>
            </div>
          </div>

          {/* Feature Card 3: Innovation */}
          <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-purple-500 text-white">
              <Lightbulb size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Spark Innovation</h2>
              <p className="mt-2 text-gray-600">
                Discover new ideas and perspectives through shared projects, discussions, and creative challenges.
              </p>
            </div>
          </div>

          {/* Feature Card 4: Sustainability */}
          <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-500 text-white">
              <Leaf size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Build Sustainable Habits</h2>
              <p className="mt-2 text-gray-600">
                Reignite helps you stay motivated and build lasting habits that will benefit you long-term.
              </p>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default App;
