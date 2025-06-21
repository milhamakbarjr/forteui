import { 
  Button, 
  IconHome, 
  IconUser, 
  IconPlus, 
  IconX, 
  IconCheck, 
  IconAlertTriangle, 
  IconInfoCircle,
  IconDownload,
  IconEdit,
  IconTrash,
  IconSearch,
  IconArrowRight,
  IconChevronDown
} from 'forteui-core';

import {
  ShowcaseSection,
  ShowcaseGroup,
  ShowcaseVariant
} from '../components';

export function ButtonShowcase() {
  return (
    <ShowcaseSection
      title="Button Component"
      description="Button component with multiple variants, sizes, states, and rich icon support."
    >
      {/* Contained Variants */}
      <ShowcaseGroup title="Contained Button Variants">
        <ShowcaseVariant title="All Semantic Colors" layout="horizontal">
          <Button variant="default" size="md">Default</Button>
          <Button variant="primary" size="md">Primary</Button>
          <Button variant="secondary" size="md">Secondary</Button>
          <Button variant="info" size="md">Info</Button>
          <Button variant="success" size="md">Success</Button>
          <Button variant="warning" size="md">Warning</Button>
          <Button variant="error" size="md">Error</Button>
        </ShowcaseVariant>

        <ShowcaseVariant title="Button Sizes" layout="horizontal">
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Other Button Variants */}
      <ShowcaseGroup title="Button Style Variants">
        <ShowcaseVariant title="Outline Variants" layout="horizontal">
          <Button variant="outline-default">Default</Button>
          <Button variant="outline-primary">Primary</Button>
          <Button variant="outline-info">Info</Button>
          <Button variant="outline-success">Success</Button>
          <Button variant="outline-warning">Warning</Button>
          <Button variant="outline-error">Error</Button>
        </ShowcaseVariant>

        <ShowcaseVariant title="Text Variants" layout="horizontal">
          <Button variant="text-default">Default</Button>
          <Button variant="text-primary">Primary</Button>
          <Button variant="text-info">Info</Button>
          <Button variant="text-success">Success</Button>
          <Button variant="text-warning">Warning</Button>
          <Button variant="text-error">Error</Button>
        </ShowcaseVariant>

        <ShowcaseVariant title="Soft Variants" layout="horizontal">
          <Button variant="soft-default">Default</Button>
          <Button variant="soft-primary">Primary</Button>
          <Button variant="soft-info">Info</Button>
          <Button variant="soft-success">Success</Button>
          <Button variant="soft-warning">Warning</Button>
          <Button variant="soft-error">Error</Button>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Disabled States */}
      <ShowcaseGroup title="Button States">
        <ShowcaseVariant title="Disabled States" layout="horizontal">
          <Button variant="primary" disabled>Primary</Button>
          <Button variant="outline-primary" disabled>Outline</Button>
          <Button variant="text-primary" disabled>Text</Button>
          <Button variant="soft-primary" disabled>Soft</Button>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Buttons with Icons */}
      <ShowcaseGroup title="Buttons with Icons">
        <ShowcaseVariant title="Leading Icon" layout="horizontal">
          <Button variant="primary">
            <IconPlus size={16} />
            <span>Add Item</span>
          </Button>
          <Button variant="info">
            <IconInfoCircle size={16} />
            <span>Info</span>
          </Button>
          <Button variant="success">
            <IconCheck size={16} />
            <span>Success</span>
          </Button>
          <Button variant="error">
            <IconTrash size={16} />
            <span>Delete</span>
          </Button>
        </ShowcaseVariant>

        <ShowcaseVariant title="Trailing Icon" layout="horizontal">
          <Button variant="primary">
            <span>Next</span>
            <IconArrowRight size={16} />
          </Button>
          <Button variant="secondary">
            <span>Dropdown</span>
            <IconChevronDown size={16} />
          </Button>
          <Button variant="success">
            <span>Download</span>
            <IconDownload size={16} />
          </Button>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Icon Button Variants */}
      <ShowcaseGroup title="Icon Button Variants">
        <ShowcaseVariant title="Icon-Only Buttons" layout="horizontal">
          <Button variant="icon-default" size="icon-md">
            <IconHome className="w-6 h-6" />
          </Button>
          <Button variant="icon-primary" size="icon-md">
            <IconUser className="w-6 h-6" />
          </Button>
          <Button variant="icon-info" size="icon-md">
            <IconInfoCircle className="w-6 h-6" />
          </Button>
          <Button variant="icon-success" size="icon-md">
            <IconCheck className="w-6 h-6" />
          </Button>
          <Button variant="icon-warning" size="icon-md">
            <IconAlertTriangle className="w-6 h-6" />
          </Button>
          <Button variant="icon-error" size="icon-md">
            <IconX className="w-6 h-6" />
          </Button>
        </ShowcaseVariant>

        <ShowcaseVariant title="Icon Button Sizes" layout="horizontal">
          <Button variant="icon-primary" size="icon-lg">
            <IconPlus className="w-8 h-8" />
          </Button>
          <Button variant="icon-primary" size="icon-md">
            <IconPlus className="w-6 h-6" />
          </Button>
          <Button variant="icon-primary" size="icon-sm">
            <IconPlus className="w-5 h-5" />
          </Button>
          <Button variant="icon-primary" size="icon-xs">
            <IconPlus className="w-4 h-4" />
          </Button>
        </ShowcaseVariant>

        <ShowcaseVariant title="Icon Button Use Cases" layout="horizontal">
          <div className="flex items-center gap-3">
            <Button variant="icon-primary" size="icon-sm">
              <IconEdit className="w-5 h-5" />
            </Button>
            <span>Edit</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="icon-error" size="icon-sm">
              <IconTrash className="w-5 h-5" />
            </Button>
            <span>Delete</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="icon-info" size="icon-sm">
              <IconSearch className="w-5 h-5" />
            </Button>
            <span>Search</span>
          </div>
        </ShowcaseVariant>
      </ShowcaseGroup>
    </ShowcaseSection>
  );
}
