import Head from 'next/head'; // For managing <head> content (title, meta tags)

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <Head>
        <title>My Company - Home</title>
        <meta name="description" content="Official website for My Company Name." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
          Welcome to My Awesome Company!
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          We provide innovative solutions and excellent services to meet your needs.
        </p>
        <a 
          href="/contact" 
          className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Contact Us Today!
        </a>
      </main>

      <footer className="mt-12 text-gray-600">
        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      </footer>
    </div>
  );
}