interface BonusBadgeProps {
  bonus: string;
  variant?: 'default' | 'compact';
}

export default function BonusBadge({ bonus, variant = 'default' }: BonusBadgeProps) {
  if (!bonus) return null;

  if (variant === 'compact') {
    return (
      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-md">
        {bonus}
      </span>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-md">
      <span className="text-primary text-sm font-medium">{bonus}</span>
    </div>
  );
}
