import Link from 'next/link';

export default function Terms() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose lg:prose-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Introduction
            </h2>
            <p>
              Welcome to Complete Vastu Solution. These terms and conditions outline the rules and regulations for the use of Complete Vastu Solution&apos;s Website, located at www.completevastu.com.
            </p>
            <p>
              By accessing this website we assume you accept these terms and conditions. Do not continue to use Complete Vastu Solution if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Definitions</h2>
            <p>
              The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &ldquo;Client&rdquo;, &ldquo;You&rdquo; and &ldquo;Your&rdquo; refers to you, the person log on this website and compliant to the Company&rsquo;s terms and conditions. &ldquo;The Company&rdquo;, &ldquo;Ourselves&rdquo;, &ldquo;We&rdquo;, &ldquo;Our&rdquo; and &ldquo;Us&rdquo;, refers to our Company. &ldquo;Party&rdquo;, &ldquo;Parties&rdquo;, or &ldquo;Us&rdquo;, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client&rsquo;s needs in respect of provision of the Company&rsquo;s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Intellectual Property Rights</h2>
            <p>
              Except where you own the intellectual property rights in the material, all intellectual property rights in the material on this website, are owned by Complete Vastu Solution and/or its licensors and are protected under copyright law.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">3. License</h2>
            <p>
              Unless otherwise stated, Complete Vastu Solution and/or its licensors own the intellectual property rights for all material on Complete Vastu Solution. All intellectual property rights are reserved. You may view and/or print pages from https://www.completevastu.com for your own personal use subject to restrictions set in these terms and conditions.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Comments</h2>
            <p>
              This Agreement shall begin on the date hereof. Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data (&lsquo;Comments&rsquo;) in areas of the website. Complete Vastu Solution does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Complete Vastu Solution,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Complete Vastu Solution shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
            </p>
            <p>
              Complete Vastu Solution reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall Complete Vastu Solution, nor its officers, directors and employees, be liable for any damages whatsoever (including, without limitation, damages for loss of profits, business interruption, loss of information) arising out of the use of or inability to use Complete Vastu Solution&apos;s materials, even if Complete Vastu Solution has been advised of the possibility of such damages.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Indemnification</h2>
            <p>
              You hereby indemnify to the fullest extent Complete Vastu Solution from and against any and all liabilities, costs, demands, causes of action, damages and expenses arising out of or related to your breach of any of the provisions of these Terms.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
            <p>
              Complete Vastu Solution reserves the right to modify these terms at any time. Such modifications shall be effective immediately upon posting. Your continued use of the website after any such change constitutes your acceptance of the new terms.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Netherlands and you submit to the non-exclusive jurisdiction of the state and federal courts located in Netherlands for the resolution of any disputes.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
            <p>
              Questions about the Terms and Conditions should be sent to us at info@completevastu.com.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link href="/" className="text-green-600 hover:text-green-800">
            ← Return to Homepage
          </Link>
        </div>
      </section>
    </>
  );
}