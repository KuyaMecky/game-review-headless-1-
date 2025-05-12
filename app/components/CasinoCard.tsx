'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import StarRating from './StarRating';

interface Casino {
  title: string;
  slug: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  casinoFields: {
    overallRating: number;
    bonusOffer: string;
    affiliateUrl: string;
  };
}

interface CasinoCardProps {
  casino: Casino;
  index: number;
  rank?: number;
}

export default function CasinoCard({ casino, index, rank }: CasinoCardProps) {
  const { title, slug, featuredImage, casinoFields } = casino;
  const { overallRating, bonusOffer } = casinoFields;
  const imageUrl = featuredImage?.node?.sourceUrl;
  const imageAlt = featuredImage?.node?.altText || title;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
      className="card overflow-hidden hover:border-primary/30 transition-colors duration-200 group flex flex-col"
    >
      <div className="relative w-full h-44 bg-muted overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-2xl font-semibold text-muted-foreground/30 select-none">
              {title.charAt(0)}
            </span>
          </div>
        )}

        {rank && (
          <div className="absolute top-2.5 left-2.5 w-7 h-7 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-medium text-xs">
            {rank}
          </div>
        )}

        <div className="absolute top-2.5 right-2.5 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1 flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
          <span className="text-foreground text-xs font-medium">{(overallRating || 0).toFixed(1)}</span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {title}
        </h3>

        <div className="mt-1.5">
          <StarRating rating={overallRating || 0} size="sm" showNumber={false} />
        </div>

        {bonusOffer && (
          <p className="mt-2 text-xs text-muted-foreground line-clamp-1">{bonusOffer}</p>
        )}

        <div className="flex-1 min-h-3" />

        <div className="mt-3 flex flex-col gap-2">
          <a
            href={`/go/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2 w-full text-center"
          >
            Claim Bonus
          </a>
          <Link
            href={`/reviews/${slug}`}
            className="btn-outline text-xs py-2 w-full text-center"
          >
            Read Review
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
