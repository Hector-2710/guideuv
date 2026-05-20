# GuideUV — Your Interactive Guide to uv, the Python Package Manager

<p align="center">
  <strong>Aprende <code>uv</code> de forma visual e interactiva</strong><br>
  <sub>Built with Angular 21 · TypeScript Strict · Dark Theme</sub>
</p>

---

## What is GuideUV?

**GuideUV** is an interactive, educational landing page that teaches developers how to use [**uv**](https://docs.astral.sh/uv/) — the blazing-fast Python package and project manager written in Rust. Through a clean, visual interface with terminal mockups, copy-pasteable code snippets, and structured guides, GuideUV makes learning `uv` intuitive and enjoyable.

**Live demo:** [guideuv.dev](https://guideuv.dev)

---

## Why GuideUV?

`uv` is powerful, but its documentation can be dense for newcomers. GuideUV bridges that gap with:

- **Visual terminal mockups** that show real commands in context
- **Step-by-step guides** covering every aspect of `uv` — from project setup to advanced tooling
- **Copy-paste ready commands** — click any command to copy it to your clipboard
- **Built-in search** with real-time results across all guides
- **Responsive design** — looks great on desktop, tablet, and mobile

---

## Features

### Landing Page
- Platform toggle (Linux / Windows) for install commands
- One-click copy for every command block
- Interactive terminal window with macOS-style chrome
- Feature cards highlighting `uv` capabilities

### Guides Section (8 pages, lazy-loaded)
| Guide | What you'll learn |
|-------|-------------------|
| **Introduction** | Overview of `uv`'s capabilities and philosophy |
| **Projects** | `uv init`, `add`, `remove`, `sync`, `run`, `tree`, `build`, `publish` |
| **Python Versions** | Managing Python installations: `install`, `list`, `find`, `uninstall` |
| **Package** | Building and publishing Python packages |
| **Scripts** | Running standalone scripts with inline dependencies |
| **Tools** | Installing and running CLI tools with `uv tool` and `uvx` |
| **Pip Interface** | The pip-compatible API: `venv`, pip install, list, freeze, compile, sync |
| **Utility** | Cache management, self-updates, and state directories |

### Navigation & UX
- Persistent left sidebar with active section highlighting
- Dynamic table of contents that syncs with scroll position
- Full-text search with paginated results modal
- Mobile-responsive with collapsible navigation

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [**Angular 21**](https://angular.dev) | Framework — standalone components, signals |
| [**TypeScript 5.9**](https://www.typescriptlang.org) | Strict mode, no `any` |
| [**Vitest**](https://vitest.dev) | Unit testing (no Karma/Jasmine) |
| **SCSS with BEM** | Scalable, maintainable styles |
| **CSS Custom Properties** | Design token system for theming |

### Architecture Highlights
- **Zero NgModules** — every component is `standalone: true`
- **Signals everywhere** — `signal()`, `computed()`, `input()`, `output()` (no RxJS for state)
- **`inject()` over constructor DI**
- **`ChangeDetectionStrategy.OnPush`** on all components
- **Lazy loading** for the entire `/guides` feature
- **Dynamic TOC generation** via `IntersectionObserver`

---

## Quick Start

```bash
# Clone the repo
git clone https://github.com/Hector-2710/guideuv.git
cd guideuv

# Install dependencies
npm install

# Start the dev server
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser. The app hot-reloads on every change.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server with hot reload |
| `npm run build` | Production build to `dist/` (enforces strict templates) |
| `npm test` | Run Vitest test suite |
| `npm run watch` | Build in development mode with file watching |

---

## Project Structure

```
src/
├── app/
│   ├── app.ts                      # Root component
│   ├── app.routes.ts               # Top-level routes (/, /about, /guides)
│   ├── app.config.ts               # Provider configuration
│   ├── navbar/                     # Navigation bar with integrated search
│   ├── home/                       # Landing page
│   │   ├── home.component.*
│   │   ├── home-data.service.ts    # Static content provider
│   │   └── components/
│   │       └── terminal-mockup/    # Reusable terminal window
│   ├── about/                      # About page
│   ├── guides/                     # Guides feature (lazy-loaded)
│   │   ├── guides.routes.ts        # Child routes
│   │   ├── guides-data.ts          # Navigation config
│   │   ├── guides-state.service.ts # Scoped state management
│   │   ├── guides-shell/           # Layout: left nav + content + TOC
│   │   ├── guides-left-nav/        # Section navigation sidebar
│   │   ├── guides-toc/             # Dynamic table of contents
│   │   ├── pages/                  # 8 guide content pages
│   │   └── footer/                 # Site-wide footer
│   └── search/                     # Search service + results modal
├── styles.css                      # Design tokens & global styles
└── index.html
```

---

## Design System

GuideUV uses a **Zed-inspired dark theme** with a bold yellow accent. All design tokens are defined as CSS custom properties in `src/styles.css`.

| Role | Color |
|------|-------|
| Background | `#09090b` |
| Surface | `#131316` |
| Text | `#ffffff` |
| Accent | `#e5b830` |
| Secondary | `#7c3aed` |

Full design documentation: [DESIGN.md](DESIGN.md)

---

## Contributing

Contributions are welcome! Whether you want to fix a typo, add a new guide page, or improve the search, please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines, commit conventions, and the pull request process.

## License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details. You are free to use, modify, and distribute this project for any purpose.

---

<p align="center">
  <sub>Built with ❤️ using Angular 21 • <code>npm@11.12.1</code></sub>
</p>
