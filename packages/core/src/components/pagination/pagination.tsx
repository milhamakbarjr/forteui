import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { cn } from "../../lib/utils";

const paginationVariants = cva(
  "inline-flex items-center justify-center gap-1.5",
  {
    variants: {
      variant: {
        circular: "",
        rounded: "",
      },
      size: {
        small: "gap-1",
        medium: "gap-1.5", 
        large: "gap-1.5",
      },
    },
    defaultVariants: {
      variant: "rounded",
      size: "medium",
    },
  }
);

const paginationItemVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-main",
  {
    variants: {
      variant: {
        circular: "rounded-full",
        rounded: "rounded-lg",
      },
      size: {
        small: "h-[26px] w-[26px] text-sm",
        medium: "h-8 w-8 text-sm",
        large: "h-10 w-10 text-sm",
      },
      selected: {
        true: "bg-primary-main text-white font-semibold",
        false: "text-grey-800 hover:bg-grey-8",
      },
    },
    defaultVariants: {
      variant: "rounded",
      size: "medium",
      selected: false,
    },
  }
);

const paginationNavigationVariants = cva(
  "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-main",
  {
    variants: {
      variant: {
        circular: "rounded-full",
        rounded: "rounded-lg",
      },
      size: {
        small: "h-[26px] w-[26px]",
        medium: "h-8 w-8",
        large: "h-10 w-10",
      },
    },
    compoundVariants: [
      {
        variant: "circular",
        className: "text-grey-600 hover:bg-grey-8 hover:text-grey-800",
      },
      {
        variant: "rounded", 
        className: "text-grey-600 hover:bg-grey-8 hover:text-grey-800",
      },
    ],
    defaultVariants: {
      variant: "rounded",
      size: "medium",
    },
  }
);

export interface PaginationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof paginationVariants> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  showFirstLast?: boolean;
}

const usePagination = ({
  currentPage,
  totalPages,
  siblingCount = 1,
}: {
  currentPage: number;
  totalPages: number;
  siblingCount?: number;
}) => {
  return React.useMemo(() => {
    const DOTS = "...";

    // If total pages is less than the pagination range we want to show just return all pages
    if (totalPages <= 5 + siblingCount * 2) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    // No left dots to show, but rights dots to be shown
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, DOTS, totalPages];
    }

    // No right dots to show, but left dots to be shown
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    // Both left and right dots to be shown
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      );
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return [];
  }, [currentPage, totalPages, siblingCount]);
};

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({ 
    className, 
    variant, 
    size, 
    currentPage, 
    totalPages, 
    onPageChange, 
    siblingCount = 1,
    showFirstLast = false,
    ...props 
  }, ref) => {
    const paginationRange = usePagination({ currentPage, totalPages, siblingCount });

    const iconSize = size === "large" ? 20 : 16;

    const canGoPrevious = currentPage > 1;
    const canGoNext = currentPage < totalPages;

    const handlePageChange = (page: number | string) => {
      if (typeof page === "number" && page !== currentPage) {
        onPageChange(page);
      }
    };

    const handlePrevious = () => {
      if (canGoPrevious) {
        onPageChange(currentPage - 1);
      }
    };

    const handleNext = () => {
      if (canGoNext) {
        onPageChange(currentPage + 1);
      }
    };

    if (!paginationRange || paginationRange.length < 2) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(paginationVariants({ variant, size }), className)}
        role="navigation"
        aria-label="Pagination Navigation"
        {...props}
      >
        {/* First page button */}
        {showFirstLast && currentPage > 1 && (
          <button
            className={cn(paginationNavigationVariants({ variant, size }))}
            onClick={() => handlePageChange(1)}
            aria-label="Go to first page"
          >
            <IconChevronLeft size={iconSize} />
            <IconChevronLeft size={iconSize} className="-ml-2" />
          </button>
        )}

        {/* Previous button */}
        <button
          className={cn(
            paginationNavigationVariants({ variant, size }),
            !canGoPrevious && "opacity-48 pointer-events-none"
          )}
          onClick={handlePrevious}
          aria-label="Go to previous page"
          aria-disabled={!canGoPrevious}
        >
          <IconChevronLeft size={iconSize} />
        </button>

        {/* Page numbers */}
        {paginationRange.map((pageNumber, index) => {
          // Render dots
          if (pageNumber === "...") {
            return (
              <span
                key={`dots-${index}`}
                className={cn(
                  paginationItemVariants({ variant, size, selected: false }),
                  "pointer-events-none"
                )}
                aria-hidden="true"
              >
                ...
              </span>
            );
          }

          // Render page numbers
          return (
            <button
              key={pageNumber}
              className={cn(
                paginationItemVariants({ 
                  variant, 
                  size, 
                  selected: pageNumber === currentPage 
                })
              )}
              onClick={() => handlePageChange(pageNumber)}
              aria-label={`Go to page ${pageNumber}`}
              aria-current={pageNumber === currentPage ? "page" : undefined}
            >
              {pageNumber}
            </button>
          );
        })}

        {/* Next button */}
        <button
          className={cn(
            paginationNavigationVariants({ variant, size }),
            !canGoNext && "opacity-48 pointer-events-none"
          )}
          onClick={handleNext}
          aria-label="Go to next page"
          aria-disabled={!canGoNext}
        >
          <IconChevronRight size={iconSize} />
        </button>

        {/* Last page button */}
        {showFirstLast && currentPage < totalPages && (
          <button
            className={cn(paginationNavigationVariants({ variant, size }))}
            onClick={() => handlePageChange(totalPages)}
            aria-label="Go to last page"
          >
            <IconChevronRight size={iconSize} className="-mr-2" />
            <IconChevronRight size={iconSize} />
          </button>
        )}
      </div>
    );
  }
);

Pagination.displayName = "Pagination";

export { Pagination, paginationVariants };
