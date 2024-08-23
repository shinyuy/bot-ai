import Link from 'next/link';
import type { Metadata } from 'next';
import { Navbar } from '../components/common';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Bot AI',
  description: 'Bot AI home page',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black">
        <section className="flex items-center justify-between">
          <div className="flex h-screen w-3/4 flex-col items-start justify-center px-32">
            <div>
              <h1 className="mb-8 text-6xl font-extrabold">
                Empower Your Business with AI-Driven Chatbots
              </h1>
              <p>
                Deliver personalized customer experiences, streamline support, and increase
                engagement with custom chatbots built on your data.
              </p>
            </div>
            <div>
              <button className="mr-8 mt-8 rounded-full bg-sky-500 px-8 py-4 text-xl text-white">
                Get Started for Free
              </button>
              <button className="mt-8 rounded-full border border-sky-500 bg-white px-8 py-4 text-sky-500">
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
        <div className="flex w-full justify-center">
          <h2 className="text-32 mb-8 text-4xl font-bold">How It Works</h2>
        </div>
        <section className="w-full py-12">
          <div className="w-wull flex h-screen justify-center px-32">
            <div className="flex w-1/2 items-start justify-end">
              <Image
                src={'/dashboard.png'}
                alt="Chatbot"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="flex h-full w-1/2 items-center justify-center">
              <span className="text-3xl text-black">
                <b>Connect Your Data</b>: Integrate your data sources, including PDFs, databases,
                and web content.
              </span>
            </div>
          </div>
          <div className="w-wull flex items-center justify-center px-32">
            <div className="flex h-full w-1/2 items-center justify-center">
              <span className="text-3xl text-black">
                <b>Train Your Bot</b>: Our AI models learn from your data to provide accurate and
                relevant responses.
              </span>
            </div>
            <div className="flex w-1/2 items-center justify-end">
              <Image
                src={'/chatui.png'}
                alt="Chatbot"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '50%', height: 'auto' }}
              />
            </div>
          </div>
          <div className="w-wull flex items-center justify-center px-32">
            <div className="flex w-1/2 items-center">
              <Image
                src={'/chatui.png'}
                alt="Chatbot"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '50%', height: 'auto' }}
              />
            </div>
            <div className="flex h-full w-1/2 items-center justify-center">
              <span className="text-3xl text-black">
                <b>Deploy with Ease:</b>: Add your chatbot to your website, app, or social media
                with just a few clicks.
              </span>
            </div>
          </div>
          <div className="w-wull flex items-center justify-center px-32">
            <div className="flex h-full w-1/2 items-center justify-center">
              <span className="text-3xl text-black">
                <b>Monitor & Optimize</b>: Use our analytics dashboard to track performance and
                refine responses.
              </span>
            </div>
            <div className="flex w-1/2 items-center justify-end">
              <Image
                src={'/chatui.png'}
                alt="Chatbot"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '50%', height: 'auto' }}
              />
            </div>
          </div>
        </section>
        <div className="mb-16 flex w-full justify-center">
          <h2 className="text-4xl font-bold text-black">Why Choose Our AI-Powered Chatbots?</h2>
        </div>
        <section className="m-0 flex h-screen w-full flex-row justify-center py-0 text-white">
          <div className="flex w-full flex-col items-end bg-black py-12">
            <div className="flex h-full w-full items-center justify-center p-16">
              <span className="text-3xl">
                <b>Customizable AI Chatbots</b>: Tailored to your business needs, leveraging your
                unique data sources.
              </span>
            </div>
          </div>
          <div className="w-full py-12">
            <div className="flex h-full w-full items-center justify-center p-16">
              <span className="text-3xl text-black">
                <b>Seamless Integration</b>: Works across websites, apps, and social media channels.
              </span>
            </div>
          </div>
        </section>
        <section className="mb-0 flex h-screen w-full flex-row justify-center py-0 text-white">
          <div className="w-full py-12">
            <div className="flex h-full w-full items-center justify-center p-16">
              <span className="text-3xl text-black">
                <b>Scalable Solutions</b>: Suitable for businesses of all sizes, from startups to
                enterprises.
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-end bg-black py-12">
            <div className="flex h-full w-full items-center justify-center p-16">
              <span className="text-3xl">
                <b>Multilingual Support</b>: Communicate with customers in their preferred language.
              </span>
            </div>
          </div>
        </section>
        <section className="h-56 bg-white"></section>
      </main>
    </>
  );
}
