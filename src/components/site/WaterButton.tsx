import Link from "next/link";

const baseClass =
  "relative overflow-hidden inline-flex items-center justify-center border-2 border-[#06e6da] bg-transparent text-[#06e6da] font-bold uppercase tracking-wide transition-all duration-300 font-overpass water-fill-button disabled:opacity-50 disabled:pointer-events-none";

type WaterButtonProps = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClass = {
  sm: "px-4 py-2 text-xs min-h-[40px]",
  md: "px-6 py-3 text-xs min-h-[48px]",
  lg: "px-8 py-4 text-sm min-h-[52px]",
};

export function WaterButton({
  children,
  className = "",
  size = "md",
  ...props
}: WaterButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={`${baseClass} ${sizeClass[size]} ${className}`} {...props}>
      <span className="relative z-10 transition-colors duration-500">{children}</span>
    </button>
  );
}

export function WaterButtonLink({
  children,
  href,
  className = "",
  size = "md",
}: WaterButtonProps & { href: string }) {
  return (
    <Link href={href} className={`${baseClass} ${sizeClass[size]} ${className}`}>
      <span className="relative z-10 transition-colors duration-500">{children}</span>
    </Link>
  );
}
