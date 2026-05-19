import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  computed,
  inject,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GuidesLeftNavComponent } from '../guides-left-nav/guides-left-nav.component';
import { GuidesTocComponent, TocItem } from '../guides-toc/guides-toc.component';
import { GuidesStateService } from '../guides-state.service';

@Component({
  selector: 'app-guides-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GuidesLeftNavComponent, GuidesTocComponent],
  templateUrl: './guides-shell.component.html',
  styleUrl: './guides-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GuidesStateService],
})
export class GuidesShellComponent {
  private readonly guidesState = inject(GuidesStateService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private observer: IntersectionObserver | null = null;

  readonly sections = this.guidesState.sections;
  readonly activeSlug = signal('');
  readonly tocItems = signal<ReadonlyArray<TocItem>>([]);
  readonly activeHeadingId = signal('');
  readonly isNavOpen = this.guidesState.isNavOpen;

  readonly navStateLabel = computed(() =>
    this.isNavOpen() ? 'Cerrar navegación' : 'Abrir navegación'
  );

  constructor() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        const url = this.router.url;
        const slug = url.split('/').pop() ?? 'first-step';
        this.activeSlug.set(slug);
        // Usamos setTimeout para asegurar que el DOM se haya actualizado tras la navegación
        setTimeout(() => this.scanHeadings(), 0);
      });

    // Manejar la carga inicial
    afterNextRender(() => {
      this.scanHeadings();
    });
  }

  toggleNav(): void {
    this.isNavOpen.update(value => !value);
  }

  closeNav(): void {
    this.isNavOpen.set(false);
  }

  scanHeadings(): void {
    const headings = Array.from(
      document.querySelectorAll('.guides-shell__content h2, .guides-shell__content h3')
    );

    const items: TocItem[] = headings.map(el => {
      const level = el.tagName === 'H2' ? (2 as const) : (3 as const);
      const id = el.id || this.slugify(el.textContent ?? '');
      if (!el.id && id) {
        el.id = id;
      }
      return { id, label: el.textContent ?? '', level };
    });

    this.tocItems.set(items);

    if (this.observer) {
      this.observer.disconnect();
    }

    if (headings.length === 0) {
      return;
    }

    this.observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          this.activeHeadingId.set(visible[0].target.id);
        }
      },
      {
        rootMargin: '-10% 0px -10% 0px',
        threshold: 0,
      }
    );

    headings.forEach(element => this.observer?.observe(element));

    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }

  private slugify(value: string): string {
    return value
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }
}
