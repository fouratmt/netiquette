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

# Fail when a production dependency has a high- or critical-severity advisory.
audit:
    {{ pnpm }} audit:production

# Install browser engines used by the end-to-end suite.
install-browser browser="chromium":
    {{ pnpm }} exec playwright install "{{ browser }}"

# Install a browser and its Linux system dependencies in CI.
install-browser-ci browser="chromium":
    {{ pnpm }} exec playwright install --with-deps "{{ browser }}"

# Run the automated Chromium desktop/mobile user and accessibility flows.
e2e:
    {{ pnpm }} test:e2e

# Run the same flows in Chromium, Firefox, WebKit, and mobile Chromium.
cross-browser:
    {{ pnpm }} test:cross-browser

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
    {{ pnpm }} verify:budget

# Check the built JavaScript and CSS against the MVP performance budget.
budget:
    {{ pnpm }} verify:budget

# Run Lighthouse against a temporary production preview.
lighthouse host="127.0.0.1" port="43929" base_path="/netiquette/":
    #!/usr/bin/env bash
    set -euo pipefail
    BASE_PATH="{{ base_path }}" {{ pnpm }} build >/dev/null
    BASE_PATH="{{ base_path }}" {{ pnpm }} preview --host "{{ host }}" --port "{{ port }}" >/tmp/netiquette-lighthouse-preview.log 2>&1 &
    server_pid=$!
    trap 'kill "$server_pid" 2>/dev/null || true' EXIT
    for attempt in {1..40}; do
      if curl --fail --silent "http://{{ host }}:{{ port }}{{ base_path }}en" >/dev/null; then break; fi
      sleep 0.25
    done
    LIGHTHOUSE_URL="http://{{ host }}:{{ port }}{{ base_path }}en" {{ pnpm }} audit:lighthouse

# Preview the latest production build locally.
preview host="127.0.0.1" base_path="/netiquette/" port="4173":
    BASE_PATH="{{ base_path }}" {{ pnpm }} preview --host "{{ host }}" --port "{{ port }}"

# Build the production Docker image.
docker-build:
    docker compose build

# Start the production container at http://localhost:8080.
docker-up:
    docker compose up --build --detach

# Start the hot-reloading development container at http://localhost:5173.
docker-dev:
    docker compose -f compose.dev.yaml up --build

# Stop and remove Docker containers created by either Compose workflow.
docker-down:
    docker compose down
    docker compose -f compose.dev.yaml down

# Run the complete local verification sequence.
check:
    {{ pnpm }} check
