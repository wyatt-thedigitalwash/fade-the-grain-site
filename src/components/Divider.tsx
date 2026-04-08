interface DividerProps {
  variant?: "line" | "ornament" | "stars";
  className?: string;
}

export default function Divider({ variant = "line", className = "" }: DividerProps) {
  if (variant === "stars") {
    return (
      <div className={`flex items-center justify-center gap-3 py-4 ${className}`}>
        <span className="text-xs text-accent">&#9733;</span>
        <span className="text-sm text-accent">&#9733;</span>
        <span className="text-xs text-accent">&#9733;</span>
      </div>
    );
  }

  if (variant === "ornament") {
    return (
      <div className={`flex items-center justify-center gap-0 py-4 ${className}`}>
        <span className="h-px w-16 bg-accent/40 sm:w-20" />
        <svg
          viewBox="0 0 24 24"
          className="mx-2 h-4 w-4 text-accent"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2 L10 10 L12 8 L14 10 Z" />
          <path d="M9 6 L7 12" />
          <path d="M15 6 L17 12" />
        </svg>
        <span className="h-px w-16 bg-accent/40 sm:w-20" />
      </div>
    );
  }

  // Default: "line" with diamond
  return (
    <div className={`flex items-center justify-center gap-0 py-4 ${className}`}>
      <span className="h-px w-16 bg-accent/40 sm:w-20" />
      <span className="mx-2 text-[10px] text-accent">&#9670;</span>
      <span className="h-px w-16 bg-accent/40 sm:w-20" />
    </div>
  );
}
