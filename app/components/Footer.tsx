import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-sm font-semibold text-foreground">PAGCOR Casino Reviews</span>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              The Philippines&apos; most trusted source for online casino reviews,
              expert ratings, and exclusive bonus comparisons.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Home</Link></li>
              <li><Link href="/#casinos" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Top Casinos</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Blog</Link></li>
              <li><Link href="/how-we-rate" className="text-muted-foreground hover:text-foreground text-sm transition-colors">How We Rate</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">
              Information
            </h4>
            <ul className="space-y-2">
              <li><Link href="/responsible-gambling" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Responsible Gambling</Link></li>
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">
              Disclaimer
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              18+. Gambling can be addictive. Please play responsibly.
              This site contains affiliate links. We may earn a commission at no extra cost to you.
              All casinos listed are PAGCOR licensed and regulated.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="px-2 py-1 bg-muted border border-border rounded-md text-xs text-muted-foreground font-medium">18+</span>
              <span className="px-2 py-1 bg-muted border border-border rounded-md text-xs text-muted-foreground font-medium">PAGCOR</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} PAGCOR Casino Reviews. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
