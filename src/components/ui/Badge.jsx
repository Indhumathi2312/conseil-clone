export default function Badge({
  children,
  variant = "default",
  className = "",
}) {
  const variantStyles = {
    default: "bg-zinc-100 text-zinc-800 border-zinc-200/60",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dark: "bg-black text-white border-transparent",
    primary: "bg-blue-50 text-blue-700 border-blue-200",
  };

  return (
    <span
      className={`inline-flex items-center px-3.5 py-1 text-xs font-semibold rounded-full border tracking-wide uppercase ${
        variantStyles[variant] || variantStyles.default
      } ${className}`}
    >
      {children}
    </span>
  );
}
