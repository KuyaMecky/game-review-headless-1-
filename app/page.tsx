import { fetchAPI } from '@/lib/api';
import { GET_ALL_CASINOS, GET_ALL_POSTS } from '@/lib/graphql';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/app/components/HeroSection';
import CasinoCard from '@/app/components/CasinoCard';
import ComparisonTable from '@/app/components/ComparisonTable';

const SITE_URL = 'https://pagcorcasino.ph';

/* ---------- Structured Data ---------- */

function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PAGCOR Casino Reviews',
    url: SITE_URL,
    description:
      'Find the best PAGCOR-licensed online casinos in the Philippines for 2026.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/reviews/{search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PAGCOR Casino Reviews',
    url: SITE_URL,
    description:
      'Expert reviews and ratings of PAGCOR-licensed online casinos in the Philippines.',
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ItemListSchema({ casinos }: { casinos: any[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best PAGCOR Licensed Casinos 2026',
    description: 'Top rated PAGCOR-licensed online casinos ranked by our experts.',
    numberOfItems: casinos.length,
    itemListElement: casinos.map((casino: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: casino.title,
      url: `${SITE_URL}/reviews/${casino.slug}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const FAQ_ITEMS = [
  {
    question: 'What is PAGCOR and why does it matter?',
    answer:
      'PAGCOR (Philippine Amusement and Gaming Corporation) is the government agency that regulates all gambling activities in the Philippines. A PAGCOR license ensures that an online casino operates legally, follows strict security protocols, uses fair gaming software, and provides player protection. Playing at a PAGCOR-licensed casino means your funds and personal data are safeguarded under Philippine law.',
  },
  {
    question: 'How do we choose the best online casinos in the Philippines?',
    answer:
      'Our expert team evaluates every casino across six key criteria: Safety & Licensing (25%), Game Selection (20%), Bonuses & Promotions (20%), Payment Methods (15%), Customer Support (10%), and Mobile Experience (10%). Each casino is tested with real accounts, and we verify PAGCOR license validity before publishing any review. We update our ratings quarterly to reflect changes in casino performance.',
  },
  {
    question: 'Are online casinos legal in the Philippines?',
    answer:
      'Yes, online casinos are legal in the Philippines when they hold a valid license from PAGCOR or other authorized regulatory bodies. PAGCOR was established in 1976 and has been regulating online gaming since 2003. All casinos featured on our site are verified PAGCOR license holders, ensuring full legal compliance for Filipino players.',
  },
  {
    question: 'What bonuses can I expect at PAGCOR casinos?',
    answer:
      'PAGCOR-licensed casinos typically offer welcome bonuses ranging from 100% to 500% on your first deposit, along with free spins, cashback offers, and VIP loyalty programs. Some casinos offer no-deposit bonuses so you can try their games for free. Always read the wagering requirements and terms before claiming any bonus offer.',
  },
  {
    question: 'How do I deposit and withdraw at Philippine online casinos?',
    answer:
      'Filipino players can use a variety of payment methods including GCash, Maya (PayMaya), bank transfers via BDO, BPI, and UnionBank, e-wallets like Skrill and Neteller, prepaid cards, and cryptocurrency. Most PAGCOR casinos process deposits instantly and withdrawals within 24-48 hours depending on the method chosen.',
  },
  {
    question: 'Is my personal and financial information safe at PAGCOR casinos?',
    answer:
      'PAGCOR-licensed casinos are required to use SSL encryption (256-bit) to protect all data transmissions. They must also comply with anti-money laundering regulations, verify player identities (KYC), and keep player funds in segregated accounts. Our team verifies these security measures as part of our review process.',
  },
  {
    question: 'What types of casino games are available online?',
    answer:
      'PAGCOR-licensed online casinos offer thousands of games including slots (video slots, progressive jackpots, classic slots), table games (blackjack, roulette, baccarat, poker), live dealer games with real croupiers, sports betting, fishing games, lottery, and specialty games like keno and scratch cards. Top providers include Evolution Gaming, Pragmatic Play, Microgaming, and PG Soft.',
  },
  {
    question: 'How can I gamble responsibly?',
    answer:
      'We strongly advocate responsible gambling. Set a budget before you play and never chase losses. Use the deposit limits, loss limits, and self-exclusion tools offered by every PAGCOR-licensed casino. Take regular breaks and never gamble when emotionally distressed. If you think you may have a gambling problem, contact PAGCOR\'s responsible gaming helpline or visit our Responsible Gambling page for resources.',
  },
];

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ---------- Page ---------- */

export default async function Home() {
  const [casinoData, postData] = await Promise.all([
    fetchAPI(GET_ALL_CASINOS),
    fetchAPI(GET_ALL_POSTS),
  ]);
  const casinos = casinoData?.casinos?.nodes ?? [];
  const posts = (postData?.posts?.nodes ?? []).slice(0, 3);

  return (
    <>
      <WebsiteSchema />
      <OrganizationSchema />
      <FAQSchema />
      {casinos.length > 0 && <ItemListSchema casinos={casinos} />}

      <HeroSection />

      {/* Top Rated Casinos */}
      <section id="casinos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Top Rated PAGCOR Casinos
          </h2>
          <p className="mt-3 text-muted-foreground text-sm max-w-xl mx-auto">
            Hand-picked and reviewed by our expert team. Updated for 2026.
          </p>
        </div>

        {casinos.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No casinos found. Please configure your WordPress backend.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {casinos.map((casino: any, index: number) => (
              <CasinoCard
                key={casino.slug}
                casino={casino}
                index={index}
                rank={index + 1}
              />
            ))}
          </div>
        )}
      </section>

      {/* Why Trust Us */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Why Trust Our Reviews
            </h2>
            <p className="mt-3 text-muted-foreground text-sm max-w-2xl mx-auto">
              We are the Philippines&apos; most trusted independent casino review platform,
              helping thousands of Filipino players find safe and rewarding online casinos since 2023.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: 'PAGCOR Verified',
                desc: 'Every casino we list holds a valid PAGCOR license. We verify license numbers directly with the regulator before publishing any review.',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
                title: 'Expert Tested',
                desc: 'Our team creates real accounts, makes real deposits, and tests every aspect of each casino before rating it.',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                  </svg>
                ),
                title: 'Updated Monthly',
                desc: 'Casino bonuses and conditions change frequently. We re-evaluate every listed casino monthly to ensure accuracy.',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: '100% Free',
                desc: 'Our reviews are completely free. We earn commissions from casinos, but this never affects our editorial ratings.',
              },
            ].map((item, i) => (
              <div key={i} className="card p-5 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-muted text-primary mb-3">
                  {item.icon}
                </div>
                <h3 className="text-sm font-medium text-foreground mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Review */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            How We Review Casinos
          </h2>
          <p className="mt-3 text-muted-foreground text-sm max-w-2xl mx-auto">
            Our rigorous six-step evaluation process ensures every casino on our platform
            meets the highest standards of safety, fairness, and player satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { step: '01', title: 'License Verification', desc: 'We confirm a valid PAGCOR license directly through official government records. Only casinos with active licenses make it past this stage.' },
            { step: '02', title: 'Security Audit', desc: 'We verify SSL encryption, responsible gaming tools, privacy policies, and certified random number generators from independent auditors.' },
            { step: '03', title: 'Real Account Testing', desc: 'Our experts create real accounts, deposit real money, play games across all categories, and request withdrawals to test the full experience.' },
            { step: '04', title: 'Bonus Analysis', desc: 'We claim every bonus offer, read the fine print, calculate wagering requirements, and determine the real value of welcome packages.' },
            { step: '05', title: 'Support Evaluation', desc: 'We test customer support across all channels, measuring response times, helpfulness, and availability during Philippine business hours.' },
            { step: '06', title: 'Final Scoring', desc: 'Each casino receives a weighted score across Safety (25%), Games (20%), Bonuses (20%), Payments (15%), Support (10%), and Mobile (10%).' },
          ].map((item, i) => (
            <div key={i} className="card p-5 relative">
              <span className="text-xs font-medium text-primary mb-2 block">{item.step}</span>
              <h3 className="text-sm font-medium text-foreground mb-1.5">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/how-we-rate" className="btn-outline text-sm px-5 py-2.5">
            Learn More About Our Rating System
          </Link>
        </div>
      </section>

      {/* Comparison Table */}
      {casinos.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Casino Comparison
            </h2>
            <p className="mt-3 text-muted-foreground text-sm max-w-2xl mx-auto">
              Compare the top PAGCOR-licensed casinos side by side. See bonuses, ratings, and features
              at a glance to find the perfect casino for your playing style.
            </p>
          </div>
          <ComparisonTable casinos={casinos} />
        </section>
      )}

      {/* Online Casino Guide */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-5">
                Complete Guide to Online Casinos in the Philippines
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  The Philippines has become one of Southeast Asia&apos;s most vibrant online gambling markets,
                  thanks to the progressive regulatory framework established by the Philippine Amusement and
                  Gaming Corporation (PAGCOR). With a rapidly growing internet-savvy population and widespread
                  adoption of digital payment methods like GCash and Maya, millions of Filipinos now enjoy
                  safe and legal online casino entertainment.
                </p>
                <p>
                  PAGCOR, established under Presidential Decree No. 1067-A in 1976, serves as both the regulator
                  and operator of gaming activities in the country. For online casinos, PAGCOR issues licenses
                  under the Philippine Offshore Gaming Operations (POGO) framework, ensuring that operators
                  meet strict standards for player protection, fair gaming, anti-money laundering compliance,
                  and responsible gambling practices.
                </p>
                <p>
                  When you play at a PAGCOR-licensed casino, you benefit from mandatory safeguards including
                  segregated player funds, independently audited random number generators, SSL-encrypted
                  transactions, and access to dispute resolution mechanisms. These protections make PAGCOR
                  casinos among the safest choices for Filipino players and international visitors alike.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-5">
                What Makes a Great Casino
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Generous Welcome Bonuses', desc: 'The best PAGCOR casinos offer welcome packages worth up to PHP 50,000 or more, including deposit match bonuses and free spins with fair wagering requirements.' },
                  { title: 'Fast & Flexible Payments', desc: 'Top casinos support GCash, Maya, bank transfers, e-wallets, and crypto. Look for instant deposits and withdrawals processed within 24 hours.' },
                  { title: 'Diverse Game Library', desc: 'From live baccarat and blackjack to thousands of video slots and fishing games, the best casinos partner with premium providers like Evolution, Pragmatic Play, and PG Soft.' },
                  { title: 'Mobile-First Experience', desc: 'Over 80% of Filipino players access casinos via mobile. Top-rated casinos offer dedicated apps or fully responsive websites optimized for Android and iOS.' },
                  { title: '24/7 Filipino Support', desc: 'The best casinos provide round-the-clock support in English and Filipino via live chat, email, and phone, with average response times under 2 minutes.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-md bg-muted flex items-center justify-center text-primary font-medium text-xs mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-0.5">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <h3 className="text-xl font-semibold text-foreground">
              Popular Casino Games Among Filipino Players
            </h3>
            <p>
              Filipino players have diverse gaming preferences that reflect both local tradition and international
              trends. <strong className="text-foreground">Live baccarat</strong> remains the most popular table game, deeply rooted in Filipino
              gambling culture. <strong className="text-foreground">Online slots</strong> have surged in popularity thanks to their accessibility,
              with progressive jackpot games offering life-changing prizes in the millions of pesos.
            </p>
            <p>
              <strong className="text-foreground">Fishing games</strong> — a uniquely popular genre in the Philippine market — combine skill
              and luck in visually stunning underwater adventures. <strong className="text-foreground">Sports betting</strong> is another
              major category, especially during basketball season (PBA and NBA), cockfighting (e-sabong), and
              international football events. <strong className="text-foreground">Live dealer games</strong> powered by Evolution Gaming
              and Asia Gaming bring the authentic casino floor experience to your screen, with professional
              dealers streaming in real time from studios in Manila and internationally.
            </p>
            <p>
              Whether you prefer the strategy of <strong className="text-foreground">poker</strong> and <strong className="text-foreground">blackjack</strong>, the
              thrill of <strong className="text-foreground">roulette</strong>, or the instant excitement of <strong className="text-foreground">scratch cards</strong> and{' '}
              <strong className="text-foreground">keno</strong>, PAGCOR-licensed casinos offer thousands of titles from the world&apos;s
              top game developers. Our reviews break down the game libraries of each casino so you can find
              the perfect match for your playing style.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Trusted Payment Methods
          </h2>
          <p className="mt-3 text-muted-foreground text-sm max-w-2xl mx-auto">
            PAGCOR-licensed casinos support the payment methods Filipino players use every day.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { name: 'GCash', desc: 'Instant deposit & withdrawal' },
            { name: 'Maya', desc: 'Fast & secure e-wallet' },
            { name: 'BDO', desc: 'Online bank transfer' },
            { name: 'BPI', desc: 'Online bank transfer' },
            { name: 'UnionBank', desc: 'Instant bank transfer' },
            { name: 'Crypto', desc: 'Bitcoin, USDT, ETH' },
          ].map((method, i) => (
            <div key={i} className="card p-4 text-center">
              <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center mx-auto mb-2">
                <span className="text-primary font-medium text-xs">{method.name.slice(0, 2).toUpperCase()}</span>
              </div>
              <h4 className="text-foreground font-medium text-sm">{method.name}</h4>
              <p className="text-muted-foreground text-xs mt-0.5">{method.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      {posts.length > 0 && (
        <section className="border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Latest Casino News & Guides
              </h2>
              <p className="mt-3 text-muted-foreground text-sm max-w-2xl mx-auto">
                Stay informed with our latest articles covering casino strategies, bonus guides,
                industry news, and tips for Filipino players.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {posts.map((post: any) => {
                const image = post.featuredImage?.node?.sourceUrl;
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="card overflow-hidden group hover:border-primary/30 transition-colors duration-200"
                  >
                    <div className="relative h-40 bg-muted overflow-hidden">
                      {image ? (
                        <Image
                          src={image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-muted-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground mb-1.5">
                        {new Date(post.date).toLocaleDateString('en-PH', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <div
                          className="mt-1.5 text-xs text-muted-foreground line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="text-center mt-8">
              <Link href="/blog" className="btn-outline text-sm px-5 py-2.5">
                View All Articles
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-muted-foreground text-sm max-w-2xl mx-auto">
            Everything you need to know about online casinos in the Philippines, PAGCOR licensing,
            bonuses, payments, and responsible gambling.
          </p>
        </div>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <details key={i} className="card group">
              <summary className="flex items-center justify-between cursor-pointer px-4 py-3 text-sm text-foreground font-medium hover:text-primary transition-colors list-none">
                <span className="pr-4">{item.question}</span>
                <svg
                  className="w-4 h-4 flex-shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Responsible Gambling */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="card p-8 text-center">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Play Responsibly
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-5 leading-relaxed">
              Gambling should be fun, not a source of stress. Set your limits, know when to stop,
              and never bet more than you can afford to lose. If gambling is no longer enjoyable,
              help is available.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/responsible-gambling" className="btn-primary text-sm px-5 py-2.5">
                Responsible Gambling Resources
              </Link>
              <span className="px-2.5 py-1 bg-muted border border-border rounded-md text-xs text-muted-foreground font-medium">
                18+ Only
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
          Ready to Find Your Perfect Casino?
        </h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
          Browse our expert-reviewed selection of PAGCOR-licensed casinos, compare bonuses,
          and start playing at a safe and trusted platform today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#casinos" className="btn-primary text-sm px-6 py-3">
            Explore Top Casinos
          </a>
          <Link href="/how-we-rate" className="btn-outline text-sm px-6 py-3">
            How We Rate
          </Link>
        </div>
      </section>
    </>
  );
}
