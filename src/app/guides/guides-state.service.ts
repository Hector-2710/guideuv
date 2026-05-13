import { Injectable, signal } from '@angular/core';
import { GUIDES_SECTIONS } from './guides-data';
import { TocItem } from './guides-toc/guides-toc.component';

@Injectable()
export class GuidesStateService {
  readonly sections = signal(GUIDES_SECTIONS);
  readonly activeSlug = signal('first-step');
  readonly tocItems = signal<ReadonlyArray<TocItem>>([]);
  readonly activeHeadingId = signal('');
  readonly isNavOpen = signal(false);
}
