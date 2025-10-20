// app/contact/page.js

// This page's specific metadata overrides the default values from layout.js
export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Reignite Solutions. Contact us for a free consultation on your web development, digital marketing, and branding needs.',
};

export default function Contact() {
  return (
    <div className="bg-gray-50 pt-48 pb-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Let's Talk</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your next breakthrough is a conversation away. Reach out to us and let's build something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-xl shadow-lg">

          {/* Left Column: Contact Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Details</h2>
            <p className="text-gray-600 text-lg mb-4">
              We operate with a lean, flexible model to provide maximum value. Feel free to reach out to us via email or phone.
            </p>

            <div className="space-y-6 text-gray-700">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-indigo-600 text-3xl mt-1">location_on</span>
                <div>
                  <p className="font-semibold text-xl">Our Office</p>
                  <p>234 Leeds Road, Ilkley, West Yorkshire, LS29 8LN</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-indigo-600 text-3xl mt-1">phone</span>
                <div>
                  <p className="font-semibold text-xl">Phone</p>
                  <a href="tel:+447397897186" className="hover:underline">+44 (7397) 897 186</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-indigo-600 text-3xl mt-1">mail</span>
                <div>
                  <p className="font-semibold text-xl">Email</p>
                  <a href="mailto:info@reignitesolutions.co.uk" className="hover:underline">hello@reignites.co.uk</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-inner">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
