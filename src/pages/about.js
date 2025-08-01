import Head from 'next/head'; // For managing <head> content

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <Head>
        <title>My Company - About Us</title>
        <meta name="description" content="Learn more about My Company." />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          About My Company
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          We are a passionate team dedicated to delivering high-quality solutions and exceptional customer service. Our mission is to empower businesses through innovative technology.
        </p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-gray-300 text-gray-800 text-base font-semibold rounded-lg shadow hover:bg-gray-400 transition duration-300 ease-in-out"
        >
          Back to Home
        </a>
      </main>

      <footer className="mt-12 text-gray-600">
        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      </footer>
    </div>
  );
}