'use client'
import type { Metadata } from 'next';
import { Navbar } from '../../components/common';
import { loadStripe } from "@stripe/stripe-js";
import CheckoutButton from "../../components/common/CheckoutButton"
import { useState } from 'react';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);


// export const metadata: Metadata = {
//   title: 'Contexx AI',
//   description: 'Contexx AI pricing page',
// };


const stripePromise = loadStripe(
  `pk_test_51Q3oNJBIOcLjArM10AFEnbxsae4OCMOsfh1pAMGFjBBFDE8Hnbo27p32OmdsXswxRneled5RWC1BwEYNWhdclMmD00G4LFeq3g`
);


export default function Page() {
  const [interval, setInterval] = useState('month')
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 text-black">
        <div className="bg-gray-100 min-h-screen py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800">Choose Your AI Chatbot Plan</h1>
            <p className="mt-4 text-gray-600">Get your chatbot up and running with data from PDFs, websites, and databases!</p>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-row justify-center">
            {/* Basic Plan */}
            <div className="bg-white mx-4 md:h-auto lg:h-auto mb-16 md:mb-0 lg:mb-0 w-[400px] p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800">Basic Plan</h2>
              <p className="text-lg text-gray-600 mt-4">Perfect for small businesses just getting started.</p>
              <p className="text-4xl font-bold text-gray-800 mt-6">$9/month</p>

              <ul className="mt-6 space-y-4 text-gray-600">
                <li>✅ Up to 10 PDFs</li>
                <li>✅ 1,000 queries/month</li>
                <li>✅ Basic support</li>
                <li>✅ PDF data source</li>
                <li>✅ Basic chatbot functionalities</li>
                <li>❌ Website integration</li>
                <li>❌ Database integration</li>
                <li>❌ WhatsApp, Messenger, and Instagram integration</li>
              </ul>

              <CheckoutButton priceId="prod_QriSJUgtLXXiFl" price={900} interval={interval} name="AI Chatbot Basic Plan Subscription" />
            </div>

            {/* Pro Plan */}
            <div className="bg-white mx-4 md:h-auto lg:h-auto mb-16 md:mb-0 lg:mb-0 w-[400px] p-8 rounded-lg shadow-lg border-2 border-blue-500">
              <h2 className="text-2xl font-semibold text-gray-800">Pro Plan</h2>
              <p className="text-lg text-gray-600 mt-4">Ideal for growing businesses looking to scale up.</p>
              <p className="text-4xl font-bold text-gray-800 mt-6">$29/month</p>

              <ul className="mt-6 space-y-4 text-gray-600">
                <li>✅ Up to 30 PDFs</li>
                <li>✅ Website integration</li>
                <li>✅ 5,000 queries/month</li>
                <li>✅ Custom branding</li>
                <li>✅ Priority support</li>
                <li>✅ PDF and website data sources</li>
                <li>✅ Advanced chatbot features</li>
                <li>✅ WhatsApp integration</li>
                <li>❌ Messenger and Instagram integration</li>
                <li>❌ Database integration</li>
              </ul>

              <CheckoutButton priceId="prod_QriTAqPYEUA0oy" price={2900} interval={interval} name="AI Chatbot Pro Plan Subscription" />
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white mx-4 md:h-auto lg:h-auto mb-16 md:mb-0 lg:mb-0 w-[400px] p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800">Enterprise Plan</h2>
              <p className="text-lg text-gray-600 mt-4">Best for large enterprises needing full integration and customization.</p>
              <p className="text-4xl font-bold text-gray-800 mt-6">$59/month</p>

              <ul className="mt-6 space-y-4 text-gray-600">
                <li>✅ Unlimited PDFs</li>
                <li>✅ Website and database integration</li>
                <li>✅ 20,000 queries/month</li>
                <li>✅ Dedicated support</li>
                <li>✅ Custom branding</li>
                <li>✅ 24/7 priority support</li>
                <li>✅ PDF, website, and database data sources</li>
                <li>✅ Full chatbot customization</li>
                <li>✅ WhatsApp, Messenger, and Instagram integration</li>
                <li>✅ Priority support</li>
              </ul>


              <CheckoutButton priceId="prod_QriVo5uXvFIcU6" price={5900} interval={interval} name="AI Chatbot Enterprise Plan Subscription" />
            </div>
          </div>
        </div>
        {/* Comparison Table */}
        <div className="mt-16 px-4 md:px-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Compare All Plans</h2>
          <div className="overflow-x-auto mt-8">
            <table className="min-w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-4">Feature</th>
                  <th className="p-4">Basic</th>
                  <th className="p-4">Pro</th>
                  <th className="p-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">Number of PDFs</td>
                  <td className="p-4">Up to 10</td>
                  <td className="p-4">Up to 30</td>
                  <td className="p-4">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Website Integration</td>
                  <td className="p-4">❌</td>
                  <td className="p-4">✅</td>
                  <td className="p-4">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Database Integration</td>
                  <td className="p-4">❌</td>
                  <td className="p-4">❌</td>
                  <td className="p-4">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Queries per Month</td>
                  <td className="p-4">1,000</td>
                  <td className="p-4">5,000</td>
                  <td className="p-4">20,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Custom Branding</td>
                  <td className="p-4">❌</td>
                  <td className="p-4">✅</td>
                  <td className="p-4">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">WhatsApp Integration</td>
                  <td className="p-4">❌</td>
                  <td className="p-4">✅</td>
                  <td className="p-4">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Messenger Integration</td>
                  <td className="p-4">❌</td>
                  <td className="p-4">❌</td>
                  <td className="p-4">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Instagram Integration</td>
                  <td className="p-4">❌</td>
                  <td className="p-4">❌</td>
                  <td className="p-4">✅</td>
                </tr>
                <tr>
                  <td className="p-4">Priority Support</td>
                  <td className="p-4">❌</td>
                  <td className="p-4">❌</td>
                  <td className="p-4">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-48 px-4 md:px-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-700">What happens if I exceed the query limit?</h3>
              <p className="mt-2 text-gray-600">You can always upgrade to a higher plan or purchase additional queries at a discounted rate.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700">Can I cancel my subscription at any time?</h3>
              <p className="mt-2 text-gray-600">Yes, you can cancel your subscription anytime, and you’ll continue to have access until the end of your billing period.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700">What if I need help?</h3>
              <p className="mt-2 text-gray-600">Our team is here to support you 24/7. Enterprise customers receive dedicated support, while Pro and Basic customers receive priority support.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-48 pb-48 px-4 md:px-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">What Our Customers Are Saying</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">"The AI chatbot has streamlined our customer service, and integrating PDFs and website data has made a world of difference."</p>
              <p className="mt-4 font-bold text-gray-800">- Sarah, Small Business Owner</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">"We use the Enterprise plan, and it's been a game-changer for handling massive data from our website and database!"</p>
              <p className="mt-4 font-bold text-gray-800">- John, CEO of a Tech Startup</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">"The Pro plan is exactly what we needed for website integration and customer engagement. Highly recommend!"</p>
              <p></p>
            </div>
          </div>
        </div>









      </main>
    </>
  );
}
