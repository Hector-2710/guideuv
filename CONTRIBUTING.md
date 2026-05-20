# Contributing Guide — GuideUV

Thanks for your interest in contributing to GuideUV. This document explains how you
can get involved in the project, whether with code, content, design, or bug reports.

---

## Code of Conduct

One simple rule: **treat others with respect**. Harassment, abusive language, and any
kind of discrimination will not be tolerated. We want this space to be safe and
productive for everyone.

---

## How Can I Contribute?

### Report Bugs

If you found something that doesn't work, open an issue with this information:

- **Clear and descriptive title**
- **Steps to reproduce** the error (as detailed as possible)
- **Expected behavior** vs **actual behavior**
- **Environment:** Node.js version, npm, browser, and operating system
- **Screenshots** or **screen recordings** if they help understand the problem

### Suggest Enhancements

Do you have an idea to make GuideUV better? Open an issue explaining:

- **What problem your idea solves**
- **How it would work** (mockups, sketches, or descriptions are welcome)
- **Why it fits in GuideUV** (alignment with the educational focus on `uv`)

### Pull Requests

1. **Fork** the repository
2. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following the code conventions
   (see [DESIGN.md](DESIGN.md))
4. **Write or update tests** when applicable
5. **Run the full verification suite** before submitting:
   ```bash
   npm run build   # Verifies templates compile and strict mode passes
   npm test        # Runs the test suite with Vitest
   ```
6. **Commit** with a descriptive message (see convention below)
7. **Push** your branch and open a pull request against `main`

---

## Commit Convention

We use a lightweight version of [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <brief description>
```

| Type       | When to use it                                         |
|------------|--------------------------------------------------------|
| `feat`     | New feature or guide page                              |
| `fix`      | Bug fix                                                |
| `docs`     | Documentation or content changes                       |
| `style`    | CSS/formatting changes (no logic changes)              |
| `refactor` | Code restructuring without new feature or fix          |
| `test`     | Adding or updating tests                               |
| `chore`    | Build config, dependencies, CI, etc.                   |

**Examples:**

```
feat: add debounced search to the navbar
fix: correct scroll-margin on guide headings
docs: translate introduction guide to Spanish
```

---

## Development Environment Setup

```bash
# Clone your fork
git clone git@github.com:YOUR-USERNAME/guideuv.git
cd guideuv

# Install dependencies
npm install

# Start the development server
npm start
```

The application runs at `http://localhost:4200`. Changes are reloaded
automatically.

---

## Code Conventions

This project follows strict rules to maintain consistency. Before writing code,
read [DESIGN.md](DESIGN.md). Here's a quick summary:

### Angular

| Rule                                                | Why                                                     |
|-----------------------------------------------------|---------------------------------------------------------|
| All components must be `standalone: true`           | Angular standalone architecture — no NgModules           |
| Use `signal()` / `computed()` for local state       | Modern reactive state management                         |
| Use `inject()` instead of constructor injection     | Cleaner, more composable code                            |
| `ChangeDetectionStrategy.OnPush` everywhere         | Better runtime performance                               |
| `input()` / `output()` (no decorators)              | Signal-based component API                               |
| `input.required()` for required inputs              | Type doesn't include `undefined`                         |

```typescript
// ✔️ Correct
@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyComponent {
  private router = inject(Router);
  readonly items = input.required<Item[]>();
  readonly selected = signal<string | null>(null);
  readonly delete = output<string>();
}
```

### CSS

| Rule                                   | Example                        |
|----------------------------------------|--------------------------------|
| BEM naming convention                  | `.navbar__link--active`        |
| Use CSS variables from the design system | `var(--color-accent)`        |
| Comment sections with `/* === */`      | `/* === Search Bar === */`     |
| Dark theme only                        | `color-scheme: dark`           |

### TypeScript

- Explicit types on public interfaces
- `readonly` for immutable arrays and objects
- **No `any`** — always define the correct type
- JSDoc on public properties and methods:

```typescript
/** Tracks which installation platform tab is active */
readonly activePlatform = signal<'linux' | 'windows'>('linux');
```

### Naming

| Element        | Convention                        | Example               |
|----------------|-----------------------------------|-----------------------|
| Components     | PascalCase                        | `HomeComponent`       |
| Files          | kebab-case                        | `home.component.ts`   |
| Selectors      | `app-` + kebab-case               | `app-terminal-mockup` |
| Interfaces     | PascalCase, no `I` prefix         | `GuideSection`        |
| Services       | PascalCase + `Service`            | `SearchService`       |

---

## Project Architecture

```
src/app/
├── app.ts                      # Root component
├── app.routes.ts               # Main routes (/, /about, /guides)
├── app.config.ts               # Provider configuration
├── navbar/                     # Navigation bar with integrated search
├── home/                       # Landing page
│   ├── home.component.*
│   ├── home-data.service.ts    # Static home page content
│   └── components/
│       └── terminal-mockup/    # Reusable terminal window
├── about/                      # "About" page
├── guides/                     # Guides section (lazy-loaded)
│   ├── guides.routes.ts        # Child routes under /guides
│   ├── guides-data.ts          # Side navigation configuration
│   ├── guides-state.service.ts # Feature-scoped state
│   ├── guides-shell/           # Layout: left nav + content + TOC
│   ├── guides-left-nav/        # Section navigation sidebar
│   ├── guides-toc/             # Dynamic table of contents
│   ├── pages/                  # 8 guide content pages
│   └── footer/                 # Site footer
└── search/                     # Search service + results modal
```

### How to Add a New Guide Page

1. Create the component in `src/app/guides/pages/guide-your-topic/`
2. Add it to `guides-data.ts` in the `GUIDES_SECTIONS` array
3. Add the route in `guides.routes.ts`
4. The dynamic TOC is automatically generated from `<h2>` and `<h3>` tags in your template

---

## Need Help?

- **Questions?** Open a Discussion or an issue with the `question` label
- **Stuck on a PR?** Tag a maintainer in your PR or issue

---

Thank you for contributing to GuideUV. Every contribution — no matter how small —
helps make `uv` more accessible to developers around the world.
