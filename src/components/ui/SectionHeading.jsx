import Badge from "./Badge";

export default function SectionHeading({
  badge,
  badgeVariant = "default",
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignmentClass =
    align === "center"
      ? "text-center mx-auto items-center"
      : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-3xl ${alignmentClass} ${className} mb-12 sm:mb-16`}>
      {badge && (
        <div className="mb-4">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15] mb-4">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
