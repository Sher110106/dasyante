export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-24 md:py-32 bg-bg-primary border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="font-dm-sans text-xs uppercase tracking-section text-accent-gold mb-6">
            Legal
          </p>
          <h1 className="font-cormorant text-5xl md:text-6xl text-text-primary leading-tight">
            Terms of Service
          </h1>
          <p className="font-dm-sans text-sm text-text-tertiary mt-6">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="space-y-12 font-dm-sans text-sm text-text-secondary leading-relaxed">

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">Acceptance of Terms</h2>
              <p>
                By accessing and using dasyante.com ("the Site"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">What Dasyante Is</h2>
              <p>
                Dasyante is a curated editorial platform and marketplace connector for jewellery. We present brand stories and facilitate connections between customers and brands. Dasyante itself is not the seller of record for any product — all purchases are made directly with the individual brands.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">Purchases & Inquiries</h2>
              <p>
                Product inquiries submitted through the Site are expressions of interest, not binding purchases. Actual sales are finalised directly between you and the brand. Dasyante is not responsible for the quality, availability, or delivery of products sold by partner brands.
              </p>
              <p>
                Prices displayed are indicative and subject to confirmation by the brand at the time of inquiry.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">Intellectual Property</h2>
              <p>
                All content on the Site — including text, photography, design, and code — is owned by Dasyante or licensed for use. You may not reproduce, distribute, or use any content without prior written permission.
              </p>
              <p>
                Brand logos and product images remain the property of their respective brands.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">Prohibited Conduct</h2>
              <p>You agree not to:</p>
              <ul className="space-y-2 pl-4">
                <li>• Use the Site for any unlawful purpose</li>
                <li>• Submit false or misleading information in forms</li>
                <li>• Attempt to gain unauthorised access to any part of the Site</li>
                <li>• Use automated tools to scrape, crawl, or extract content from the Site</li>
                <li>• Interfere with the normal operation of the Site</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">Disclaimer of Warranties</h2>
              <p>
                The Site is provided "as is" without warranties of any kind, express or implied. We do not guarantee that the Site will be uninterrupted, error-free, or free of harmful components. We make no warranties regarding the accuracy or completeness of information on the Site.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Dasyante shall not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, the Site or products purchased through it.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">Governing Law</h2>
              <p>
                These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of India.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">Changes to These Terms</h2>
              <p>
                We may revise these Terms at any time. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">Contact</h2>
              <p>
                Questions about these Terms? Write to{' '}
                <a href="mailto:help@dasyante.com" className="text-accent-gold hover:underline">
                  help@dasyante.com
                </a>
                .
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
