import React from 'react';
import { Target, Settings, Smartphone, Laptop, Palette, ClipboardList } from 'lucide-react';

// Main App component for the Services page.
const App = () => {
  return (
    <div className="bg-slate-50 pt-44 mb-16 min-h-screen">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Hero Section for Services Page */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 tracking-tight">Our Services: Unlock Your Business Potential</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Serious about scaling? Whether you're battling messy workflows or gearing up for bold growth, we bring the clarity, tools, and firepower to move you forward. No fluff. Just real results.
          </p>
        </div>

        {/* Services Grid with 2 columns on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

          {/* Service Card: Strategic Business Planning */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-indigo-600 text-white">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Strategic Business Planning</h2>
            </div>
            <p className="text-gray-600">
              Set your sights higher. We help ambitious businesses define their market edge and build bulletproof strategies that drive measurable growth.
            </p>
            <ul className="text-gray-500 text-sm mt-4 space-y-1 list-inside list-disc">
              <li>Establishing clear business objectives and actionable strategies.</li>
              <li>Conducting in-depth market and competitor analysis.</li>
              <li>Developing robust plans for sustainable expansion and market leadership.</li>
            </ul>
          </div>

          {/* Service Card: Process Optimisation & Efficiency */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-teal-600 text-white">
                <Settings size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Process Optimisation & Efficiency</h2>
            </div>
            <p className="text-gray-600">
              Tangled workflows? We don’t just optimise - we overhaul. Our process improvements slash inefficiencies, cut costs, and unlock room to scale.
            </p>
            <ul className="text-gray-500 text-sm mt-4 space-y-1 list-inside list-disc">
              <li>Identifying and resolving operational bottlenecks.</li>
              <li>Improving efficiency and contributing to cost reduction.</li>
              <li>Implementing strategies for effective business scalability.</li>
              <li>Applying proven methodologies and modern technology for enhanced performance.</li>
            </ul>
          </div>
          
          {/* Service Card: Digital Product & App Development */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-purple-600 text-white">
                <Smartphone size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Digital Product & App Development</h2>
            </div>
            <p className="text-gray-600">
              Your boldest app ideas - built right. From lean MVPs to scalable platforms, we craft sleek, high-performing iOS and Android mobile apps that actually get used.
            </p>
            <ul className="text-gray-500 text-sm mt-4 space-y-1 list-inside list-disc">
              <li>Designing and developing professional iOS & Android mobile applications.</li>
              <li>Creating user-centric digital products for enhanced interaction.</li>
              <li>Focusing on seamless user experiences that drive desired actions.</li>
            </ul>
          </div>

          {/* Service Card: Web Design & Development */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-orange-600 text-white">
                <Laptop size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Web Design & Development</h2>
            </div>
            <p className="text-gray-600">
              Establish a powerful online presence. We build dynamic, user-friendly websites that are visually compelling and engineered for results.
            </p>
            <ul className="text-gray-500 text-sm mt-4 space-y-1 list-inside list-disc">
              <li>Crafting visually appealing and intuitive website designs.</li>
              <li>Developing responsive sites aligned with your specific business objectives.</li>
              <li>Creating digital platforms that stand out and achieve measurable outcomes.</li>
            </ul>
          </div>

          {/* Service Card: Branding & Creative Design */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-pink-600 text-white">
                <Palette size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Branding & Creative Design</h2>
            </div>
            <p className="text-gray-600">
              Build a distinct and memorable brand identity. From foundational branding to immersive user experiences, we create visuals that resonate and captivate your audience.
            </p>
            <ul className="text-gray-500 text-sm mt-4 space-y-1 list-inside list-disc">
              <li>Developing strong visual identities (logos, branding, marketing materials).</li>
              <li>Designing intuitive user interfaces (UI) and compelling experiences (UX).</li>
              <li>Providing professional photography for brand and event needs.</li>
              <li>Offering expert post-production for image enhancement.</li>
            </ul>
          </div>
          
          {/* Service Card: End-to-End Project Leadership */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-cyan-600 text-white">
                <ClipboardList size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">End-to-End Project Leadership</h2>
            </div>
            <p className="text-gray-600">
              Navigate complex projects with confidence. We lead your key initiatives from concept to successful launch, ensuring disciplined execution and quality delivery.
            </p>
            <ul className="text-gray-500 text-sm mt-4 space-y-1 list-inside list-disc">
              <li>Comprehensive project management from inception to successful completion.</li>
              <li>Oversight of all project phases - planning, design, development, and market integration.</li>
              <li>Ensuring efficient delivery and impactful results, within defined timelines and budgets.</li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Full-width CTA Section with Gradient */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 px-6 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to make it happen?</h2>
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto mb-8">
            Let's build something great together. Get in touch to start.
          </p>
          <a href="/contact" className="inline-block px-10 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Contact Us Now
          </a>
      </div>
    </div>
  );
};

export default App;
