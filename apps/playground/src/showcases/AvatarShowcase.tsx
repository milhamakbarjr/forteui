import { Avatar, Text, IconUser, IconSettings, IconHeart, IconStar, IconHome, IconSearch } from 'forteui-core';
import { 
  ShowcaseSection, 
  ShowcaseGroup, 
  ShowcaseVariant
} from '../components';

// Avatar Images
const avatarImage1 = '/image-avatar1.avif';
const avatarImage2 = '/image-avatar2.avif';
const avatarImage3 = '/image-avatar3.avif';
const avatarImage4 = '/image-avatar4.avif';
const avatarImage5 = '/image-avatar5.avif';

export function AvatarShowcase() {
  return (
    <ShowcaseSection 
      title="Avatar Component"
      description="Avatar component with multiple sizes, shapes, variants, and status indicators following Figma specifications."
    >
      {/* Basic Avatars */}
      <ShowcaseGroup title="Avatar Sizes">
        <ShowcaseVariant title="Size Scale (24px - 64px)" layout="horizontal">
          <div className="text-center">
            <Avatar size="xs" fallback="XS" />
            <Text variant="caption" className="block mt-1">XS (24px)</Text>
          </div>
          <div className="text-center">
            <Avatar size="sm" fallback="SM" />
            <Text variant="caption" className="block mt-1">SM (32px)</Text>
          </div>
          <div className="text-center">
            <Avatar size="md" fallback="MD" />
            <Text variant="caption" className="block mt-1">MD (40px)</Text>
          </div>
          <div className="text-center">
            <Avatar size="lg" fallback="LG" />
            <Text variant="caption" className="block mt-1">LG (48px)</Text>
          </div>
          <div className="text-center">
            <Avatar size="xl" fallback="XL" />
            <Text variant="caption" className="block mt-1">XL (64px)</Text>
          </div>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Color Variants */}
      <ShowcaseGroup title="Color Variants (Circular)">
        <ShowcaseVariant title="All Semantic Colors" layout="horizontal">
          <div className="text-center">
            <Avatar variant="default" icon={<IconUser />} />
            <Text variant="caption" className="block mt-1">Default</Text>
          </div>
          <div className="text-center">
            <Avatar variant="primary" icon={<IconUser />} />
            <Text variant="caption" className="block mt-1">Primary</Text>
          </div>
          <div className="text-center">
            <Avatar variant="secondary" icon={<IconUser />} />
            <Text variant="caption" className="block mt-1">Secondary</Text>
          </div>
          <div className="text-center">
            <Avatar variant="info" icon={<IconUser />} />
            <Text variant="caption" className="block mt-1">Info</Text>
          </div>
          <div className="text-center">
            <Avatar variant="success" icon={<IconUser />} />
            <Text variant="caption" className="block mt-1">Success</Text>
          </div>
          <div className="text-center">
            <Avatar variant="warning" icon={<IconUser />} />
            <Text variant="caption" className="block mt-1">Warning</Text>
          </div>
          <div className="text-center">
            <Avatar variant="error" icon={<IconUser />} />
            <Text variant="caption" className="block mt-1">Error</Text>
          </div>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Shape Variants */}
      <ShowcaseGroup title="Avatar Shapes">
        <ShowcaseVariant title="All Shape Options" layout="horizontal">
          <div className="text-center">
            <Avatar shape="circular" variant="primary" fallback="CI" />
            <Text variant="caption" className="block mt-1">Circular</Text>
          </div>
          <div className="text-center">
            <Avatar shape="rounded" variant="primary" fallback="RO" />
            <Text variant="caption" className="block mt-1">Rounded</Text>
          </div>
          <div className="text-center">
            <Avatar shape="square" variant="primary" fallback="SQ" />
            <Text variant="caption" className="block mt-1">Square</Text>
          </div>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Avatar with Initials */}
      <ShowcaseGroup title="Avatar with Initials">
        <ShowcaseVariant title="Name Extraction from Fallback Text" layout="horizontal">
          <Avatar variant="primary" fallback="John Doe" />
          <Avatar variant="secondary" fallback="Jane Smith" />
          <Avatar variant="success" fallback="Alex Johnson" />
          <Avatar variant="warning" fallback="Chris Brown" />
          <Avatar variant="error" fallback="Taylor Davis" />
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Avatar with Custom Icons */}
      <ShowcaseGroup title="Avatar with Custom Icons">
        <ShowcaseVariant title="Icon Support with Semantic Colors" layout="horizontal">
          <Avatar variant="primary" icon={<IconSettings />} />
          <Avatar variant="info" icon={<IconHeart />} />
          <Avatar variant="success" icon={<IconStar />} />
          <Avatar variant="warning" icon={<IconHome />} />
          <Avatar variant="error" icon={<IconSearch />} />
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Avatar with Images and Fallbacks */}
      <ShowcaseGroup title="Avatar with Images & Fallbacks">
        <ShowcaseVariant title="Local Images with Fallback Support" layout="horizontal">
          <Avatar 
            src={avatarImage1} 
            alt="Avatar 1"
            fallback="A1"
            variant="primary"
          />
          <Avatar 
            src={avatarImage2} 
            alt="Avatar 2"
            fallback="A2"
            variant="secondary"
          />
          <Avatar 
            src={avatarImage3} 
            alt="Avatar 3"
            fallback="A3"
            variant="info"
          />
          <Avatar 
            src={avatarImage4} 
            alt="Avatar 4"
            fallback="A4"
            variant="success"
          />
          <Avatar 
            src={avatarImage5} 
            alt="Avatar 5"
            fallback="A5"
            variant="warning"
          />
          <Avatar 
            src="https://invalid-image-url.jpg" 
            alt="Broken Image"
            fallback="BR"
            variant="error"
          />
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Status Badges */}
      <ShowcaseGroup title="Avatar Status Badges (NEW)">
        <ShowcaseVariant title="Circular Avatars with Status" layout="horizontal">
          <div className="text-center">
            <Avatar src={avatarImage1} alt="Online User" status="online" size="md" shape="circular" />
            <Text variant="caption" color="secondary" className="mt-1 block">Online</Text>
          </div>
          <div className="text-center">
            <Avatar src={avatarImage2} alt="Away User" status="away" size="md" shape="circular" />
            <Text variant="caption" color="secondary" className="mt-1 block">Away</Text>
          </div>
          <div className="text-center">
            <Avatar src={avatarImage3} alt="Busy User" status="busy" size="md" shape="circular" />
            <Text variant="caption" color="secondary" className="mt-1 block">Busy</Text>
          </div>
          <div className="text-center">
            <Avatar src={avatarImage4} alt="Offline User" status="offline" size="md" shape="circular" />
            <Text variant="caption" color="secondary" className="mt-1 block">Offline</Text>
          </div>
        </ShowcaseVariant>

        <ShowcaseVariant title="Rounded Avatars with Status" layout="horizontal">
          <Avatar src={avatarImage1} alt="Online User" status="online" size="lg" shape="rounded" />
          <Avatar src={avatarImage2} alt="Away User" status="away" size="lg" shape="rounded" />
          <Avatar src={avatarImage3} alt="Busy User" status="busy" size="lg" shape="rounded" />
          <Avatar src={avatarImage4} alt="Offline User" status="offline" size="lg" shape="rounded" />
        </ShowcaseVariant>

        <ShowcaseVariant title="Square Avatars with Status (Top-right position)" layout="horizontal">
          <Avatar src={avatarImage1} alt="Online User" status="online" size="md" shape="square" />
          <Avatar src={avatarImage2} alt="Away User" status="away" size="md" shape="square" />
          <Avatar src={avatarImage3} alt="Busy User" status="busy" size="md" shape="square" />
          <Avatar src={avatarImage4} alt="Offline User" status="offline" size="md" shape="square" />
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Mixed Examples */}
      <ShowcaseGroup title="Mixed Combinations">
        <ShowcaseVariant title="Mixed Sizes & Colors (Rounded)" layout="horizontal">
          <Avatar size="xs" shape="rounded" variant="primary" fallback="XS" />
          <Avatar size="sm" shape="rounded" variant="secondary" fallback="SM" />
          <Avatar size="md" shape="rounded" variant="info" fallback="MD" />
          <Avatar size="lg" shape="rounded" variant="success" fallback="LG" />
          <Avatar size="xl" shape="rounded" variant="warning" fallback="XL" />
        </ShowcaseVariant>
      </ShowcaseGroup>
    </ShowcaseSection>
  );
}
