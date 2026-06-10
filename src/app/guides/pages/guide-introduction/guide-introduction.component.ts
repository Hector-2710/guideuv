import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { LanguageService } from '../../../core/i18n/language.service';
import { SeoService } from '../../../core/seo/seo.service';

@Component({
  selector: 'app-guide-introduction',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './guide-introduction.component.html',
  styleUrl: './guide-introduction.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuideIntroductionComponent {
  private langService = inject(LanguageService);
  private seo = inject(SeoService);
  readonly page = computed(() => this.langService.translations().guides.introduction);

  constructor() {
    this.seo.setPageMeta({
      title: 'Introduction — Guide to uv',
      description:
        'Overview of uv, the ultra-fast Python package manager by Astral. Covers Python version management, package management, project management, tools, scripts, and publishing.',
      slug: '/guides/introduction',
    });
  }

  slugify(text: string): string {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
}
