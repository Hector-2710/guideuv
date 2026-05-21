import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
  computed,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { LanguageService } from '../../core/i18n/language.service';
import { GuidesSection } from '../guides-data';

@Component({
  selector: 'app-guides-left-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './guides-left-nav.component.html',
  styleUrl: './guides-left-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuidesLeftNavComponent {
  private langService = inject(LanguageService);

  sections = input<ReadonlyArray<GuidesSection>>([]);
  activeSlug = input('');
  isOpen = input(false);
  toggle = output<void>();

  readonly activeSectionIndex = computed(() =>
    this.sections().findIndex(section =>
      section.items.some(item => item.slug === this.activeSlug())
    )
  );

  readonly hasSections = computed(() => this.sections().length > 0);
  readonly navLabel = computed(() => this.langService.t('guides.leftNav.title'));
  readonly toggleLabel = computed(() =>
    this.isOpen()
      ? this.langService.t('guides.leftNav.toggleClose')
      : this.langService.t('guides.leftNav.toggleOpen')
  );

  /** Returns the translated label for a section by its slug */
  sectionLabel(slug: string): string {
    const section = this.langService.translations().guides.sections.find((s: { slug: string }) => s.slug === slug);
    return section?.label ?? slug;
  }

  onToggle(): void {
    this.toggle.emit();
  }
}
