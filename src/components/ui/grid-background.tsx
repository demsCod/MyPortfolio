import React from "react";

interface GridBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function GridBackground({
  className = "",
  children,
}: GridBackgroundProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Grille de fond */}
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: `
            linear-gradient(to right, rgb(var(--accent) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(var(--accent) / 0.1) 1px, transparent 1px)
          `,
        }}
      />

      {/* Dégradé radial pour l'effet de fondu */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Contenu */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
