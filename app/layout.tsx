import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Provider from '../redux/provider';
import { Footer, Navbar } from '../components/common';
import { Setup } from '../components/utils';
import { useEffect, useState, Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bot AI',
  description:
    'Unlock the power of AI with our intelligent chatbots, designed to instantly answer questions from your PDFs or internal data sources. Simplify information access, enhance user engagement, and make data-driven decisions effortlessly. Whether it’s legal documents, business reports, or educational material, our chatbots deliver accurate answers in real-time, tailored to your needs. Experience the future of smart communication today',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const [isClient, setIsClient] = useState(false)

  // useEffect(() => {
  // 	setIsClient(true)
  // }, [])

  return (
    <html lang="en">
      {/* <link rel="stylesheet" href="https://bot-client-2b4.pages.dev/style.css" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
			<script src="https://bot-client-2b4.pages.dev/script.js" defer></script> */}

      {/* <meta name='Unlock the power of AI with our intelligent chatbots, designed to instantly answer questions from your PDFs or internal data sources. Simplify information access, enhance user engagement, and make data-driven decisions effortlessly. Whether it’s legal documents, business reports, or educational material, our chatbots deliver accurate answers in real-time, tailored to your needs. Experience the future of smart communication today' content='Description' /> */}

      <title>Bot AI</title>
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
        {/* {isClient &&
					<script src="https://bot-client-2b4.pages.dev/ui.js"></script>} */}
      </body>
    </html>
  );
}
