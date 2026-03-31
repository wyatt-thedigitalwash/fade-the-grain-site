interface ImagePlaceholderProps {
  label: string;
  className?: string;
}

export default function ImagePlaceholder({
  label,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded bg-secondary p-4 text-center text-sm text-text-secondary ${className}`}
      role="img"
      aria-label={label}
    >
      {label}
    </div>
  );
}
