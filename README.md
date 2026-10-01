# ByteSpace

ByteSpace is a modern, fully responsive **online-courses marketplace** website. Learners can browse and discover courses, creators get their own profile pages, and visitors can sign in or sign up. This repository contains the **frontend only** – all data is static and the forms are UI demos (there is no backend or database yet).

## Live Demo

🔗 **[https://byte-space-delta.vercel.app/](https://byte-space-delta.vercel.app/)**

## Pages

| Route | Description |
| --- | --- |
| `/` | Home – hero with search, partner logo strip, course discovery with category chips, learning-path cards, growth / creator sections, call-to-action and testimonials |
| `/courses` | Course catalogue – search bar, filter buttons, category chips, course grid and pagination |
| `/courses/[slug]` | Course details – video preview, About / Lesson / Reviews tabs, and a sticky enrolment sidebar |
| `/creators/[slug]` | Creator profile – bio, stats, and the creator's courses |
| `/login` | Sign-in form with social login buttons |
| `/signup` | Account creation form |
| `*` (not found) | Custom 404 page with an oversized gradient "404" |

## Features

- Fully responsive layout (phones → tablets → desktops), including a hamburger menu on small screens
- Reusable component library: `Navbar`, `Footer`, `CourseCard`, `FilterBar`, `Pagination`, `AvatarStack`, decorative `Shapes`, and more
- Interactive category chips and course-detail tabs
- Client-side validated sign-in / sign-up forms (demo only – no backend connected)
- Statically generated course and creator pages (`generateStaticParams`) with per-page metadata
- Optimised images (`next/image`) and fonts (`next/font`)

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v4
- ESLint 9 with `eslint-config-next`
- Google Fonts via `next/font` – **Poppins** (headings) and **Outfit** (body)
- [pnpm](https://pnpm.io) as the package manager

## Project structure

```
app/
  layout.tsx            Root layout, fonts and metadata
  page.tsx              Home page
  not-found.tsx         404 page
  courses/              Catalogue + [slug] course details
  creators/[slug]/      Creator profile
  login/  signup/       Auth pages
  globals.css           Tailwind import, theme tokens, grid background
components/             Reusable UI components (Navbar, Hero, CourseCard, LogoStrip, ...)
lib/
  courses.ts            Static course data
  creators.ts           Static creator data
public/                 Images, avatars and course thumbnails
```

## Getting started

### Prerequisites

- Node.js 20 or newer
- pnpm (recommended) – or npm / yarn

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd ByteSpace-main

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create an optimised production build |
| `pnpm start` | Run the production build |
| `pnpm lint` | Lint the project with ESLint |

## Customising

- **Courses** – edit `lib/courses.ts` (title, price, lessons, thumbnail, …) and add images to `public/courses/`.
- **Creators** – edit `lib/creators.ts`.
- **Brand colours** – change the tokens in the `@theme` block of `app/globals.css` (`brand`, `lime`, `ink`, `muted`, `chip`).