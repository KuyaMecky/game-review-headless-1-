interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
}

const sizeMap = {
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

const textSizeMap = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

function StarIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function StarRating({ rating, size = 'md', showNumber = false }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;
  const hasHalf = decimal >= 0.25 && decimal < 0.75;
  const roundUp = decimal >= 0.75;
  const filledCount = roundUp ? fullStars + 1 : fullStars;
  const emptyCount = 5 - filledCount - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: filledCount }).map((_, i) => (
        <StarIcon key={`full-${i}`} className={`${sizeMap[size]} text-primary`} />
      ))}
      {hasHalf && (
        <div className={`relative ${sizeMap[size]}`}>
          <StarIcon className={`${sizeMap[size]} text-muted absolute inset-0`} />
          <div className="overflow-hidden w-1/2 absolute inset-0">
            <StarIcon className={`${sizeMap[size]} text-primary`} />
          </div>
        </div>
      )}
      {Array.from({ length: Math.max(0, emptyCount) }).map((_, i) => (
        <StarIcon key={`empty-${i}`} className={`${sizeMap[size]} text-muted`} />
      ))}
      {showNumber && (
        <span className={`ml-1 font-medium text-foreground ${textSizeMap[size]}`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
