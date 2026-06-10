import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { LanguageService } from '../../../core/i18n/language.service';
import { SeoService } from '../../../core/seo/seo.service';

@Component({
  selector: 'app-guide-scripts',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './guide-scripts.component.html',
  styleUrl: './guide-scripts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuideScriptsComponent {
  private langService = inject(LanguageService);
  private seo = inject(SeoService);
  readonly page = computed(() => this.langService.translations().guides.scripts);

  constructor() {
    this.seo.setPageMeta({
      title: 'Scripts — Run Python Scripts with uv',
      description:
        'Run standalone Python scripts with uv. Automatic dependency management, inline metadata, and temporary environments for hassle-free script execution.',
      slug: '/guides/scripts',
    });
  }
}
