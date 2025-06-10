import { useState } from "react";
import { ShowcaseGroup } from "../components/ShowcaseGroup";
import { ShowcaseSection } from "../components/ShowcaseSection";
import { ShowcaseVariant } from "../components/ShowcaseVariant";
import { SpecificationBox } from "../components/SpecificationBox";
import { SpecList } from "../components/SpecList";
import { Pagination } from "forteui-core";

export function PaginationShowcase() {
  const [currentPageCircular, setCurrentPageCircular] = useState(1);
  const [currentPageRounded, setCurrentPageRounded] = useState(5);
  const [currentPageLarge, setCurrentPageLarge] = useState(3);
  const [currentPageMedium, setCurrentPageMedium] = useState(2);
  const [currentPageSmall, setCurrentPageSmall] = useState(4);
  const [currentPageMany, setCurrentPageMany] = useState(15);

  return (
    <ShowcaseGroup title="Pagination">
      {/* Variants */}
      <ShowcaseSection title="Variants">
        <ShowcaseVariant title="Circular">
          <Pagination
            variant="circular"
            currentPage={currentPageCircular}
            totalPages={10}
            onPageChange={setCurrentPageCircular}
          />
        </ShowcaseVariant>

        <ShowcaseVariant title="Rounded">
          <Pagination
            variant="rounded"
            currentPage={currentPageRounded}
            totalPages={10}
            onPageChange={setCurrentPageRounded}
          />
        </ShowcaseVariant>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection title="Sizes">
        <ShowcaseVariant title="Large (40px)">
          <Pagination
            size="large"
            variant="rounded"
            currentPage={currentPageLarge}
            totalPages={7}
            onPageChange={setCurrentPageLarge}
          />
        </ShowcaseVariant>

        <ShowcaseVariant title="Medium (32px)">
          <Pagination
            size="medium"
            variant="rounded"
            currentPage={currentPageMedium}
            totalPages={7}
            onPageChange={setCurrentPageMedium}
          />
        </ShowcaseVariant>

        <ShowcaseVariant title="Small (26px)">
          <Pagination
            size="small"
            variant="rounded"
            currentPage={currentPageSmall}
            totalPages={7}
            onPageChange={setCurrentPageSmall}
          />
        </ShowcaseVariant>
      </ShowcaseSection>

      {/* Advanced Features */}
      <ShowcaseSection title="Advanced Features">
        <ShowcaseVariant title="Large Dataset">
          <Pagination
            variant="rounded"
            currentPage={currentPageMany}
            totalPages={100}
            onPageChange={setCurrentPageMany}
            siblingCount={1}
          />
        </ShowcaseVariant>

        <ShowcaseVariant title="With First/Last">
          <Pagination
            variant="circular"
            currentPage={currentPageMany}
            totalPages={100}
            onPageChange={setCurrentPageMany}
            showFirstLast
          />
        </ShowcaseVariant>

        <ShowcaseVariant title="Extended Sibling Count">
          <Pagination
            variant="rounded"
            currentPage={currentPageMany}
            totalPages={100}
            onPageChange={setCurrentPageMany}
            siblingCount={2}
          />
        </ShowcaseVariant>
      </ShowcaseSection>

      {/* Edge Cases */}
      <ShowcaseSection title="Edge Cases">
        <ShowcaseVariant title="Few Pages">
          <Pagination
            variant="rounded"
            currentPage={2}
            totalPages={5}
            onPageChange={() => {}}
          />
        </ShowcaseVariant>

        <ShowcaseVariant title="Single Page">
          <div className="space-y-2">
            <div className="text-grey-600 text-sm">
              Pagination is hidden for single page (totalPages = 1)
            </div>
            <Pagination
              variant="rounded"
              currentPage={1}
              totalPages={1}
              onPageChange={() => {}}
            />
          </div>
        </ShowcaseVariant>

        <ShowcaseVariant title="At Boundaries">
          <div className="space-y-4">
            <div>
              <div className="text-sm text-grey-600 mb-2">First page (previous disabled):</div>
              <Pagination
                variant="rounded"
                currentPage={1}
                totalPages={20}
                onPageChange={() => {}}
              />
            </div>
            <div>
              <div className="text-sm text-grey-600 mb-2">Last page (next disabled):</div>
              <Pagination
                variant="rounded"
                currentPage={20}
                totalPages={20}
                onPageChange={() => {}}
              />
            </div>
          </div>
        </ShowcaseVariant>
      </ShowcaseSection>

      {/* Specifications */}
      <SpecificationBox>
        <SpecList
          title="Design Tokens"
          items={[
            "Colors: Primary (#0690F4), Grey scale, transparency levels",
            "Typography: Plus Jakarta Sans, 14px, font-weights 400/600",
            "Border radius: 8px (rounded) / 500px (circular)",
            "Spacing: Consistent gaps between elements",
          ]}
        />
        <SpecList
          title="Accessibility"
          items={[
            "ARIA labels for screen readers",
            "Keyboard navigation support",
            "Current page announcement",
            "Semantic button elements",
            "Focus management",
          ]}
        />
        <SpecList
          title="Features"
          items={[
            "Smart pagination truncation with ellipsis",
            "Configurable sibling count",
            "Optional first/last navigation",
            "Boundary handling",
            "Responsive touch targets",
          ]}
        />
      </SpecificationBox>
    </ShowcaseGroup>
  );
}
