'use client'
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Provider from '../redux/provider';
import { Footer } from '../components/common';
import { Setup } from '../components/utils';
import { useEffect, Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Contexx AI',
//   description:
//     'Unlock the power of AI with our intelligent chatbots, designed to instantly answer questions from your PDFs or internal data sources. Simplify information access, enhance user engagement, and make data-driven decisions effortlessly. Whether it’s legal documents, business reports, or educational material, our chatbots deliver accurate answers in real-time, tailored to your needs. Experience the future of smart communication today',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    const iframe = document.getElementById('chatbot-ui');

  }, [])


  return (
    <html lang="en" >
      <head>
        <link rel="stylesheet" href="https://f005.backblazeb2.com/file/contexx/style.css" />

        <title>Contexx AI</title>
      </head>
      <body className={inter.className}>
        <Provider>
          <Suspense>
            <Setup />

            <div className="">
              {children}
            </div>
          </Suspense>

        </Provider>

        {/* <iframe id='chatbot-ui' src={`${process.env.NEXT_PUBLIC_HOST}/api/static-files/index.html/`}> </iframe> */}
        <iframe id='chatbot-ui' src={`https://f005.backblazeb2.com/file/contexx/index.html`}> </iframe>

      </body>
    </html>
  );
}
