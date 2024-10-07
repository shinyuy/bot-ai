import Link from 'next/link';
import type { Metadata } from 'next';
import { Navbar } from '../components/common';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contexx AI',
  description: 'Contexx AI home page',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black">
        <section className="flex mb-24 md:mb-0 flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex pb-12 md:pb-0 md:h-screen w-full md:w-3/4 md:w-3/4 flex-col items-start justify-start md:justify-center lg:justify-center pt-8 md:pt-0 lg:pt-0 px-2 md:px-32 lg:px-32">
            <div className='flex flex-col items-center md:items-start w-full py-12 md:py-0 text-gray-800'>
              <h1 className="mb-8 text-3xl md:text-6xl lg:text-6xl font-extrabold text-center md:text-start">
                Empower Your Business with AI-Driven Chatbots
              </h1>
              <p className='text-center text-xl md:text-start text-gray-600'>
                Deliver personalized customer experiences, streamline support, and increase
                engagement with custom chatbots built on your data.
              </p>
            </div>
            <div className='flex flex-col md:flex-row items-center md:items-start w-full'>
              <Link href={"/auth/register"}>
                <button className="md:mr-8 mt-8 w-72 rounded-full bg-sky-500 px-8 py-4 text-xl text-white">
                  Get Started for Free
                </button></Link>
              <button className="mt-8 w-72 rounded-full border border-sky-500 bg-white px-8 py-4 text-sky-500">
                Request a Demo
              </button>
            </div>
          </div>
          <div className="">
            <Image
              src={'/chatbot.png'}
              alt="Chatbot"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </section>

        {/* Features Overview */}
        <div className="py-32 px-4 md:px-12">
          <h2 className="text-4xl font-bold text-center text-gray-800">Key Features</h2>
          <p className="text-lg text-center text-gray-600 mt-4">The perfect solution to transform your business with AI-powered customer interactions.</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-700">PDF Integration</h3>
              <p className="mt-4 text-gray-600">Seamlessly turn PDF documents into chat-ready data to answer customer queries in real-time.</p>

              {/* Placeholder for PDF Feature Image */}
              <div className="w-full h-48 mt-6 relative">
                <Image
                  src={'/pdf.png'}
                  alt="PDF Integration"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-700">Website Integration</h3>
              <p className="mt-4 text-gray-600">Empower your chatbot to respond intelligently using your website's live content.</p>

              {/* Placeholder for Website Feature Image */}
              <div className="w-full h-48 mt-6 relative">
                <Image
                  src={'/website.png'}
                  alt="Website Integration"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-700">Database Integration</h3>
              <p className="mt-4 text-gray-600">Connect to internal databases for advanced query handling with up-to-date information.</p>

              {/* Placeholder for Database Feature Image */}
              <div className="w-full h-48 mt-6 relative">
                <Image
                  src={'/database.png'}  // Placeholder image path
                  alt="Database Integration"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>



        {/* Multi-Platform Messaging Section */}
        <div className="py-32 px-4 md:px-12 bg-blue-50">
          <h2 className="text-4xl font-bold text-center text-gray-800">Chatbots on Popular Messaging Platforms</h2>
          <p className="text-lg text-center text-gray-600 mt-4">Engage with your customers where they are – WhatsApp, Messenger, and Instagram. Our AI chatbot integrates seamlessly with these platforms to provide a consistent experience across channels.</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp Feature */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-700">WhatsApp</h3>
              <p className="mt-4 text-gray-600">Reach your audience directly on WhatsApp, the most popular messaging app in the world. Provide instant support and automate responses to common queries.</p>

              {/* Placeholder for WhatsApp Image */}
              <div className="w-full h-48 mt-6 relative">
                <Image
                  src="/whatsapp.png"  // Placeholder image path
                  alt="WhatsApp Integration"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            {/* Messenger Feature */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-700">Messenger</h3>
              <p className="mt-4 text-gray-600">Automate conversations and support through Facebook Messenger. Easily engage with customers who use Facebook to stay connected with your business.</p>

              {/* Placeholder for Messenger Image */}
              <div className="w-full h-48 mt-6 relative">
                <Image
                  src="/messenger.jpg"  // Placeholder image path
                  alt="Messenger Integration"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            {/* Instagram Feature */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-700">Instagram</h3>
              <p className="mt-4 text-gray-600">Use our AI chatbot to connect with Instagram users via direct messages. Provide a personalized experience for your followers, whether they’re asking about products or customer support.</p>

              {/* Placeholder for Instagram Image */}
              <div className="w-full h-48 mt-6 relative">
                <Image
                  src="/instagram.png"  // Placeholder image path
                  alt="Instagram Integration"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600">No matter the platform, our AI chatbot ensures your customers receive the same level of service.</p>
          </div>
        </div>



        {/* Video Demo Section */}
        <section id="video-demo" className="py-16 py-32 px-4 md:px-12">
          <div className=" mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                See Our AI Chatbot in Action!
              </h2>
              <p className="text-xl text-gray-600">
                Watch the demo video below to understand how our platform works to transform customer engagement and automate support processes.
              </p>
            </div>

            {/* Video Container */}
            <div className="relative  overflow-hidden rounded-lg shadow-lg mx-auto">
              <div className="video-wrapper">
                {/* Replace this with your actual video link */}
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/" // Replace with your actual video link
                  title="AI Chatbot Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-10 text-center">
              <Link href={"/auth/register"}>
                <button className="md:mr-8 mt-8 w-72 rounded-full bg-sky-500 px-8 py-4 text-xl text-white">
                  Get Started for Free
                </button></Link>
            </div>
          </div>
        </section>



        {/* Benefits Section */}
        <div className="py-32 px-4 md:px-12 bg-gray-50">
          <h2 className="text-4xl font-bold text-center text-gray-800">Why Choose Our AI Chatbot?</h2>
          <p className="text-lg text-center text-gray-600 mt-4">Here’s how our chatbot can help your business scale and thrive.</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-700">24/7 Availability</h3>
              <p className="mt-4 text-gray-600">Our chatbot never sleeps, ensuring your customers always have someone to talk to, even outside office hours.</p>

              {/* Placeholder for Availability Image */}
              <div className="w-full h-48 mt-6 relative">
                <Image
                  src="/robot.jpg"  // Placeholder image path
                  alt="24/7 Availability"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-700">Increased Sales</h3>
              <p className="mt-4 text-gray-600">Automate product recommendations and convert website visitors into customers with ease.</p>

              {/* Placeholder for Increased Sales Image */}
              <div className="w-full h-48 mt-6 relative">
                <Image
                  src="/sales.jpg"  // Placeholder image path
                  alt="Increased Sales"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-700">Data-Driven Insights</h3>
              <p className="mt-4 text-gray-600">Gain valuable insights from customer conversations to improve your business strategies.</p>

              {/* Placeholder for Data Insights Image */}
              <div className="w-full h-48 mt-6 relative">
                <Image
                  src="/hand.jpg"  // Placeholder image path
                  alt="Data-Driven Insights"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>


        {/* How It Works */}
        <div className="py-32 px-4 md:px-12 bg-gray-50">
          <h2 className="text-4xl font-bold text-center text-gray-800">How It Works</h2>
          <p className="text-lg text-center text-gray-600 mt-4">Set up your AI chatbot in three simple steps.</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-sky-500 text-white w-12 h-12 rounded-full mx-auto flex items-center justify-center text-lg font-bold">
                1
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mt-6">Upload Your Data</h3>
              <p className="mt-4 text-gray-600">Easily upload your PDFs, connect your website, or link your database for data extraction.</p>

              {/* Placeholder for Upload Data Image */}
              <div className="w-full h-48 mt-6 relative">
                <Image
                  src={'/dashboard.JPG'}  // Placeholder image path
                  alt="Upload Your Data"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-sky-500 text-white w-12 h-12 rounded-full mx-auto flex items-center justify-center text-lg font-bold">
                2
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mt-6">Train the Chatbot</h3>
              <p className="mt-4 text-gray-600">Our AI trains your chatbot to respond to queries based on your data sources.</p>

              {/* Placeholder for Train Chatbot Image */}
              <div className="w-full h-48 mt-6 relative">
                <Image
                  src={'/dashboard2.jpg'}  // Placeholder image path
                  alt="Train the Chatbot"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-sky-500 text-white w-12 h-12 rounded-full mx-auto flex items-center justify-center text-lg font-bold">
                3
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mt-6">Deploy & Engage</h3>
              <p className="mt-4 text-gray-600">Deploy the chatbot on your website or through messaging platforms and start engaging with customers.</p>

              {/* Placeholder for Deploy Image */}
              <div className="w-full h-48 mt-6 relative">
                <Image
                  src={'/chatui.png'}  // Placeholder image path
                  alt="Deploy and Engage"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-32 px-4 md:px-12">
          <h2 className="text-4xl font-bold text-center text-gray-800">What Our Customers Are Saying</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">"The AI chatbot transformed our customer service operations. Now, we can handle thousands of queries effortlessly!"</p>
              <p className="mt-4 font-bold text-gray-800">- Sarah, E-commerce Business Owner</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">"Integrating our PDFs and databases with the chatbot improved our technical support significantly. Highly recommended!"</p>
              <p className="mt-4 font-bold text-gray-800">- John, CTO of a Tech Startup</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">"Our sales have increased by 25% since we started using the chatbot on our website. It's a game-changer!"</p>
              <p className="mt-4 font-bold text-gray-800">- Lisa, CEO of an Online Store</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-32 px-4 md:px-12 text-center bg-sky-500 text-white">
          <h2 className="text-4xl font-bold">Ready to Automate Customer Support?</h2>
          <p className="mt-4 text-lg">Start your free trial today and see how our AI chatbot can transform your business.</p>
          <button className="mt-6 bg-white text-sky-500 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition duration-200">
            Start Free Trial
          </button>
        </div>
      </main>
    </>
  );
}
