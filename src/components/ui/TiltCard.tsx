import { ReactNode, forwardRef } from "react";
import { motion } from "framer-motion";
import { useTilt, useSpotlight } from "@/hooks/useInteractiveEffects";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  spotlight?: boolean;
  spotlightColor?: string;
  glare?: boolean;
}

const TiltCard = forwardRef<HTMLDivElement, TiltCardProps>(
  ({
    children,
    className,
    maxTilt = 8,
    spotlight = true,
    spotlightColor = "rgba(212, 175, 55, 0.15)",
    glare = true,
  }, forwardedRef) => {
    const tilt = useTilt(maxTilt);
    const spotlightEffect = useSpotlight();

    return (
      <motion.div
        ref={(node) => {
          // Handle both refs
          (tilt.ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          (spotlightEffect.ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        }}
        className={cn("relative overflow-hidden", className)}
        style={tilt.style}
        {...tilt.handlers}
        {...spotlightEffect.handlers}
      >
        {/* Spotlight Effect */}
        {spotlight && spotlightEffect.isHovering && (
          <div
            className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${spotlightEffect.position.x}px ${spotlightEffect.position.y}px, ${spotlightColor}, transparent 40%)`,
            }}
          />
        )}

        {/* Glare Effect */}
        {glare && spotlightEffect.isHovering && (
          <div
            className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
            style={{
              background: `radial-gradient(300px circle at ${spotlightEffect.position.x}px ${spotlightEffect.position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
            }}
          />
        )}

        {children}
      </motion.div>
    );
  }
);

TiltCard.displayName = "TiltCard";

export { TiltCard };
