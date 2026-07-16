# Deployment and rollback

## Normal deployment

1. Run `just check`, `just pages-check /netiquette/`, and `just e2e`.
2. Push the reviewed commit to `main`.
3. Confirm both CI and **Deploy to GitHub Pages** complete successfully.
4. Smoke-test the production homepage, a direct entry in each language, the
   manifest, service worker, `404.html`, and social metadata.

## Rollback

GitHub Pages deploys immutable build artifacts, so rollback should preserve Git
history:

1. Identify the last known-good commit in the Actions deployment history.
2. Prefer `git revert <bad-commit>` and push the revert to `main`; CI rebuilds
   and deploys the restored source.
3. If the source is already correct but deployment failed transiently, rerun
   the previous successful **Deploy to GitHub Pages** workflow instead.
4. Recheck the homepage, a direct localized entry, manifest, and service worker
   after rollback.

Do not rewrite `main` history or force-push as a rollback mechanism.

## Docker runtime

Docker is an additional self-hosted runtime; it does not replace the GitHub
Pages release flow.

```bash
just docker-build
just docker-up
```

The production container is available at `http://localhost:8080` by default.
Set `PORT` and `SITE_URL` when another public origin is needed, for example:

```bash
PORT=9000 SITE_URL=https://netiquette.example/ just docker-up
```

`SITE_URL` is compiled into canonical and social metadata. Terminate the stack
with `just docker-down`. Use `just docker-dev` for the Vite development server
on port 5173; dependency changes require an image rebuild.

## Release sign-off

The project owner records the approved date and release notes, creates the MVP
tag, and announces the site only after the remaining manual checks in
`implementation-progress.md` are complete.
