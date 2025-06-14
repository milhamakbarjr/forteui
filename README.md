# ForteUI Technical README

## 1. Introduction

ForteUI is a production-ready React UI component library. It features a custom design system, Plus Jakarta Sans typography, and is built as a monorepo managed with Turborepo and Bun.

## 2. Core Technologies

*   **React**: For building user interfaces.
*   **TypeScript**: For static typing and improved developer experience.
*   **Bun**: As the JavaScript runtime, package manager, and bundler.
*   **Turborepo**: For managing the monorepo and optimizing build/task execution.
*   **Tailwind CSS**: For utility-first CSS styling.
*   **Style Dictionary**: For managing and transforming design tokens.
*   **Next.js**: For the documentation site (`apps/docs`).
*   **Vite**: For the playground application (`apps/playground`).
*   **Fumadocs**: For generating the documentation site.
*   **Radix UI**: Primitives used by some core components.
*   **tsup**: For bundling the `forteui-core` package.

## 3. Project Structure

The project is a monorepo with the following structure:

```
├── apps/
│   ├── docs/         # Documentation site (Next.js, Fumadocs)
│   └── playground/   # Component playground (Vite, React)
├── packages/
│   ├── core/         # Core React UI components (forteui-core)
│   ├── icons/        # SVG icons (Placeholder - structure suggests future icon package)
│   ├── themes/       # Theme configurations (Placeholder - structure suggests future theme package)
│   ├── tokens/       # Design tokens (Style Dictionary)
│   └── utils/        # Utility functions (Placeholder - structure suggests future utils package)
├── tools/
│   ├── eslint-config/ # Shared ESLint configurations
│   └── tsconfig/      # Shared TypeScript configurations
├── bun.lockb
├── package.json      # Root package.json, manages workspaces and global scripts
├── tsconfig.json     # Root TypeScript configuration
└── turbo.json        # Turborepo configuration
```

### 3.1. `apps/`

*   **`docs`**:
    *   Framework: Next.js
    *   Documentation Generator: Fumadocs
    *   Purpose: Provides comprehensive documentation for the ForteUI component library, including usage examples and API references.
    *   Key files: `next.config.js`, `mdx-components.tsx`, `content/docs/`
*   **`playground`**:
    *   Framework: Vite + React
    *   Purpose: An interactive environment for developers to experiment with and showcase individual ForteUI components.
    *   Key files: `vite.config.ts`, `src/App.tsx`, `src/showcases/`

### 3.2. `packages/`

*   **`core` (`forteui-core`)**:
    *   Purpose: Contains the source code for all reusable React UI components.
    *   Bundler: `tsup`
    *   Key files: `src/index.ts`, `src/components/`, `tsup.config.ts`
    *   Dependencies: `forteui-tokens`, Radix UI primitives.
*   **`icons`**:
    *   Purpose: Intended to house SVG icons or an icon component library. (Currently a placeholder based on structure).
*   **`themes`**:
    *   Purpose: Intended for different theme configurations for the UI components. (Currently a placeholder).
*   **`tokens` (`forteui-tokens`)**:
    *   Purpose: Manages the design system's foundational styles (colors, typography, spacing, effects) as design tokens.
    *   Tool: Style Dictionary
    *   Source files: `src/*.json` (e.g., `colors.json`, `typography.json`)
    *   Output: CSS variables (`dist/variables.css`) and JavaScript objects (`dist/tokens.js`).
    *   Build script: `build-tokens.mjs` (uses Style Dictionary API).
    *   Configuration: `style-dictionary.config.js`
*   **`utils`**:
    *   Purpose: Intended for shared utility functions across the monorepo. (Currently a placeholder).

### 3.3. `tools/`

*   **`eslint-config`**: Contains shared ESLint configurations to ensure consistent code style across the monorepo.
*   **`tsconfig`**: Contains shared TypeScript configurations (`base.json`, `react-library.json`) to ensure consistent TypeScript settings.

## 4. Development

### 4.1. Prerequisites

*   **Bun**: Ensure Bun is installed. Visit [bun.sh](https://bun.sh) for installation instructions. The project specifies `bun >=1.0.0`.

### 4.2. Installation

Clone the repository and install dependencies using Bun:

```bash
git clone <repository-url>
cd forteui
bun install
```

### 4.3. Running Development Servers

To run all development servers (e.g., for `docs` and `playground` apps, and watch mode for packages) concurrently:

```bash
bun run dev
```

This command is managed by Turborepo and will typically start:
*   The Next.js development server for the `docs` app.
*   The Vite development server for the `playground` app.
*   `tsup` in watch mode for the `core` package.

You can also run development servers for individual apps or packages by navigating to their respective directories and using their specific `dev` scripts (e.g., `cd apps/docs && bun run dev`).

### 4.4. Building the Project

To build all packages and applications:

```bash
bun run build
```

Turborepo will manage the build process, respecting dependencies and caching artifacts.

### 4.5. Linting and Formatting

*   **Linting**: To lint all code in the monorepo:
    ```bash
    bun run lint
    ```
*   **Formatting**: To format all code using Prettier:
    ```bash
    bun run format
    ```
*   **Check Formatting**: To check for formatting issues without writing changes:
    ```bash
    bun run format:check
    ```

### 4.6. Type Checking

To perform type checking across the monorepo:

```bash
bun run type-check
```

### 4.7. Building Design Tokens

The design tokens are managed in the `packages/tokens` directory. To rebuild them (e.g., after modifying token source files like `colors.json`):

```bash
bun run tokens:build
```
This script executes `node packages/tokens/build-tokens.mjs`, which uses Style Dictionary to generate CSS and JS token files.

## 5. Testing

To run tests across the monorepo:

```bash
bun run test
```
(Note: The specific testing setup and frameworks used within each package/app are not detailed here but this is the top-level command via Turborepo.)

## 6. Cleaning Build Artifacts

To clean all build artifacts (`dist`, `.next`, etc.) from all packages and apps:

```bash
bun run clean
```

## 7. Versioning and Publishing (Conceptual)

The project includes `@changesets/cli`, suggesting Changesets is used for versioning and publishing packages. The typical workflow would involve:
1.  `bun changeset add` (after making changes)
2.  `bun changeset version` (to update package versions and changelogs)
3.  Commit changes.
4.  `bun changeset publish` (to publish updated packages to a registry like npm).

The `publishConfig: { "access": "public" }` in `packages/core/package.json` and `packages/tokens/package.json` indicates these packages are intended for public release.

## 8. Key Scripts (from root `package.json`)

*   `bun run build`: Builds all packages and apps.
*   `bun run dev`: Starts all development servers.
*   `bun run test`: Runs tests.
*   `bun run lint`: Lints the codebase.
*   `bun run type-check`: Performs TypeScript type checking.
*   `bun run clean`: Removes build artifacts.
*   `bun run tokens:build`: Builds design tokens specifically.
*   `bun run format`: Formats code with Prettier.
*   `bun run format:check`: Checks code formatting with Prettier.

Refer to individual `package.json` files within `apps/` and `packages/` for more specific scripts.

## 9. Turborepo Configuration (`turbo.json`)

The `turbo.json` file defines the task pipeline for the monorepo. Key aspects:
*   **Task Dependencies**: `dependsOn: ["^build"]` means a task (e.g., `lint`, `test`) depends on the `build` task of its local package dependencies.
*   **Inputs/Outputs**: Specifies files and directories that affect a task's cache.
*   **Caching**: Turborepo caches task outputs to speed up subsequent runs.
*   **`dev` task**: `cache: false` and `persistent: true` are typical for long-running development servers.
*   **Global Dependencies**: Changes to files like `tsconfig.json` or root `package.json` can invalidate caches globally.

This README provides a technical overview. For more detailed information on specific components or packages, refer to their respective directories and documentation.
