import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { LanguageService } from '../../../core/i18n/language.service';
import { SeoService } from '../../../core/seo/seo.service';

@Component({
  selector: 'app-guide-tools',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './guide-tools.component.html',
  styleUrl: './guide-tools.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuideToolsComponent {
  private langService = inject(LanguageService);
  private seo = inject(SeoService);
  readonly page = computed(() => this.langService.translations().guides.tools);

  constructor() {
    this.seo.setPageMeta({
      title: 'Tools — Install & Run CLI Tools with uv',
      description:
        'Run CLI tools like ruff or black on-demand with uvx, or install them globally with uv tool install. Includes tool management and shell updates.',
      slug: '/guides/tools',
    });
  }
}
