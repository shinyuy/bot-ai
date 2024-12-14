import type { Metadata } from 'next';
import { Navbar, Footer } from '../../components/common';

export const metadata: Metadata = {
  title: 'Contexx AI',
  description: 'Contexx AI features page',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black">
        <div className="bg-gray-100 min-h-screen py-12">
          {/* Hero Section */}
          <div className="bg-sky-500 text-white text-center py-32">
            <h1 className="text-5xl font-bold">AI Chatbot Features</h1>
            <p className="mt-4 text-lg">Revolutionizing customer interaction with AI-powered solutions.</p>
          </div>

          {/* Core Features */}
          <div className="py-32 px-4 md:px-12">
            <h2 className="text-4xl font-bold text-center text-gray-800">Key Features</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-700">PDF Integration</h3>
                <p className="mt-4 text-gray-600">Upload PDFs to train your chatbot to provide detailed answers based on document content.</p>
                <ul className="mt-6 text-gray-600 space-y-2">
                  <li>✔ Automate customer queries with document data</li>
                  <li>✔ Real-time document search</li>
                  <li>✔ Secure and scalable</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-700">Website Integration</h3>
                <p className="mt-4 text-gray-600">Leverage your website’s content to power your chatbot, providing context-rich responses to users.</p>
                <ul className="mt-6 text-gray-600 space-y-2">
                  <li>✔ Crawl and index your website</li>
                  <li>✔ Answer queries based on live website content</li>
                  <li>✔ Seamless integration with various CMS systems</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-700">Database Integration</h3>
                <p className="mt-4 text-gray-600">Connect your chatbot to your internal databases to handle complex queries with up-to-date information.</p>
                <ul className="mt-6 text-gray-600 space-y-2">
                  <li>✔ Integrate with SQL, NoSQL databases</li>
                  <li>✔ Support for live data querying</li>
                  <li>✔ Optimized for large-scale data sources</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Integrations Section */}
          <div className="py-32 px-4 md:px-12 bg-gray-50">
            <h2 className="text-4xl font-bold text-center text-gray-800">Integrations</h2>
            <p className="mt-4 text-lg text-center text-gray-600">Our chatbot integrates effortlessly with your existing data sources to provide intelligent, personalized responses.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-700">CRM Tools</h3>
                <p className="mt-4 text-gray-600">Seamlessly integrate with popular CRM platforms like Salesforce, HubSpot, and more.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-700">API Support</h3>
                <p className="mt-4 text-gray-600">Connect via APIs for custom data handling and enhanced workflows.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-700">Messaging Platforms</h3>
                <p className="mt-4 text-gray-600">Integrate with WhatsApp, Slack, and Facebook Messenger for customer interaction through your preferred channels.</p>
              </div>
            </div>
          </div>

          {/* Customer Benefits */}
          <div className="py-32 px-4 md:px-12">
            <h2 className="text-4xl font-bold text-center text-gray-800">Why Choose Our Chatbot?</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-700">Boost Productivity</h3>
                <p className="mt-4 text-gray-600">Save time by automating repetitive tasks, allowing your team to focus on strategic activities.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-700">Improve Customer Satisfaction</h3>
                <p className="mt-4 text-gray-600">Respond to customer queries faster and more accurately, providing a superior customer experience.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-700">Scalable Solutions</h3>
                <p className="mt-4 text-gray-600">Whether you're a startup or enterprise, our chatbot scales with your needs, ensuring seamless performance.</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="py-32 px-4 md:px-12 bg-gray-50">
            <h2 className="text-4xl font-bold text-center text-gray-800">What Our Clients Are Saying</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-gray-600 italic">"The AI chatbot has transformed our customer service operations. We can now handle thousands of queries effortlessly!"</p>
                <p className="mt-4 text-gray-800 font-bold">- Linda, Operations Manager</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-gray-600 italic">"Integrating the chatbot with our database has been a game changer for our technical support. It fetches live data instantly!"</p>
                <p className="mt-4 text-gray-800 font-bold">- Mark, CTO of Fintech Co.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-gray-600 italic">"Our sales have increased since using the chatbot to engage with customers through WhatsApp. Highly recommended!"</p>
                <p className="mt-4 text-gray-800 font-bold">- Sofia, CEO of E-commerce Startup</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="py-32 mb-32 px-4 md:px-12 text-center bg-sky-500 text-white">
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <p className="mt-4 text-lg">Join hundreds of businesses using our AI chatbot to enhance customer experiences.</p>
            <button className="mt-6 bg-white text-sky-500 py-2 px-6 rounded-lg shadow-lg font-semibold hover:bg-gray-200 transition duration-200">
              Contact Us Today
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
