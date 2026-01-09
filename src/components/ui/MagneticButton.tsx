import { ReactNode, forwardRef } from "react";
import { motion } from "framer-motion";
import { useMagnetic, useIsMobile } from "@/hooks/useInteractiveEffects";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a" | "div";
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

const MagneticButton = forwardRef<HTMLElement, MagneticButtonProps>(
  ({
    children,
    className,
    strength = 0.25,
    as = "button",
    onClick,
    href,
    target,
    rel,
  }, forwardedRef) => {
    const magnetic = useMagnetic(strength);
    const isMobile = useIsMobile();

    const Component = motion[as] as typeof motion.button;

    const combinedRef = (node: HTMLElement | null) => {
      (magnetic.ref as React.MutableRefObject<HTMLElement | null>).current = node;
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }
    };

    return (
      <Component
        ref={combinedRef}
        className={cn("relative inline-block", className)}
        style={isMobile ? {} : magnetic.style}
        onClick={onClick}
        href={href}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...magnetic.handlers}
      >
        {children}
      </Component>
    );
  }
);

MagneticButton.displayName = "MagneticButton";

export { MagneticButton };
