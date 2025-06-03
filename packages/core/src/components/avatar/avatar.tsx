import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Simple default user icon component
const DefaultUserIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-full h-full"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// Status Badge SVG Components - Scalable versions without hardcoded dimensions
const OnlineBadgeIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M6 0.5C9.03757 0.5 11.5 2.96243 11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6C0.5 2.96243 2.96243 0.5 6 0.5Z" fill="#22B954"/>
    <path d="M6 0.5C9.03757 0.5 11.5 2.96243 11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6C0.5 2.96243 2.96243 0.5 6 0.5Z" stroke="white"/>
  </svg>
);

const AwayBadgeIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M6 0.5C7.45869 0.5 8.85722 1.07988 9.88867 2.11133C10.9201 3.14278 11.5 4.54131 11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6C0.5 2.96243 2.96243 0.5 6 0.5Z" fill="#FFAD05" stroke="white"/>
    <path d="M8 6.5H6C5.72386 6.5 5.5 6.27614 5.5 6V4C5.5 3.72386 5.72386 3.5 6 3.5C6.27614 3.5 6.5 3.72386 6.5 4V5.5H8C8.27614 5.5 8.5 5.72386 8.5 6C8.5 6.27614 8.27614 6.5 8 6.5Z" fill="white"/>
  </svg>
);

const BusyBadgeIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M6 0.5C7.45869 0.5 8.85722 1.07988 9.88867 2.11133C10.9201 3.14278 11.5 4.54131 11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6C0.5 2.96243 2.96243 0.5 6 0.5Z" fill="#FF5833" stroke="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 6.5H4.5C4.22386 6.5 4 6.27614 4 6C4 5.72386 4.22386 5.5 4.5 5.5H7.5C7.77614 5.5 8 5.72386 8 6C8 6.27614 7.77614 6.5 7.5 6.5Z" fill="white"/>
  </svg>
);

const OfflineBadgeIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M6 0.5C9.03757 0.5 11.5 2.96243 11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6C0.5 2.96243 2.96243 0.5 6 0.5Z" fill="white"/>
    <path d="M6 0.5C9.03757 0.5 11.5 2.96243 11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6C0.5 2.96243 2.96243 0.5 6 0.5Z" stroke="white"/>
    <circle cx="6" cy="6" r="4" stroke="#93A1AE" strokeWidth="2"/>
  </svg>
);

// Avatar wrapper container for flex layout with badge positioning
const avatarWrapperVariants = cva(
  "inline-flex items-end relative"
);

const avatarVariants = cva(
  "inline-flex items-center justify-center overflow-hidden select-none",
  {
    variants: {
      size: {
        xs: "h-6 w-6", // 24px
        sm: "h-8 w-8", // 32px  
        md: "h-10 w-10", // 40px
        lg: "h-12 w-12", // 48px
        xl: "h-16 w-16", // 64px
      },
      variant: {
        default: "bg-grey-300",
        primary: "bg-primary-main",
        secondary: "bg-secondary-main",
        info: "bg-info-main", 
        success: "bg-success-main",
        warning: "bg-warning-main",
        error: "bg-error-main",
      },
      shape: {
        circular: "rounded-full",
        rounded: "rounded-xl", // 12px border radius
        square: "rounded-none",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
      shape: "circular",
    },
  }
);

const avatarIconVariants = cva(
  "flex items-center justify-center",
  {
    variants: {
      size: {
        xs: "h-4 w-4", // 16px icon for 24px avatar
        sm: "h-5 w-5", // 20px icon for 32px avatar
        md: "h-6 w-6", // 24px icon for 40px avatar
        lg: "h-6 w-6", // 24px icon for 48px avatar (same as md)
        xl: "h-8 w-8", // 32px icon for 64px avatar
      },
      variant: {
        default: "text-grey-600",
        primary: "text-white",
        secondary: "text-white", 
        info: "text-white",
        success: "text-white",
        warning: "text-grey-800", // Dark text on yellow background
        error: "text-white",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

const avatarImageVariants = cva(
  "aspect-square h-full w-full object-cover",
  {
    variants: {
      shape: {
        circular: "rounded-full",
        rounded: "rounded-xl",
        square: "rounded-none",
      },
    },
    defaultVariants: {
      shape: "circular",
    },
  }
);

const avatarFallbackVariants = cva(
  "flex h-full w-full items-center justify-center font-semibold uppercase",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base", 
        lg: "text-lg",
        xl: "text-xl",
      },
      variant: {
        default: "text-grey-600",
        primary: "text-white",
        secondary: "text-white",
        info: "text-white", 
        success: "text-white",
        warning: "text-grey-800",
        error: "text-white",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

const avatarStatusBadgeVariants = cva(
  "z-10 flex-shrink-0",
  {
    variants: {
      size: {
        xs: "w-2.5 h-2.5",  // ~10px badge for 24px avatar (increased from w-2 h-2)
        sm: "w-3 h-3",      // ~12px badge for 32px avatar (increased from w-2.5 h-2.5)  
        md: "w-3.5 h-3.5",  // ~14px badge for 40px avatar (increased from w-3 h-3)
        lg: "w-4 h-4",      // ~16px badge for 48px avatar (increased from w-3.5 h-3.5)
        xl: "w-5 h-5",      // ~20px badge for 64px avatar (increased from w-4 h-4)
      },
      position: {
        "bottom-right": "",
        "top-right": "",
      },
    },
    compoundVariants: [
      // Bottom-right positioning with negative margins for overlap - adjusted for larger badge sizes
      {
        size: "xs",
        position: "bottom-right",
        className: "-ml-2", // Increased from -ml-1.5 for larger badge
      },
      {
        size: "sm", 
        position: "bottom-right",
        className: "-ml-2.5", // Increased from -ml-2 for larger badge
      },
      {
        size: "md",
        position: "bottom-right", 
        className: "-ml-2.5", // Increased from -ml-2 for larger badge
      },
      {
        size: "lg",
        position: "bottom-right",
        className: "-ml-3", // Increased from -ml-2.5 for larger badge
      },
      {
        size: "xl",
        position: "bottom-right",
        className: "-ml-3.5", // Increased from -ml-3 for larger badge
      },
      // Top-right positioning for square avatars with larger badge adjustments
      {
        size: "xs",
        position: "top-right",
        className: "-ml-2 mb-auto", // Increased from -ml-1.5 for larger badge
      },
      {
        size: "sm",
        position: "top-right", 
        className: "-ml-2.5 mb-auto", // Increased from -ml-2 for larger badge
      },
      {
        size: "md",
        position: "top-right",
        className: "-ml-2.5 mb-auto", // Increased from -ml-2 for larger badge
      },
      {
        size: "lg", 
        position: "top-right",
        className: "-ml-3 mb-auto", // Increased from -ml-2.5 for larger badge
      },
      {
        size: "xl",
        position: "top-right",
        className: "-ml-3.5 mb-auto", // Increased from -ml-3 for larger badge
      },
    ],
    defaultVariants: {
      size: "md",
      position: "bottom-right",
    },
  }
);

interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
  icon?: React.ReactNode;
  status?: "online" | "away" | "busy" | "offline" | "none";
  customStatusIcon?: React.ReactNode;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, variant, shape, src, alt, fallback, icon, status = "none", customStatusIcon, ...props }, ref) => {
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const [imageError, setImageError] = React.useState(false);

    // Reset states when src changes
    React.useEffect(() => {
      if (src) {
        setImageLoaded(false);
        setImageError(false);
      }
    }, [src]);

    const handleImageLoad = () => {
      setImageLoaded(true);
      setImageError(false);
    };

    const handleImageError = () => {
      setImageLoaded(false);
      setImageError(true);
    };

    const showImage = src && imageLoaded && !imageError;
    const showFallback = !src || imageError || !imageLoaded;

    // Generate initials from fallback text
    const getInitials = (text: string) => {
      return text
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .substring(0, 2)
        .toUpperCase();
    };

    // Determine badge position based on avatar shape
    const badgePosition = shape === "square" ? "top-right" : "bottom-right";

    // Render status badge content
    const renderStatusBadgeContent = () => {
      if (customStatusIcon) {
        return customStatusIcon;
      }

      switch (status) {
        case "online":
          return <OnlineBadgeIcon />;
        case "away":
          return <AwayBadgeIcon />;
        case "busy":
          return <BusyBadgeIcon />;
        case "offline":
          return <OfflineBadgeIcon />;
        default:
          return null;
      }
    };

    // If no status badge, render just the avatar
    if (status === "none" || !status) {
      return (
        <div
          ref={ref}
          className={cn(avatarVariants({ size, variant, shape, className }))}
          {...props}
        >
          {/* Image */}
          {src && (
            <img
              className={cn(
                avatarImageVariants({ shape }),
                showImage ? "opacity-100" : "opacity-0"
              )}
              src={src}
              alt={alt}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}

          {/* Fallback content */}
          {showFallback && (
            <>
              {fallback ? (
                <span
                  className={cn(avatarFallbackVariants({ size, variant }))}
                >
                  {getInitials(fallback)}
                </span>
              ) : (
                <div className={cn(avatarIconVariants({ size, variant }))}>
                  {icon || <DefaultUserIcon />}
                </div>
              )}
            </>
          )}
        </div>
      );
    }

    // Render avatar with status badge using flex layout
    return (
      <div
        ref={ref}
        className={cn(avatarWrapperVariants(), className)}
        {...props}
      >
        {/* Avatar */}
        <div className={cn(avatarVariants({ size, variant, shape }))}>
          {/* Image */}
          {src && (
            <img
              className={cn(
                avatarImageVariants({ shape }),
                showImage ? "opacity-100" : "opacity-0"
              )}
              src={src}
              alt={alt}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}

          {/* Fallback content */}
          {showFallback && (
            <>
              {fallback ? (
                <span
                  className={cn(avatarFallbackVariants({ size, variant }))}
                >
                  {getInitials(fallback)}
                </span>
              ) : (
                <div className={cn(avatarIconVariants({ size, variant }))}>
                  {icon || <DefaultUserIcon />}
                </div>
              )}
            </>
          )}
        </div>

        {/* Status Badge (sibling element with negative margin) */}
        <div
          className={cn(
            avatarStatusBadgeVariants({ 
              size, 
              position: badgePosition
            })
          )}
        >
          {renderStatusBadgeContent()}
        </div>
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar, avatarVariants, avatarIconVariants, avatarImageVariants, avatarFallbackVariants, avatarStatusBadgeVariants, type AvatarProps };
