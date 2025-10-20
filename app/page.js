// app/page.js

// This metadata is specific to the homepage.
// It will override the base metadata in layout.js.
export const metadata = {
  title: 'Home',
  description: 'Reignite helps businesses and individuals achieve their goals with expert web development, digital marketing, and branding solutions. Strategy. Design. Delivery. Done right.',
  keywords: "Reignite, web development, digital marketing, branding, SEO, responsive design, website template, business solutions, strategy, design, delivery",
  openGraph: {
    title: 'Reignite - MAKE IT BOLD. MAKE IT HAPPEN. | Web Development & Digital Marketing',
    description: 'Reignite helps businesses and individuals achieve their goals with expert web development, digital marketing, and branding solutions. Strategy. Design. Delivery. Done right.',
    url: 'https://www.yourcompany.com/',
    siteName: 'Reignite Solutions',
    type: 'website',
    images: [{
      url: '[PATH_TO_YOUR_SOCIAL_SHARE_IMAGE]/reignite-social-share.jpg',
      width: 800,
      height: 600,
      alt: 'Reignite Solutions social media share image',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reignite - MAKE IT BOLD. MAKE IT HAPPEN. | Web Development & Digital Marketing',
    description: 'Reignite helps businesses and individuals achieve their goals with expert web development, digital marketing, and branding solutions. Strategy. Design. Delivery. Done right.',
    creator: '@YourCompanyTwitterHandle',
    site: '@YourCompanyTwitterHandle',
    images: ['[PATH_TO_YOUR_SOCIAL_SHARE_IMAGE]/reignite-social-share.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <div className="container mx-auto font-sans text-gray-800 antialiased">

        {/* Hero Section: The First Thing a User Sees */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">
            <div className="inline-block text-black rounded-lg">
                <div className="z-10 max-w-full lg:max-w-7xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-9xl">
                        MAKE IT <span className="font-bold">BOLD.</span>
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-9xl mb-8">
                        MAKE IT <span className="font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#D62828] to-[#FDC500]">HAPPEN.</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-black font-bold max-w-5xl mx-auto">Strategic Consultancy & Digital Execution.<br />Built to Deliver Real Results.</p>
                </div>
            </div>
        </section>

        {/* Main Content Area: Below the Fold */}
        <div className="bg-white">

          {/* Section 1: Our Services */}
          <section id="services" className="py-20 md:py-24 px-6 bg-gray-50">
            <div className="container mx-auto max-w-7xl text-center">
              <h2 className="text-4xl font-bold mb-4">Our Services: Unlock Your Business Potential.</h2>
              <p className="text-lg text-center text-gray-700 leading-relaxed max-w-3xl mx-auto mb-2">
                Serious about scaling? Whether you're battling messy workflows or gearing up for bold growth, we bring the clarity, tools, and firepower to move you forward.
              </p>
              <p className="text-lg font-semibold text-gray-700 max-w-3xl mx-auto mb-12">
                No fluff. Just real results.
              </p>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Service 1: Strategic Business Planning */}
                <div className="bg-white p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg text-left">
                  <div className="flex items-start mb-4 space-x-4">
                    <span className="material-symbols-outlined text-4xl text-indigo-600">insights</span>
                    <h3 className="text-2xl font-bold leading-none">Strategic Business Planning</h3>
                  </div>
                  <p className="mt-2 text-gray-600">Set your sights higher. We help ambitious businesses define their market edge and build bulletproof strategies that drive measurable growth.</p>
                  <ul className="mt-4 text-gray-600 list-disc list-inside">
                    <li>Establishing clear business objectives and actionable strategies.</li>
                    <li>Conducting in-depth market and competitor analysis.</li>
                    <li>Developing robust plans for sustainable expansion and market leadership.</li>
                  </ul>
                </div>

                {/* Service 2: Process Optimisation & Efficiency */}
                <div className="bg-white p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg text-left">
                  <div className="flex items-start mb-4 space-x-4">
                    <span className="material-symbols-outlined text-4xl text-indigo-600">tune</span>
                    <h3 className="text-2xl font-bold leading-none">Process Optimisation & Efficiency</h3>
                  </div>
                  <p className="mt-2 text-gray-600">Tangled workflows? We don’t just optimise - we overhaul. Our process improvements slash inefficiencies, cut costs, and unlock room to scale.</p>
                  <ul className="mt-4 text-gray-600 list-disc list-inside">
                    <li>Identifying and resolving operational bottlenecks.</li>
                    <li>Improving efficiency and contributing to cost reduction.</li>
                    <li>Implementing strategies for effective business scalability.</li>
                    <li>Applying proven methodologies and modern technology for enhanced performance.</li>
                  </ul>
                </div>

                {/* Service 3: Digital Product & App Development */}
                <div className="bg-white p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg text-left">
                  <div className="flex items-start mb-4 space-x-4">
                    <span className="material-symbols-outlined text-4xl text-indigo-600">developer_mode</span>
                    <h3 className="text-2xl font-bold leading-none">Digital Product & App Development</h3>
                  </div>
                  <p className="mt-2 text-gray-600">Your boldest app ideas - built right. From lean MVPs to scalable platforms, we craft sleek, high-performing iOS and Android mobile apps that actually get used.</p>
                  <ul className="mt-4 text-gray-600 list-disc list-inside">
                    <li>Designing and developing professional iOS & Android mobile applications.</li>
                    <li>Creating user-centric digital products for enhanced interaction.</li>
                    <li>Focusing on seamless user experiences that drive desired actions.</li>
                  </ul>
                </div>

                {/* Service 4: Web Design & Development */}
                <div className="bg-white p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg text-left">
                  <div className="flex items-start mb-4 space-x-4">
                    <span className="material-symbols-outlined text-4xl text-indigo-600">web</span>
                    <h3 className="text-2xl font-bold leading-none">Web Design & Development</h3>
                  </div>
                  <p className="mt-2 text-gray-600">Establish a powerful online presence. We build dynamic, user-friendly websites that are visually compelling and engineered for results.</p>
                  <ul className="mt-4 text-gray-600 list-disc list-inside">
                    <li>Crafting visually appealing and intuitive website designs.</li>
                    <li>Developing responsive sites aligned with your specific business objectives.</li>
                    <li>Creating digital platforms that stand out and achieve measurable outcomes.</li>
                  </ul>
                </div>

                {/* Service 5: Branding & Creative Design */}
                <div className="bg-white p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg text-left">
                  <div className="flex items-start mb-4 space-x-4">
                    <span className="material-symbols-outlined text-4xl text-indigo-600">brush</span>
                    <h3 className="text-2xl font-bold leading-none">Branding & Creative Design</h3>
                  </div>
                  <p className="mt-2 text-gray-600">Build a distinct and memorable brand identity. From foundational branding to immersive user experiences, we create visuals that resonate and captivate your audience.</p>
                  <ul className="mt-4 text-gray-600 list-disc list-inside">
                    <li>Developing strong visual identities (logos, branding, marketing materials).</li>
                    <li>Designing intuitive user interfaces (UI) and compelling experiences (UX).</li>
                    <li>Providing professional photography for brand and event needs.</li>
                    <li>Offering expert post-production for image enhancement.</li>
                  </ul>
                </div>

                {/* Service 6: End-to-End Project Leadership */}
                <div className="bg-white p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg text-left">
                  <div className="flex items-start mb-4 space-x-4">
                    <span className="material-symbols-outlined text-4xl text-indigo-600">checklist</span>
                    <h3 className="text-2xl font-bold leading-none">End-to-End Project Leadership</h3>
                  </div>
                  <p className="mt-2 text-gray-600">Navigate complex projects with confidence. We lead your key initiatives from concept to successful launch, ensuring disciplined execution and quality delivery.</p>
                  <ul className="mt-4 text-gray-600 list-disc list-inside">
                    <li>Comprehensive project management from inception to successful completion.</li>
                    <li>Oversight of all project phases - planning, design, development, and market integration.</li>
                    <li>Ensuring efficient delivery and impactful results, within defined timelines and budgets.</li>
                  </ul>
                </div>

              </div>
            </div>
          </section>

          {/* Section 2: Our Simple 3-Step Process */}
          <section className="bg-indigo-600 text-white py-20 md:py-24 px-6">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold mb-4">Our Simple 3-Step Process</h2>
              <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
                We cut through the chaos to get to work—fast. This is what it looks like to partner with us:
              </p>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Step 1 with Icon */}
                <div className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white text-indigo-600 rounded-full text-3xl font-bold shadow-lg">
                    <span className="material-symbols-outlined text-4xl">person_search</span>
                  </div>
                  <h3 className="text-2xl font-bold mt-2">Discovery</h3>
                  <p className="mt-2 text-indigo-100">We have a no-fluff conversation to understand your goals, pain points, and potential.</p>
                </div>
                {/* Step 2 with Icon */}
                <div className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white text-indigo-600 rounded-full text-3xl font-bold shadow-lg">
                    <span className="material-symbols-outlined text-4xl">edit_square</span>
                  </div>
                  <h3 className="text-2xl font-bold mt-2">Action Plan</h3>
                  <p className="mt-2 text-indigo-100">You receive a clear, custom plan that's all about value, outcomes, and getting it done.</p>
                </div>
                {/* Step 3 with Icon */}
                <div className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white text-indigo-600 rounded-full text-3xl font-bold shadow-lg">
                    <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                  </div>
                  <h3 className="text-2xl font-bold mt-2">Execution</h3>
                  <p className="mt-2 text-indigo-100">We deliver the project with transparency and impact, checking in on the real-world results.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Final Call to Action */}
          <section id="contact" className="bg-white py-20 md:py-24 px-6">
            <div className="container mx-auto text-center max-w-4xl">
              <h2 className="text-4xl font-bold mb-4">Ready to Make It Happen?</h2>
              <p className="text-lg text-gray-700 max-w-xl mx-auto">
                Your next breakthrough is a conversation away. Let’s cut through the noise and build something genuinely great, together.
              </p>
              <div className="mt-8">
                <a href="mailto:info@reignitesolutions.co.uk" className="inline-flex items-center justify-center space-x-2 px-10 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-full shadow-xl hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="material-symbols-outlined">mail</span>
                  <span>Let's Talk</span>
                </a>
              </div>
              <div className="mt-6 text-gray-500">
                <p className="text-lg">Prefer a quick chat? Call us on <a href="tel:+441234567890" className="text-indigo-600 hover:underline inline-flex items-center space-x-1">
                  <span className="material-symbols-outlined text-base">phone</span>
                  <span>+44 (7397) 897 186</span>
                </a>.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
