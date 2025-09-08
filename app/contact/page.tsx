import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with PAGCOR Casino Reviews. Have a question, suggestion, or feedback? We\'d love to hear from you.',
  alternates: { canonical: 'https://pagcorcasino.ph/contact' },
};

export default function ContactPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
          <li><span className="mx-1">/</span></li>
          <li><span className="text-muted-foreground">Contact Us</span></li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
        Contact <span className="text-primary">Us</span>
      </h1>

      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Have a question, suggestion, or feedback? We&apos;d love to hear from you.
        Fill out the form below and our team will get back to you within 24-48 hours.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg
                             text-foreground placeholder-muted-foreground
                             focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                             transition-all"
                  placeholder="Juan Dela Cruz"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg
                             text-foreground placeholder-muted-foreground
                             focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                             transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg
                           text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                           transition-all"
              >
                <option value="general">General Inquiry</option>
                <option value="review">Request a Casino Review</option>
                <option value="correction">Report an Error or Correction</option>
                <option value="partnership">Business / Partnership</option>
                <option value="feedback">Feedback / Suggestion</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg
                           text-foreground placeholder-muted-foreground resize-none
                           focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                           transition-all"
                placeholder="Tell us how we can help..."
              />
            </div>

            <button
              type="submit"
              className="btn-primary text-base px-8 py-4 w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>

        <aside className="lg:col-span-1">
          <div className="card p-6 space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Email</p>
              <p className="text-primary font-medium">contact@pagcorcasino.ph</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Response Time</p>
              <p className="text-muted-foreground">24-48 hours</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Office Hours</p>
              <p className="text-muted-foreground">Monday - Friday</p>
              <p className="text-muted-foreground text-sm">9:00 AM - 6:00 PM (PHT)</p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                For urgent gambling-related concerns, please visit our{' '}
                <Link href="/responsible-gambling" className="text-primary hover:text-foreground">
                  Responsible Gambling
                </Link>{' '}
                page for immediate help resources.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
