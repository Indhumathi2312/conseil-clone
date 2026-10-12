export default function Card({
  children,
  className = "",
  hover = true,
  ...props
}) {
  return (
    <div
      className={`bg-white rounded-2xl border border-zinc-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] ${
        hover
          ? "transition-all duration-300 hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
