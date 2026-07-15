# Netiquette task runner. Override the package-manager binary with `PNPM=...`
# when needed, for example: `PNPM=/custom/path/pnpm just check`.

pnpm := env_var_or_default("PNPM", "pnpm")

# List available project tasks.
default:
    @just --list

# Install exactly the dependencies recorded in the lockfile.
install:
    {{ pnpm }} install --frozen-lockfile

# Refresh dependencies after an intentional package.json change.
sync:
    {{ pnpm }} install

# Start the local development server.
dev host="127.0.0.1":
    {{ pnpm }} dev --host "{{ host }}"

# Run Vue and TypeScript checks.
typecheck:
    {{ pnpm }} typecheck

# Run the automated test suite.
test:
    {{ pnpm }} test

# Run type checking and tests without building.
verify:
    {{ pnpm }} typecheck
    {{ pnpm }} test

# Pre-render the production site into dist/.
build:
    {{ pnpm }} build

# Build for a GitHub Pages project path.
pages-build base_path="/netiquette/":
    BASE_PATH="{{ base_path }}" {{ pnpm }} build

# Build and validate the complete GitHub Pages artifact.
pages-check base_path="/netiquette/":
    BASE_PATH="{{ base_path }}" {{ pnpm }} build
    BASE_PATH="{{ base_path }}" {{ pnpm }} verify:pages

# Preview the latest production build locally.
preview host="127.0.0.1" base_path="/netiquette/":
    BASE_PATH="{{ base_path }}" {{ pnpm }} preview --host "{{ host }}"

# Run the complete local verification sequence.
check:
    {{ pnpm }} check
