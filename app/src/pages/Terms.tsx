import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Terms() {
  return (
    <div className="relative min-h-screen bg-[#070B14] text-[#F2F5FA]">
      <div className="grain-overlay" />

      <div className="relative w-full max-w-[800px] mx-auto px-6 py-16 lg:py-24">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#A7B1C6] hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="text-sm">Back to Portfolio</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="text-sm font-medium text-[#4F6DFF] uppercase tracking-wider">Legal</span>
          <h1 className="text-[clamp(32px,5vw,56px)] font-bold leading-tight mt-3 mb-4">
            Terms of Use
          </h1>
          <p className="text-[#A7B1C6] text-sm">Last updated: March 14, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-[#A7B1C6] leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this portfolio website (dushyant.dev), you agree to be bound
              by these Terms of Use. If you do not agree to these terms, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">2. Intellectual Property</h2>
            <p>
              All content on this website — including but not limited to text, design, code, graphics,
              project descriptions, and visual assets — is the intellectual property of Dushyant Vasisht
              unless otherwise noted. You may not reproduce, distribute, or create derivative works from
              any content on this site without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">3. Permitted Use</h2>
            <p className="mb-3">You are permitted to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>View and browse the website for personal or professional reference</li>
              <li>Share links to this portfolio</li>
              <li>Download the resume PDF solely for recruitment or professional evaluation purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">4. Prohibited Use</h2>
            <p className="mb-3">You may not:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Copy, clone, or redistribute the design or source code of this portfolio as your own</li>
              <li>Use any content for commercial purposes without explicit consent</li>
              <li>Attempt to harm, disrupt, or exploit the website or its services</li>
              <li>Misrepresent your affiliation with this site or its owner</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">5. Contact Form</h2>
            <p>
              By submitting the contact form, you confirm that your message is genuine and not
              spam, and that you consent to being contacted in response. Abuse of the contact form
              (e.g., spam, malicious content) is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">6. Disclaimer</h2>
            <p>
              This website is provided "as is" without any warranties, express or implied. While I strive
              to keep the content accurate and up to date, I make no guarantees regarding the completeness
              or reliability of the information presented. Project descriptions and links are subject to
              change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">7. External Links</h2>
            <p>
              This site may contain links to third-party websites (GitHub, LinkedIn, etc.). These links
              are provided for convenience only. I have no control over the content of those sites and
              accept no responsibility for them.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Dushyant Vasisht shall not be liable
              for any indirect, incidental, or consequential damages arising from your use of, or
              inability to use, this website.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">9. Changes to These Terms</h2>
            <p>
              I reserve the right to update these Terms of Use at any time. Continued use of the website
              following any changes constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">10. Contact</h2>
            <p>
              For any questions regarding these terms, please reach out at{' '}
              <a
                href="mailto:dushyantvasisht@gmail.com"
                className="text-[#4F6DFF] hover:underline"
              >
                dushyantvasisht@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[rgba(242,245,250,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#A7B1C6]">
          <span>© {new Date().getFullYear()} Dushyant Vasisht. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="text-white">Terms</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
