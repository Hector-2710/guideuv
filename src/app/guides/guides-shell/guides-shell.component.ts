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
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { LanguageService } from '../../core/i18n/language.service';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GuidesLeftNavComponent } from '../guides-left-nav/guides-left-nav.component';
import { GuidesTocComponent, TocItem } from '../guides-toc/guides-toc.component';
import { GuidesStateService } from '../guides-state.service';

@Component({
  selector: 'app-guides-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GuidesLeftNavComponent, GuidesTocComponent, TranslatePipe],
  templateUrl: './guides-shell.component.html',
  styleUrl: './guides-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GuidesStateService],
})
export class GuidesShellComponent {
  private readonly guidesState = inject(GuidesStateService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly langService = inject(LanguageService);
  private observer: IntersectionObserver | null = null;

  readonly sections = this.guidesState.sections;
  readonly activeSlug = signal('');
  readonly tocItems = signal<ReadonlyArray<TocItem>>([]);
  readonly activeHeadingId = signal('');
  readonly isNavOpen = this.guidesState.isNavOpen;

  readonly navStateLabel = computed(() =>
    this.isNavOpen()
      ? this.langService.t('guides.shell.navStateClose')
      : this.langService.t('guides.shell.navStateOpen')
  );

  constructor() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        const url = this.router.url;
        const slug = url.split('/').pop() ?? 'introduction';
        this.activeSlug.set(slug);
      });

    // Manejar la carga inicial y re-escanear tras navegación (solo navegador)
    afterNextRender(() => {
      this.scanHeadings();

      this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe(() => {
          setTimeout(() => this.scanHeadings(), 0);
        });
    });
  }

  toggleNav(): void {
    this.isNavOpen.update(value => !value);
  }

  closeNav(): void {
    this.isNavOpen.set(false);
  }

  scanHeadings(): void {
    if (typeof document === 'undefined') return;
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
          const lastVisible = visible[visible.length - 1];
          this.activeHeadingId.set(lastVisible.target.id);
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
