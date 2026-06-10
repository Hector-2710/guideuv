import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { LanguageService } from '../../../core/i18n/language.service';
import { SeoService } from '../../../core/seo/seo.service';

@Component({
  selector: 'app-guide-utility',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './guide-utility.component.html',
  styleUrl: './guide-utility.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuideUtilityComponent {
  private langService = inject(LanguageService);
  private seo = inject(SeoService);
  readonly page = computed(() => this.langService.translations().guides.utility);

  constructor() {
    this.seo.setPageMeta({
      title: 'Utility — Cache, Storage & Self-Update with uv',
      description:
        'Manage uv\'s cache, storage directories, and self-update. Learn to clean and prune cache, find tool directories, and keep uv up to date.',
      slug: '/guides/utility',
    });
  }
}
