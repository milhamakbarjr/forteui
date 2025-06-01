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

const avatarVariants = cva(
  "relative inline-flex items-center justify-center overflow-hidden select-none",
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

interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
  icon?: React.ReactNode;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, variant, shape, src, alt, fallback, icon, ...props }, ref) => {
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
);

Avatar.displayName = "Avatar";

export { Avatar, avatarVariants, avatarIconVariants, avatarImageVariants, avatarFallbackVariants, type AvatarProps };
