import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  icon = null,
  onClick,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full cursor-pointer select-none text-center";

  const sizeStyles = {
    sm: "px-4 py-1.5 text-xs font-semibold gap-1.5",
    md: "px-6 py-3 text-sm font-semibold gap-2.5",
    lg: "px-8 py-3.5 text-base font-semibold gap-3",
  };

  const variantStyles = {
    primary:
      "bg-black text-white hover:bg-zinc-800 hover:-translate-y-0.5 hover:shadow-lg shadow-sm active:translate-y-0",
    light:
      "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 hover:-translate-y-0.5 active:translate-y-0",
    white:
      "bg-white text-zinc-900 hover:bg-zinc-50 hover:-translate-y-0.5 shadow-sm active:translate-y-0",
    outline:
      "border border-zinc-200 text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300",
  };

  const renderIcon = () => {
    if (!icon) return null;
    if (icon === "apple") {
      return (
        <svg
          className="w-4 h-4 fill-current shrink-0"
          viewBox="0 0 170 170"
          aria-hidden="true"
        >
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.74 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.08-7.85-7.94-12.44-14.58-6.19-8.91-11.06-19.12-14.61-30.63-3.55-11.51-5.33-22.37-5.33-32.58 0-14.66 3.65-26.69 10.96-36.08 7.3-9.4 16.48-14.19 27.53-14.37 4.9.11 10.45 1.34 16.66 3.7 6.2 2.37 10.15 3.6 11.85 3.7 1.83-.1 5.86-1.39 12.09-3.86 6.22-2.47 11.55-3.6 15.98-3.39 8.71.53 16.29 3.49 22.75 8.88 6.45 5.39 10.81 12.18 13.06 20.37-7.73 4.67-12.77 10.65-15.11 17.94-2.34 7.29-2.6 14.73-.78 22.31 1.82 7.58 5.73 14.15 11.72 19.72 5.99 5.57 12.87 9.17 20.65 10.8-2.35 7.15-5.26 14.07-8.73 20.76zM119.22 33.74c0-7.73 2.76-15.03 8.28-21.91 5.52-6.88 12.45-11.16 20.79-12.83.47 4.29.07 8.78-1.2 13.48-1.27 4.7-3.66 9.1-7.18 13.2-3.9 4.54-8.31 7.82-13.23 9.84-4.92 2.02-9.4 3.09-13.44 3.2.39-1.66.7-3.32.98-4.98z" />
        </svg>
      );
    }
    if (icon === "googlePlay") {
      return (
        <svg
          className="w-4 h-4 fill-current shrink-0"
          viewBox="0 0 512 512"
          aria-hidden="true"
        >
          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
        </svg>
      );
    }
    if (icon === "arrowRight") {
      return (
        <svg
          className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      );
    }
    return icon;
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles} {...props}>
        {renderIcon()}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles} {...props}>
      {renderIcon()}
      <span>{children}</span>
    </button>
  );
}
