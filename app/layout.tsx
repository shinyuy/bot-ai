'use client'
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Provider from '../redux/provider';
import { Footer, Navbar } from '../components/common';
import { Setup } from '../components/utils';
import { useEffect, useState, Suspense } from 'react';
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Contexx AI',
//   description:
//     'Unlock the power of AI with our intelligent chatbots, designed to instantly answer questions from your PDFs or internal data sources. Simplify information access, enhance user engagement, and make data-driven decisions effortlessly. Whether it’s legal documents, business reports, or educational material, our chatbots deliver accurate answers in real-time, tailored to your needs. Experience the future of smart communication today',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    const iframe = document.getElementById('chatbot-ui');
    console.log(iframe)
  }, [])


  return (
    <html lang="en" >
      <head>
        <link rel="stylesheet" href="http://127.0.0.1:5500/bot/style.css" />

        <title>Contexx AI</title>
      </head>
      <body className={inter.className}>
        <Provider>
          <Suspense>
            <Setup />

            <div className="">
              {children}
            </div>
            <Footer />
          </Suspense>

        </Provider>

        <iframe id='chatbot-ui' src="http://127.0.0.1:5500/bot/index.html"
        ></iframe>
      </body>
    </html>
  );
}
