import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-[#A7B1C6] text-sm">Last updated: March 14, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-[#A7B1C6] leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-semibold mb-3">1. Overview</h2>
            <p>
              This portfolio website is operated by Dushyant Vasisht. I respect your privacy and am committed
              to protecting any information you share while visiting this site. This policy outlines what data
              is collected, how it is used, and your rights regarding that data.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">2. Information I Collect</h2>
            <p className="mb-3">
              When you use the contact form on this site, I collect:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Your name</li>
              <li>Your email address</li>
              <li>The message content you submit</li>
            </ul>
            <p className="mt-3">
              No other personally identifiable information is collected. I do not use cookies for tracking
              or analytics purposes.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">3. How I Use Your Information</h2>
            <p className="mb-3">The information you provide through the contact form is used solely to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Respond to your inquiry or message</li>
              <li>Send you an automated acknowledgement reply</li>
            </ul>
            <p className="mt-3">
              Your data is never sold, shared with third parties, or used for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">4. Third-Party Services</h2>
            <p>
              This site uses <strong className="text-white">EmailJS</strong> to process contact form
              submissions. EmailJS may process your name, email, and message in accordance with their own
              privacy policy. I encourage you to review{' '}
              <a
                href="https://www.emailjs.com/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F6DFF] hover:underline"
              >
                EmailJS's Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">5. Data Retention</h2>
            <p>
              Messages sent through the contact form are retained only as long as necessary to respond
              to your inquiry. I do not store contact form data in any database on this site.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">6. External Links</h2>
            <p>
              This portfolio contains links to external websites such as GitHub, LinkedIn, and Instagram.
              I am not responsible for the privacy practices of those sites and encourage you to review
              their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">7. Your Rights</h2>
            <p>
              You have the right to request deletion of any personal data you have submitted through the
              contact form. To make such a request, please contact me directly at{' '}
              <a
                href="mailto:dushyantvasisht@gmail.com"
                className="text-[#4F6DFF] hover:underline"
              >
                dushyantvasisht@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">8. Changes to This Policy</h2>
            <p>
              I may update this Privacy Policy from time to time. Any changes will be reflected on this
              page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">9. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, you can reach me at{' '}
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
            <Link to="/privacy" className="text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
