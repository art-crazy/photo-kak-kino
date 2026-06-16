<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Rules

- Use FSD: `app` for routes, `widgets` for page sections, `features` for user actions, `entities` for domain data, `shared` for reusable UI/lib/config.
- Keep code simple, readable, and boring. Do not add abstractions until they remove real duplication.
- Use TypeScript, CSS Modules, `next/image`, and `next/font`.
- SEO is critical: preserve correct `metadata`, OpenGraph, Twitter cards, canonical URLs, semantic HTML, image `alt`, and controllable indexing rules.
- Keep components small and focused. Prefer explicit props and plain data files.
- Do not add CMS, database, global state manager, or UI framework unless explicitly requested.
