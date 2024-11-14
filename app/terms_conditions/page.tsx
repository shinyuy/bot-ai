'use client'
import type { Metadata } from 'next';
import { Navbar } from '../../components/common';


// export const metadata: Metadata = {
//   title: 'Contexx AI',
//   description: 'Contexx AI pricing page',
// };

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-100 text-black">
                <div className="bg-gray-100 min-h-screen py-12 px-24">

                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-800">Terms and Conditions</h1>
                    </div>



                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
                        <p>
                            Welcome to Contexx AI (“we,” “our,” or “us”). By using our AI Chatbot SaaS platform (the “Service”), you agree to these Terms and Conditions. Please read them carefully as they contain important information about your rights and obligations.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">2. Acceptance of Terms</h2>
                        <p>
                            By accessing or using our Service, you confirm that you accept these Terms and agree to be bound by them. If you do not agree, you must not use our Service.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">3. User Accounts</h2>
                        <p>
                            To access our Service, you may be required to create an account and provide certain information. You agree to provide accurate information, maintain confidentiality of your account credentials, and promptly update any changes.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">4. Use of the Service</h2>
                        <p>
                            You agree to use the Service in compliance with all applicable laws and not to engage in activities that:
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Violate the rights of others or our policies.</li>
                            <li>Cause harm, disruption, or interfere with the operation of the Service.</li>
                            <li>Impersonate others or misrepresent your identity.</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">5. Subscription and Payment</h2>
                        <p>
                            Our Service may require a subscription for access to premium features. Fees are due in advance of the subscription term. Failure to pay may result in suspension or termination of your account.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">6. Intellectual Property</h2>
                        <p>
                            All content, software, and materials on the Service are the property of [Your Company Name] and are protected by intellectual property laws. You are granted a limited license to use the Service, but you may not copy, distribute, or create derivative works without our permission.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">7. Termination</h2>
                        <p>
                            We reserve the right to terminate or suspend your access to the Service at any time, without notice, for any reason, including if you breach these Terms.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">8. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, [Your Company Name] shall not be liable for any indirect, incidental, or consequential damages arising from your use or inability to use the Service.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">9. Changes to Terms</h2>
                        <p>
                            We may update these Terms periodically. We will notify you of any changes via email or through the Service. By continuing to use the Service, you agree to the updated Terms.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">10. Governing Law</h2>
                        <p>
                            These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising under these Terms will be resolved exclusively in the courts of [Your Jurisdiction].
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">11. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at:
                        </p>
                        <p className="font-medium">
                            Contexx AI<br />
                            <a href="mailto:[Your Contact Email]" className="text-blue-600">contact@contexxai.com</a><br />
                            Texas
                        </p>
                    </section>
                </div>
            </main >
        </>
    )
}