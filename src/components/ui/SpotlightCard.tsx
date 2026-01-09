import { ReactNode, forwardRef } from "react";
import { useSpotlight } from "@/hooks/useInteractiveEffects";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
  borderGlow?: boolean;
}

const SpotlightCard = forwardRef<HTMLDivElement, SpotlightCardProps>(
  ({
    children,
    className,
    spotlightColor = "rgba(212, 175, 55, 0.12)",
    spotlightSize = 400,
    borderGlow = true,
  }, forwardedRef) => {
    const spotlight = useSpotlight();

    return (
      <div
        ref={(node) => {
          (spotlight.ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        }}
        className={cn(
          "relative overflow-hidden transition-shadow duration-300",
          spotlight.isHovering && borderGlow && "shadow-lg shadow-primary/10",
          className
        )}
        {...spotlight.handlers}
      >
        {/* Spotlight gradient that follows cursor */}
        {spotlight.isHovering && (
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(${spotlightSize}px circle at ${spotlight.position.x}px ${spotlight.position.y}px, ${spotlightColor}, transparent 50%)`,
            }}
          />
        )}

        {/* Subtle border glow effect */}
        {spotlight.isHovering && borderGlow && (
          <div
            className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
            style={{
              background: `radial-gradient(${spotlightSize * 0.8}px circle at ${spotlight.position.x}px ${spotlight.position.y}px, rgba(212, 175, 55, 0.08), transparent 50%)`,
            }}
          />
        )}

        {children}
      </div>
    );
  }
);

SpotlightCard.displayName = "SpotlightCard";

export { SpotlightCard };
