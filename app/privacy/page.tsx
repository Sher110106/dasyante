export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="py-24 md:py-32 bg-bg-primary border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="font-dm-sans text-xs uppercase tracking-section text-accent-gold mb-6">
            Legal
          </p>
          <h1 className="font-cormorant text-5xl md:text-6xl text-text-primary leading-tight">
            Privacy Policy
          </h1>
          <p className="font-dm-sans text-sm text-text-tertiary mt-6">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="prose-dasyante space-y-12 font-dm-sans text-sm text-text-secondary leading-relaxed">

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">Overview</h2>
              <p>
                Dasyante ("we," "us," or "our") operates dasyante.com. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your information. We collect very little data, and we use what we collect only to make the experience better for you.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">Information We Collect</h2>
              <div className="space-y-3">
                <p><strong className="text-text-primary font-medium">Email address</strong> — collected when you join our waitlist or newsletter. Used only to send updates about Dasyante.</p>
                <p><strong className="text-text-primary font-medium">Inquiry information</strong> — name, email, and the details you provide when expressing interest in a piece. Used to connect you with the brand and fulfil your inquiry.</p>
                <p><strong className="text-text-primary font-medium">Partner application information</strong> — brand and contact details submitted through our partner form. Used to evaluate and respond to your application.</p>
                <p><strong className="text-text-primary font-medium">Usage data</strong> — anonymous analytics (pages visited, time on site) collected via Vercel Analytics. No personal data is associated with this.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">How We Use Your Information</h2>
              <ul className="space-y-2 pl-4">
                <li>• To respond to your inquiries and connect you with relevant brands</li>
                <li>• To send newsletter updates, if you've subscribed</li>
                <li>• To improve the site and understand which content is most useful</li>
                <li>• To evaluate brand partnership applications</li>
              </ul>
              <p>We do not sell, share, or rent your personal information to third parties. We do not send marketing emails other than updates you explicitly signed up for.</p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">Data Storage</h2>
              <p>
                Email and inquiry data is stored securely via JSONBin, a third-party API. Analytics are processed by Vercel. We take reasonable steps to protect your information but cannot guarantee absolute security.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">Cookies</h2>
              <p>
                We use only essential cookies required for the site to function. We do not use advertising cookies or third-party tracking cookies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">Your Rights</h2>
              <p>You may request that we:</p>
              <ul className="space-y-2 pl-4">
                <li>• Delete your email from our waitlist</li>
                <li>• Correct or delete any personal information you've submitted</li>
                <li>• Provide a copy of the data we hold about you</li>
              </ul>
              <p>
                To exercise any of these rights, write to us at{' '}
                <a href="mailto:help@dasyante.com" className="text-accent-gold hover:underline">
                  help@dasyante.com
                </a>
                . We will respond within 14 days.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">Changes to This Policy</h2>
              <p>
                We may update this policy occasionally. If we make significant changes, we'll update the date at the top of this page. Continued use of the site after changes constitutes acceptance.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cormorant text-2xl text-text-primary">Contact</h2>
              <p>
                Questions about this policy? Write to us at{' '}
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
