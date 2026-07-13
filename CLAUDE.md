<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project skills

Read and follow the skill files in `.cursor/skills/` — do not duplicate their content here:

| Skill | Topic |
|-------|--------|
| [code-standards](.cursor/skills/code-standards/SKILL.md) | Language, naming, control flow, types |
| [react](.cursor/skills/react/SKILL.md) | Components, hooks, props, memoization |
| [test](.cursor/skills/test/SKILL.md) | Vitest setup, unit/integration tests, stubs |

## What this site is

Personal portfolio for Lucas Viga — a single-page **bento dashboard** at `/` with modal detail views. Static content lives in `src/data/`. The only additional route is `/privacy/openata` (Open ATA app privacy policy).

## Folder structure

Use `@/` for imports (maps to `src/`). Keep pages thin; put logic in hooks and utils. Follow [code-standards](.cursor/skills/code-standards/SKILL.md) for naming, size, and style.

```
src/
├── app/                    # Routes, root layout, global + dashboard CSS
│   ├── page.tsx            # Home → HomeDashboard
│   ├── layout.tsx          # Root layout, fonts, analytics
│   ├── global.css          # Tailwind v4 + base styles
│   ├── dashboard.css       # Home dashboard component styles (@layer components)
│   └── privacy/openata/    # Standalone privacy page
├── components/
│   └── home-dashboard/     # Bento grid widgets (see below)
├── data/                   # Static portfolio content (experience, education, techs)
├── hooks/                  # useHomeDashboard, carousel hooks
└── utils/                  # cn() and other pure helpers
public/                     # Static files served by URL (/images/…)
```

### Home dashboard widget folders

Each bento widget lives in its own folder under `src/components/home-dashboard/`:

| Folder | Widget | Contents |
|--------|--------|----------|
| `bento/` | Grid shell | `BentoGrid`, `BentoCard` |
| `chat/` | Hero chat input | `HomeChat`, `chat.constants.ts` |
| `about/` | About card + modal | `AboutCardBody`, `ModalAbout`, `about.constants.ts` |
| `experience/` | Experience card + modal | Card body, timeline, mappers, types |
| `education/` | Education card + modal | List items, mappers |
| `skills/` | Skills carousel + modal | Slides, story progress |
| `follow/` | Social profile card | `FollowCardBody`, `follow.constants.ts` |
| `insight/` | Shared carousel chrome | Header, nav, slide, icons |
| `modal/` | Dialog wrapper | `CardModal`, `ModalBody` |
| `timeline/` | Timeline primitives | Used by experience/education modals |

Root-level files: `HomeDashboard.tsx`, `home-dashboard.types.ts`.

| Folder | Put here | Do not put here |
|--------|----------|-----------------|
| `app/` | `page.tsx`, `layout.tsx`, route pages, CSS | Business logic, large UI blocks |
| `components/` | Feature UI, colocated constants/types | Data files, hooks |
| `data/` | Static portfolio content arrays | React components |
| `hooks/` | Stateful logic extracted from components | JSX, static content |
| `utils/` | `cn`, formatters | React hooks, components |

**Components:** kebab-case folders, PascalCase files. Colocate everything used by one widget (sub-components, `*.constants.ts`, `*.types.ts`, `*.mappers.ts`).

**Assets:** use `public/` for URL references. Never duplicate the same file in both `public/` and `src/assets/`.

**Where to add new code**

| Need | Location |
|------|----------|
| Route or page | `src/app/<route>/page.tsx` |
| New bento widget | `src/components/home-dashboard/<widget>/` |
| Static content | `src/data/<domain>.ts` |
| Reusable logic | `src/hooks/use<Name>.ts` |
| Shared helper | `src/utils/<name>.ts` |

## Styling

- **Tailwind CSS v4** via `@import "tailwindcss"` in [global.css](src/app/global.css)
- Design tokens in `@theme` block in global.css
- Complex dashboard styles in [dashboard.css](src/app/dashboard.css) (`@layer components`) — referenced by semantic class names (`shell`, `grid`, `card`, etc.)
- Privacy page uses Tailwind utility classes directly
- Do **not** use CSS modules or Panda CSS

## Setup & commands

This project uses **npm**. Node.js is required.

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build and start
npm run build
npm start

# Lint
npm run lint
```

## Ports

| Service | Port | URL |
|---------|------|-----|
| Next.js dev server (`npm run dev`) | **3000** | http://localhost:3000 |
| Next.js production (`npm start`) | **3000** | http://localhost:3000 |

Override the port with `-p` if needed, e.g. `npm run dev -- -p 3001`.

## Main dependencies

| Package | Role |
|---------|------|
| **next** (16.x) | App Router, SSR |
| **react** / **react-dom** (19.x) | UI |
| **typescript** (5.x) | Type checking |
| **tailwindcss** (v4) + **@tailwindcss/postcss** | Styling |
| **eslint** + **eslint-config-next** | Linting |
