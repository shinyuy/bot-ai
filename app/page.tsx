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
        <section className="flex mb-24 md:mb-0 flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex pb-12 md:pb-0 md:h-screen w-full md:w-3/4 md:w-3/4 flex-col items-start justify-start md:justify-center lg:justify-center pt-8 md:pt-0 lg:pt-0 px-2 md:px-32 lg:px-32">
            <div className='flex flex-col items-center md:items-start w-full py-12 md:py-0'>
              <h1 className="mb-8 text-3xl md:text-6xl lg:text-6xl font-extrabold text-center md:text-start">
                Empower Your Business with AI-Driven Chatbots
              </h1>
              <p className='text-center text-xl md:text-start'>
                Deliver personalized customer experiences, streamline support, and increase
                engagement with custom chatbots built on your data.
              </p>
            </div>
            <div className='flex flex-col md:flex-row items-center md:items-start w-full'>
              <button className="md:mr-8 mt-8 w-72 rounded-full bg-sky-500 px-8 py-4 text-xl text-white">
                Get Started for Free
              </button>
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
        <div className="flex w-full mt-36 md:mt-0 justify-center">
          <h2 className="text-32 mb-8 md:mb-8 text-4xl font-bold">How It Works</h2>
        </div>
        <section className="w-full py-2">
          <div className="w-wull flex flex-col md:flex-row md:h-screen justify-center px-2 md:px-32 mb-48 md:mb-0">
            <div className="flex w-full md:w-1/2 pb-12 md:pb-0 items-start justify-end">
              <Image
                src={'/dashboard.png'}
                alt="Chatbot"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="flex h-full w-full md:w-1/2 items-center justify-center">
              <span className="text-3xl text-black">
                <b>Connect Your Data</b>: Integrate your data sources, including PDFs, databases,
                and web content.
              </span>
            </div>
          </div>
          <div className="w-wull mb-24 md:mb-0 flex flex-col-reverse md:flex-row items-center justify-center px-2 md:px-32 mb-48 md:mb-0">
            <div className="flex h-full w-full md:w-1/2 items-center justify-center">
              <span className="text-3xl text-black">
                <b>Train Your Bot</b>: Our AI models learn from your data to provide accurate and
                relevant responses.
              </span>
            </div>
            <div className="flex w-full md:w-1/2 pb-8 md:pb-0 items-center justify-center md:justify-end">
              <Image
                src={'/chatui.png'}
                alt="Chatbot"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '80%', height: 'auto' }}
              />
            </div>
          </div>
          <div className="w-wull flex flex-col mb-24 md:mb-0 md:flex-row items-center justify-center px-2 md:px-32 mb-48 md:mb-0">
            <div className="flex flex-col w-full md:w-1/2 items-center">
              <Image
                src={'/chatui.png'}
                alt="Chatbot"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '80%', height: 'auto' }}
              />
            </div>
            <div className="flex h-full w-full md:w-1/2 items-center justify-center">
              <span className="text-3xl text-black">
                <b>Deploy with Ease:</b>: Add your chatbot to your website, app, or social media
                with just a few clicks.
              </span>
            </div>
          </div>
          <div className="w-wull flex flex-col-reverse md:flex-row items-center justify-center px-2 md:px-32 mb-48 md:mb-0">
            <div className="flex h-full w-full md:w-1/2 items-center justify-center">
              <span className="text-3xl text-black">
                <b>Monitor & Optimize</b>: Use our analytics dashboard to track performance and
                refine responses.
              </span>
            </div>
            <div className="flex flex-col w-full md:w-1/2 items-center justify-end">
              <Image
                src={'/chatui.png'}
                alt="Chatbot"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '80%', height: 'auto' }}
              />
            </div>
          </div>
        </section>
        <div className="mb-16 flex w-full justify-center">
          <h2 className="text-4xl font-bold text-black text-center mb-4 md:mb-0">Why Choose Our AI-Powered Chatbots?</h2>
        </div>
        <section className="m-0 flex  md:h-screen w-full flex-col md:flex-row justify-center py-0 text-white">
          <div className="flex w-full flex-col items-end bg-black py-12">
            <div className="flex h-full w-full items-center justify-center p-8 md:p-16">
              <span className="text-3xl text-center">
                <b>Customizable AI Chatbots</b>: Tailored to your business needs, leveraging your
                unique data sources.
              </span>
            </div>
          </div>
          <div className="w-full py-12">
            <div className="flex h-full w-full items-center justify-center p-8 md:p-16">
              <span className="text-3xl text-black text-center">
                <b>Seamless Integration</b>: Works across websites, apps, and social media channels.
              </span>
            </div>
          </div>
        </section>
        <section className="mb-0 flex py-8 md:py-0 md:h-screen w-full flex-col-reverse md:flex-row justify-center py-0 text-white">
          <div className="w-full py-12">
            <div className="flex h-full w-full items-center justify-center p-8 md:p-16">
              <span className="text-3xl text-black text-center">
                <b>Scalable Solutions</b>: Suitable for businesses of all sizes, from startups to
                enterprises.
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-end bg-black py-12">
            <div className="flex h-full w-full items-center justify-center p-8 md:p-16">
              <span className="text-3xl text-center">
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
