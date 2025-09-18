import type { Metadata } from 'next';
import Link from 'next/link';
import StarRating from '@/app/components/StarRating';

export const metadata: Metadata = {
  title: 'How We Rate Casinos - Our Review Methodology',
  description:
    'Discover our transparent casino review process. Learn how we evaluate PAGCOR-licensed casinos on safety, bonuses, games, payments, and customer support.',
  alternates: { canonical: 'https://pagcorcasino.ph/how-we-rate' },
};

const criteria = [
  {
    title: 'Safety & Licensing',
    weight: '25%',
    description: 'We verify PAGCOR licensing, SSL encryption, responsible gambling tools, and data protection policies. This is the most important factor in our review.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Game Selection',
    weight: '20%',
    description: 'We evaluate the variety and quality of slots, table games, live dealer options, and game providers. We look for titles from top studios like Jili, PG Soft, Pragmatic Play, and Evolution Gaming.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.421 48.421 0 01-4.185-.07c-.663-.066-1.113-.6-1.113-1.267v-1.39c0-.723.466-1.365 1.159-1.498a36.19 36.19 0 018.142 0c.693.133 1.159.775 1.159 1.498v1.39c0 .667-.45 1.2-1.113 1.267a48.42 48.42 0 01-4.185.07A.64.64 0 0114.25 6.087zM9.75 8.25a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5 7.5 7.5-7.5" />
      </svg>
    ),
  },
  {
    title: 'Bonuses & Promotions',
    weight: '20%',
    description: 'We analyze welcome bonuses, wagering requirements, ongoing promotions, VIP programs, and the overall fairness of bonus terms and conditions.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Payment Methods',
    weight: '15%',
    description: 'We test deposit and withdrawal options including GCash, PayMaya, bank transfers, and cryptocurrency. We measure processing speeds and check for hidden fees.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: 'Customer Support',
    weight: '10%',
    description: 'We contact support via live chat, email, and phone (where available) to test response times, knowledge, and helpfulness across multiple scenarios.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: 'Mobile Experience',
    weight: '10%',
    description: 'We test the mobile website and dedicated apps on both Android and iOS devices, evaluating loading speeds, navigation, and game compatibility.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
];

const ratingScale = [
  { range: '4.5 - 5.0', label: 'Excellent', description: 'Outstanding casino that excels in all areas. Highly recommended.', rating: 4.8 },
  { range: '4.0 - 4.4', label: 'Very Good', description: 'Strong performer with minor areas for improvement.', rating: 4.2 },
  { range: '3.5 - 3.9', label: 'Good', description: 'Solid casino with some notable strengths and weaknesses.', rating: 3.7 },
  { range: '3.0 - 3.4', label: 'Average', description: 'Meets basic standards but lacks standout features.', rating: 3.2 },
  { range: 'Below 3.0', label: 'Below Average', description: 'Significant issues identified. We recommend caution.', rating: 2.5 },
];

export default function HowWeRatePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
          <li><span className="mx-1">/</span></li>
          <li><span className="text-foreground">How We Rate</span></li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
        How We Rate Casinos
      </h1>

      <div className="prose-casino">
        <p className="text-base text-muted-foreground leading-relaxed mb-10">
          Transparency is at the core of everything we do. Our review methodology is designed to give
          you a clear, honest picture of each casino&apos;s strengths and weaknesses. Here&apos;s exactly how
          we evaluate every PAGCOR-licensed casino.
        </p>
      </div>

      <h2 className="text-xl font-semibold text-foreground mb-6">Our Rating Criteria</h2>
      <div className="space-y-3 mb-16">
        {criteria.map((item) => (
          <div key={item.title} className="card p-5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-md bg-muted flex items-center justify-center text-primary">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                  <span className="text-primary font-medium text-xs bg-primary/10 px-2 py-0.5 rounded-md">
                    {item.weight}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold text-foreground mb-6">Rating Scale</h2>
      <div className="overflow-x-auto rounded-lg border border-border mb-16">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="bg-muted border-b border-border">
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground font-medium">Rating</th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground font-medium">Label</th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground font-medium">Stars</th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground font-medium">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {ratingScale.map((item) => (
              <tr key={item.range} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                <td className="px-4 py-3 font-medium text-sm text-foreground">{item.range}</td>
                <td className="px-4 py-3 text-primary font-medium text-sm">{item.label}</td>
                <td className="px-4 py-3"><StarRating rating={item.rating} size="sm" /></td>
                <td className="px-4 py-3 text-muted-foreground text-sm">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose-casino">
        <h2>Our Testing Process</h2>
        <ol>
          <li><strong>Account Creation</strong> &mdash; We register a real account and verify the sign-up process.</li>
          <li><strong>Deposit Testing</strong> &mdash; We make real deposits using multiple payment methods.</li>
          <li><strong>Game Testing</strong> &mdash; We play a variety of games across different categories for at least 10 hours.</li>
          <li><strong>Bonus Evaluation</strong> &mdash; We claim bonuses and track wagering requirement progress.</li>
          <li><strong>Withdrawal Test</strong> &mdash; We request withdrawals and measure processing times.</li>
          <li><strong>Support Testing</strong> &mdash; We contact customer support with real questions at different times.</li>
          <li><strong>Final Review</strong> &mdash; Our editorial team compiles findings and assigns the final rating.</li>
        </ol>
      </div>
    </article>
  );
}
