import Link from 'next/link';
import StarRating from './StarRating';
import BonusBadge from './BonusBadge';

interface Casino {
  title: string;
  slug: string;
  casinoFields: {
    overallRating: number;
    bonusOffer: string;
    affiliateUrl: string;
  };
}

interface ComparisonTableProps {
  casinos: Casino[];
}

export default function ComparisonTable({ casinos }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[640px]">
        <thead>
          <tr className="bg-muted border-b border-border">
            <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Rank
            </th>
            <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Casino
            </th>
            <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Rating
            </th>
            <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Welcome Bonus
            </th>
            <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {casinos.map((casino, i) => (
            <tr
              key={casino.slug}
              className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
            >
              <td className="px-4 py-3">
                <span className="w-7 h-7 rounded-md bg-muted text-muted-foreground font-medium text-xs flex items-center justify-center">
                  {i + 1}
                </span>
              </td>
              <td className="px-4 py-3">
                <Link
                  href={`/reviews/${casino.slug}`}
                  className="text-foreground font-medium text-sm hover:text-primary transition-colors"
                >
                  {casino.title}
                </Link>
              </td>
              <td className="px-4 py-3">
                <StarRating rating={casino.casinoFields.overallRating || 0} size="sm" showNumber />
              </td>
              <td className="px-4 py-3">
                <BonusBadge bonus={casino.casinoFields.bonusOffer} variant="compact" />
              </td>
              <td className="px-4 py-3">
                <a
                  href={`/go/${casino.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs px-3 py-1.5"
                >
                  Visit Site
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
