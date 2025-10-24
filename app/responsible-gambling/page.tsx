import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Responsible Gambling - Play Safe',
  description:
    'Learn about responsible gambling practices, self-exclusion tools, and where to get help if gambling becomes a problem. Your wellbeing comes first.',
  alternates: { canonical: 'https://pagcorcasino.ph/responsible-gambling' },
};

export default function ResponsibleGamblingPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
          <li><span className="mx-1">/</span></li>
          <li><span className="text-muted-foreground">Responsible Gambling</span></li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
        Responsible <span className="text-primary">Gambling</span>
      </h1>

      <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg mb-10">
        <p className="text-primary font-semibold text-lg">
          Gambling should always be fun and entertaining. If it stops being enjoyable, it&apos;s time to take a step back.
        </p>
      </div>

      <div className="prose-casino space-y-6">
        <p className="text-lg">
          At PAGCOR Casino Reviews, we take responsible gambling seriously. While we help players find
          the best online casinos, we also want to ensure that gambling remains a safe and enjoyable
          form of entertainment. Below you&apos;ll find tips, tools, and resources to help you stay in control.
        </p>

        <h2>Tips for Safe Gambling</h2>
        <ul>
          <li><strong>Set a Budget</strong> &mdash; Decide how much you can afford to lose before you start playing and never exceed that amount.</li>
          <li><strong>Set Time Limits</strong> &mdash; Decide how long you&apos;ll play before starting a session and stick to it.</li>
          <li><strong>Never Chase Losses</strong> &mdash; Accept losses as part of the game. Trying to win back lost money often leads to bigger losses.</li>
          <li><strong>Don&apos;t Gamble Under the Influence</strong> &mdash; Avoid gambling when you&apos;re under the influence of alcohol or drugs, as this impairs judgment.</li>
          <li><strong>Take Regular Breaks</strong> &mdash; Step away from the screen regularly to maintain perspective.</li>
          <li><strong>Don&apos;t Borrow to Gamble</strong> &mdash; Only gamble with money you can afford to lose. Never borrow money or use credit to fund gambling.</li>
          <li><strong>Balance Your Life</strong> &mdash; Ensure gambling doesn&apos;t interfere with your work, relationships, or daily responsibilities.</li>
        </ul>

        <h2>Warning Signs of Problem Gambling</h2>
        <p>If you recognize any of the following signs in yourself or someone you know, it may be time to seek help:</p>
        <ul>
          <li>Spending more money or time gambling than you intended</li>
          <li>Feeling restless or irritable when not gambling</li>
          <li>Chasing losses or increasing bets to feel the same excitement</li>
          <li>Lying to family or friends about your gambling habits</li>
          <li>Neglecting work, school, or family responsibilities</li>
          <li>Borrowing money or selling possessions to fund gambling</li>
          <li>Feeling anxious, depressed, or hopeless because of gambling</li>
        </ul>

        <h2>Self-Exclusion Tools</h2>
        <p>
          Most PAGCOR-licensed casinos offer self-exclusion tools that allow you to temporarily or
          permanently block your access. We recommend using these tools if you feel you need a break:
        </p>
        <ul>
          <li><strong>Deposit Limits</strong> &mdash; Set daily, weekly, or monthly deposit limits on your casino account.</li>
          <li><strong>Loss Limits</strong> &mdash; Set a maximum amount you&apos;re willing to lose in a given period.</li>
          <li><strong>Session Limits</strong> &mdash; Limit the time you spend in a single gambling session.</li>
          <li><strong>Self-Exclusion</strong> &mdash; Temporarily or permanently exclude yourself from a casino platform.</li>
          <li><strong>Reality Checks</strong> &mdash; Set up notifications that remind you how long you&apos;ve been playing.</li>
        </ul>

        <h2>Get Help</h2>
        <p>If you or someone you know is struggling with problem gambling, the following organizations can help:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <div className="p-5 bg-muted rounded-lg border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">PAGCOR</h3>
            <p className="text-sm text-muted-foreground mb-2">Philippine Amusement and Gaming Corporation</p>
            <p className="text-sm text-muted-foreground">Hotline: (02) 8242-0071</p>
          </div>
          <div className="p-5 bg-muted rounded-lg border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">Gamblers Anonymous</h3>
            <p className="text-sm text-muted-foreground mb-2">International support group for problem gamblers</p>
            <p className="text-sm text-primary">www.gamblersanonymous.org</p>
          </div>
          <div className="p-5 bg-muted rounded-lg border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">GamCare</h3>
            <p className="text-sm text-muted-foreground mb-2">Free information, support &amp; counseling</p>
            <p className="text-sm text-primary">www.gamcare.org.uk</p>
          </div>
          <div className="p-5 bg-muted rounded-lg border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">BeGambleAware</h3>
            <p className="text-sm text-muted-foreground mb-2">Free, confidential help &amp; resources</p>
            <p className="text-sm text-primary">www.begambleaware.org</p>
          </div>
        </div>

        <h2>Underage Gambling</h2>
        <p>
          Online gambling is strictly for individuals aged 18 and above. It is illegal for minors to
          gamble online in the Philippines. All PAGCOR-licensed casinos are required to verify the age
          of their players. If you are a parent or guardian, we recommend using parental control software
          to prevent minors from accessing gambling websites.
        </p>
      </div>
    </article>
  );
}
