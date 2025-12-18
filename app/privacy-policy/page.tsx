export default function PrivacyPolicy() {
  const lastUpdated = "December 17, 2025";
  const companyName = process.env.COMPANY_NAME;
  const contactEmail = process.env.COMPANY_EMAIL;

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8 font-medium">
        Last Updated: {lastUpdated}
      </p>

      <section className="space-y-8 leading-relaxed">
        {/* Introduction */}
        <div>
          <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
          <p>
            At <span className="text-couchBlue font-medium">{companyName}</span>
            , we value your privacy. This policy explains how we collect, use,
            and protect your personal data when you visit our website or use our
            services. By using our site, you agree to the practices described
            here.
          </p>
        </div>

        {/* Data Collection */}
        <div>
          <h2 className="text-2xl font-bold mb-3">2. Information We Collect</h2>
          <p className="mb-2">
            We collect information that identifies you (Personal Data),
            including but not limited to:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>Identifiers:</strong> Name, email address, and phone
              number.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, and
              usage patterns.
            </li>
            <li>
              <strong>Sensitive Data:</strong> We do not collect sensitive
              biometrics or geolocation unless explicitly stated.
            </li>
          </ul>
        </div>

        {/* How We Use Data */}
        <div>
          <h2 className="text-2xl font-bold mb-3">3. How We Use Your Data</h2>
          <p>We process your data for the following purposes:</p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>To provide and maintain our services.</li>
            <li>To notify you about changes to our platform.</li>
            <li>For security and fraud prevention.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </div>

        {/* Data Retention & Security */}
        <div>
          <h2 className="text-2xl font-bold mb-3">4. Security & Retention</h2>
          <p>
            We implement industry-standard encryption (SSL/TLS) to protect your
            data. We retain your personal information only as long as necessary
            to fulfill its intended purpose or comply with legal requirements.
          </p>
        </div>

        {/* User Rights */}
        <div>
          <h2 className="text-2xl font-bold mb-3">5. Your Privacy Rights</h2>
          <p className="mb-2">
            Depending on your location (e.g., GDPR or CCPA), you may have the
            following rights:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>The right to access and receive a copy of your data.</li>
            <li>The right to request deletion (Right to be Forgotten).</li>
            <li>The right to withdraw consent at any time.</li>
            <li>The right to opt-out of automated decision-making.</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-3">6. Contact Us</h2>
          <p>
            If you have questions about this policy or wish to exercise your
            data rights, please contact our Data Protection Officer at:
          </p>
          <p className="mt-2 font-semibold text-blue-600">
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
