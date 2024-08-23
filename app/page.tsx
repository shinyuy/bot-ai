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
			<main className='bg-white text-black min-h-screen'>
				<section className='flex justify-between items-center'>
					<div className='w-3/4 h-screen flex flex-col justify-center items-start px-32'>
						<div>
							<h1 className='font-extrabold text-6xl mb-8'>Empower Your Business with AI-Driven Chatbots</h1>
							<p>Deliver personalized customer experiences, streamline support, and increase engagement with custom chatbots built on your data.</p>
						</div>
						<div>
							<button className='mt-8 bg-sky-500 mr-8 text-xl text-white px-8 py-4 rounded-full'>Get Started for Free</button>
							<button className='mt-8 bg-white border text-sky-500 border-sky-500 px-8 py-4 rounded-full'>Request a Demo</button>
						</div>

					</div>
					<div className=''>
						<Image src={"/chatbot.png"} alt='Chatbot' width={0}
							height={0}
							sizes="100vw"
							style={{ width: '100%', height: 'auto' }} />
					</div>
				</section>
				<div className='w-full flex justify-center mt-32'>
					<h2 className='font-bold text-32 text-4xl mb-8'>How It Works</h2>
				</div>
				<section className=' w-full py-12'>
					<div className='w-wull flex justify-center px-32 h-screen'>
						<div className='w-1/2  flex justify-end items-start'>
							<Image src={"/dashboard.png"} alt='Chatbot' width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }} />
						</div>
						<div className='w-1/2 h-full flex items-center justify-center'>
							<span className='text-3xl text-black'><b>Connect Your Data</b>: Integrate your data sources, including PDFs, databases, and web content.</span>
						</div>
					</div>
					<div className='w-wull flex justify-center items-center px-32'>
						<div className='w-1/2 h-full flex items-center justify-center'>
							<span className='text-3xl text-black'><b>Train Your Bot</b>: Our AI models learn from your data to provide accurate and relevant responses.</span>
						</div>
						<div className='w-1/2  flex justify-end items-center'>
							<Image src={"/chatui.png"} alt='Chatbot' width={0}
								height={0}
								sizes="100vw"
								style={{ width: '50%', height: 'auto' }} />
						</div>

					</div>
					<div className='w-wull flex justify-center items-center px-32'>
						<div className='w-1/2  flex items-center'>
							<Image src={"/chatui.png"} alt='Chatbot' width={0}
								height={0}
								sizes="100vw"
								style={{ width: '50%', height: 'auto' }} />
						</div>
						<div className='w-1/2 h-full flex items-center justify-center'>
							<span className='text-3xl text-black'><b>Deploy with Ease:</b>: Add your chatbot to your website, app, or social media with just a few clicks.</span>
						</div>

					</div>
					<div className='w-wull flex justify-center items-center px-32'>
						<div className='w-1/2 h-full flex items-center justify-center'>
							<span className='text-3xl text-black'><b>Monitor & Optimize</b>: Use our analytics dashboard to track performance and refine responses.</span>
						</div>
						<div className='w-1/2  flex justify-end items-center'>
							<Image src={"/chatui.png"} alt='Chatbot' width={0}
								height={0}
								sizes="100vw"
								style={{ width: '50%', height: 'auto' }} />
						</div>

					</div>
				</section>
				<div className='w-full flex justify-center mb-16'>
					<h2 className='text-black text-4xl font-bold'>Why Choose Our AI-Powered Chatbots?</h2>
				</div>
				<section className='flex flex-row  text-white justify-center w-full h-screen py-0 m-0'>
					<div className='bg-black w-full  flex flex-col items-end py-12'>
						<div className='w-full h-full flex items-center justify-center p-16'>
							<span className='text-3xl'><b>Customizable AI Chatbots</b>: Tailored to your business needs, leveraging your unique data sources.</span>
						</div>
					</div>
					<div className='w-full py-12 '>
						<div className='w-full h-full flex items-center justify-center p-16'>
							<span className='text-3xl text-black'><b>Seamless Integration</b>: Works across websites, apps, and social media channels.</span>
						</div>
					</div>
				</section>
				<section className='flex flex-row  text-white justify-center w-full h-screen py-0 mb-0'>
					<div className='w-full py-12 '>
						<div className='w-full h-full flex items-center justify-center p-16'>
							<span className='text-3xl text-black'><b>Scalable Solutions</b>: Suitable for businesses of all sizes, from startups to enterprises.</span>
						</div>
					</div>
					<div className='bg-black w-full  flex flex-col items-end py-12'>
						<div className='w-full h-full flex items-center justify-center p-16'>
							<span className='text-3xl'><b>Multilingual Support</b>: Communicate with customers in their preferred language.</span>
						</div>
					</div>
				</section>
				<section className='h-56 bg-white'></section>

			</main >
		</>

	);
}
