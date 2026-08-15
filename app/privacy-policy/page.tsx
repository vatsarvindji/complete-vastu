import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Privacy Policy
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
              Welcome to Complete Vastu Solution. We respect your privacy and are committed to protecting
  your personal data. This privacy policy will inform you as to how we look after your personal data when
  you visit our website (regardless of where you visit it from) and tell you about your privacy rights
  and how the law protects you.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Data Controller</h2>
            <p>
              Complete Vastu Solution (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is the data controller and responsible for
  your personal data.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we
  have grouped together follows:
            </p>
            <ul className="list-disc list-inside my-4">
              <li>
                <strong>Identity Data</strong> includes first name, maiden name, last name, username or
                similar identifier, marital status, title, date of birth and gender.
              </li>
              <li>
                <strong>Contact Data</strong> includes billing address, delivery address, email address
                and telephone numbers.
              </li>
              <li>
                <strong>Financial Data</strong> includes bank account and payment card details.
              </li>
              <li>
                <strong>Transaction Data</strong> includes details about payments to and from you and
                other details of products and services you have purchased from us.
              </li>
              <li>
                <strong>Technical Data</strong> includes internet protocol (IP) address, your login data,
                browser type and version, time zone setting and location, browser plug-in types and
                versions, operating system and platform and other technology on the devices you use to
                access our website.
              </li>
              <li>
                <strong>Profile Data</strong> includes your username and password, purchases or orders
                made by you, your interests, preferences, feedback and survey responses.
              </li>
              <li>
                <strong>Usage Data</strong> includes information about how you use our website, products
                and services.
              </li>
              <li>
                <strong>Marketing and Communications Data</strong> includes your preferences in
                receiving marketing from us and our third parties and your communication preferences.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mb-4">3. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use
  your personal data in the following circumstances:
            </p>
            <ul className="list-disc list-inside my-4">
              <li>
                Where we need to perform the contract we are about to enter into or have entered into
                with you.
              </li>
              <li>
                Where it is necessary for our legitimate interests (or those of a third party) and your
                interests and fundamental rights do not override those interests.
              </li>
              <li>
                Where we need to comply with a legal or regulatory obligation.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Sharing Your Personal Data</h2>
            <p>
              We may share your personal data with the following parties for the purposes set out in
                this policy:
            </p>
            <ul className="list-disc list-inside my-4">
              <li>Service providers who provide IT and system administration services.</li>
              <li>Professional advisers including lawyers, bankers, auditors and insurers.</li>
              <li>HM Revenue & Customs, regulators and other authorities based in relevant jurisdictions.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to
  protect your personal data against accidental loss and unauthorized access, use, alteration and
  disclosure.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfill the purposes we
  collected it for, including for the purposes of satisfying any legal, accounting, or reporting
                requirements.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to
  your personal data:
            </p>
            <ul className="list-disc list-inside my-4">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users of our website. This helps us
  to provide you with a good experience when you browse our website and also allows us to improve our
                site.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We keep our privacy policy under regular review and we will place any updates on this web
                page. This privacy policy was last updated on the date stated above.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
            <p>
              Questions, comments and requests regarding this privacy policy are welcomed and should be
  addressed to info@completevastu.com.
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