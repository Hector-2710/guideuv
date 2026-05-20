# GuideUV — Design Guidelines

## 1. Angular Architecture

### Standalone Components
- Todos los componentes deben ser **standalone** (no usar NgModules)
- Importar directamente las dependencias en `imports: []`

```typescript
@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  // ...
})
export class MyComponent {}
```

### Signals (Angular 17+)
- Usar **signals** para estado local reactivo
- Preferir `signal()` sobre `BehaviorSubject` o `Observable` para estado simple
- Usar `computed()` para derivadas

```typescript
readonly activeTab = signal<'linux' | 'windows'>('linux');
readonly filteredItems = computed(() => this.items().filter(...));
```

### Inputs & Outputs
- Usar **signal inputs** (`input()`, `input.required()`) en lugar de `@Input()`
- Usar **model inputs** (`model()`) para two-way binding cuando sea necesario
- Usar `output()` para eventos en lugar de `@Output()`

```typescript
// Input signal
items = input<Item[]>([]);
title = input<string>('Default');

// Output
delete = output<ItemId>();
```

### Change Detection
- Usar siempre `ChangeDetectionStrategy.OnPush` para mejor performance
- No inyectar `ChangeDetectorRef` manualmente

### Dependency Injection
- Usar `inject()` en lugar de constructor injection

```typescript
private service = inject(MyService);
```

---

## 2. Visual Design System

### Color Palette (Dark Theme — Zed-inspired)

**Foundation:**
- `--color-black: #09090b` — Fondo principal
- `--color-surface: #131316` — Superficies (navbar, cards)
- `--color-surface-hover: #1a1a1e` — Hover state
- `--color-border: rgba(255, 255, 255, 0.08)` — Bordes sutiles

**Text:**
- `--color-white: #ffffff` — Texto principal
- `--color-white-muted: #a1a1aa` — Texto secundario
- `--color-white-dim: #71717a` — Texto terciario/deshabilitado

**Accent (Yellow/Gold):**
- `--color-accent: #e5b830` — Color de énfasis principal
- `--color-accent-soft: #f5d060` — Acento suave (hover, highlights)

**Purple (Alternative):**
- `--color-purple: #7c3aed` — Color secundario
- `--color-purple-soft: #a78bfa` — Variante suave

### Typography

**Font Stack:**
- Sans: `'IBM Plex Sans', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`
- Mono: `'IBM Plex Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace`
- Serif: `'IBM Plex Serif', Georgia, 'Times New Roman', serif` (para énfasis)

**Usage:**
- Body: 1rem (16px) base
- Headings: Bold, tracking tight
- Code: `--font-mono`

### Spacing & Layout

- **Navbar height:** 56px (desktop), 48px (mobile)
- **Container max-width:** 1100px
- **Border radius:** 4px (pequeño), 8px (mediano)
- **Spacing scale:** 0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, 3rem

### Animations

- `--anim-duration-fast: 0.15s` — Transiciones rápidas (snappy)
- `--anim-duration-base: 0.25s` — Default
- `--anim-duration-slow: 0.4s` — Animaciones largas
- `--anim-easing-smooth: cubic-bezier(0.4, 0, 0.2, 1)` — Easing default

### Component Patterns

**Terminal Mockup:**
- Background: `--terminal-bg: #0d0d10`
- Header: `--terminal-header-bg: #16161a`
- Window dots: red (#ff5f57), yellow (#febc2e), green (#28c840)

**Cards:**
- Background: `--color-card-bg: rgba(255, 255, 255, 0.02)`
- Hover: `--color-card-bg-hover: rgba(255, 255, 255, 0.04)`
- Border hover: `--color-border-hover: rgba(229, 184, 48, 0.3)`

---

## 3. Code Conventions

### Naming
- **Components:** PascalCase (`HomeComponent`, `NavbarComponent`)
- **Files:** kebab-case (`home.component.ts`, `navbar.css`)
- **Classes:** export class Name
- **Interfaces:** PascalCase con prefijo opcional (`NavbarLink`, `RepoConfig`)

### JSDoc Comments
- Documentar propósito de cada propiedad/método público
- Usar `/** ... */` para descripciones

```typescript
/** Tracks which install platform tab is active */
activePlatform = signal<'linux' | 'windows'>('linux');
```

### CSS Methodology
- Usar CSS con variables CSS (no SCSS nesting extremo)
- Prefijos BEM-ish: `.block__element--modifier`
- Comentar secciones con `/* === Section === */`

### Typescript
- Preferir tipos explícitos en interfaces públicas
- Usar `readonly` para arrays/objetos inmutables
- Evitar `any`

---

## 4. Project Structure

```
src/app/
├── navbar/
│   ├── navbar.ts         (Component)
│   ├── navbar.html       (Template)
│   ├── navbar.css        (Styles)
│   └── navbar.spec.ts    (Tests)
├── home/
│   ├── home.component.ts
│   ├── home.component.html
│   ├── home.component.scss
│   ├── home-data.service.ts
│   └── components/
│       └── terminal-mockup/
│           ├── terminal-mockup.component.ts
│           ├── terminal-mockup.component.html
│           └── terminal-mockup.component.scss
├── app.routes.ts
├── app.config.ts
├── app.ts
└── app.html
```

### Component Structure
1. Imports (Angular, libraries)
2. Interfaces/Types exportables
3. Constants exportables
4. @Component decorator
5. Component class

---

## 5. Accessibility

- **Focus:** Yellow accent ring (`--color-accent`) on `:focus-visible`
- **Color contrast:** White on black surfaces
- **Tap highlight:** Transparent (`-webkit-tap-highlight-color: transparent`)
- **Scroll offset:** Headers tienen `scroll-margin-top` para anchors
- **Dark mode only:** `color-scheme: dark` en html