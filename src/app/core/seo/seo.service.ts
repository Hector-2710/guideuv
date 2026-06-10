import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoConfig {
  /** Page title (without " — GuideUV" suffix — the service appends it) */
  title: string;
  /** Meta description (up to ~160 chars) */
  description: string;
  /** The route path, e.g. "/guides/projects" */
  slug: string;
  /** Optional: override the full title (e.g. for the home page) */
  fullTitle?: string;
  /** Optional: custom image for social cards */
  image?: string;
}

/**
 * Centralised SEO service.
 *
 * Call `setPageMeta()` in each page/guide component's `ngOnInit` (or `constructor`)
 * to update the document title, meta description, Open Graph, and Twitter Card tags
 * for that route.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  private readonly siteName = 'GuideUV';
  private readonly defaultImage = 'https://guideuv.dev/uvlogo.png';
  private readonly siteUrl = 'https://guideuv.dev';

  /** Update all SEO-relevant tags for the current page. */
  setPageMeta(config: SeoConfig): void {
    const pageTitle = config.fullTitle ?? `${config.title} — ${this.siteName}`;
    const url = `${this.siteUrl}${config.slug}`;
    const image = config.image ?? this.defaultImage;

    // ── Document title ──
    this.title.setTitle(pageTitle);

    // ── Standard meta ──
    this.meta.updateTag({ name: 'description', content: config.description });

    // ── Open Graph ──
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });

    // ── Twitter Card ──
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    // ── Canonical ──
    this.meta.updateTag({ rel: 'canonical', href: url });
  }
}
