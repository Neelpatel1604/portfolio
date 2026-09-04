# neelbuilds - Portfolio

Personal portfolio site for [Neel Patel](https://neelbuilds.com), built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Stack

- **Framework** - Next.js 16 (App Router, Turbopack)
- **Styling** - Tailwind CSS v4
- **Animations** - Framer Motion
- **Theme** - next-themes (dark / light, system-aware)
- **Font** - Geist Sans + Geist Mono

## Editing content

All site content lives in `lib/` - no need to touch any component files:

| File | Controls |
|---|---|
| `lib/experience.ts` | Work history, roles, bullets, tags |
| `lib/projects.ts` | Projects, descriptions, GitHub & Devpost links |
| `lib/leadership.ts` | Community roles and club involvement |
| `lib/stack.ts` | Technical stack categories and items |
| `lib/education.ts` | Education entries |
| `lib/recognition.ts` | Certifications, competitions, hackathons |

## Contributing

Found a bug or want to suggest an improvement? Contributions are welcome.

1. Fork the repo
2. Create a branch - `git checkout -b fix/your-change`
3. Make your changes (content edits go in `lib/`, layout changes in `components/`)
4. Open a pull request with a short description

For content-only changes (typos, updating links, adding a project) you can also just open an issue.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  page.tsx          # About section + page shell
  layout.tsx        # Root layout, metadata, theme provider
  globals.css       # Tailwind imports + dark mode variant

components/
  nav.tsx                  # Sticky nav with theme toggle
  experience-section.tsx   # Experience renderer
  projects-section.tsx     # Projects renderer
  leadership-section.tsx   # Leadership renderer
  stack-section.tsx        # Technical stack renderer
  education-section.tsx    # Education renderer
  recognition-section.tsx  # Recognition renderer
  theme-provider.tsx       # next-themes wrapper

lib/
  experience.ts     # Experience data
  projects.ts       # Projects data
  leadership.ts     # Leadership data
  stack.ts          # Stack data
  education.ts      # Education data
  recognition.ts    # Recognition data
```

## License

[MIT](./LICENSE) © 2026 Neel Patel
