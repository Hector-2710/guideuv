import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { LanguageService } from '../../../core/i18n/language.service';
import { SeoService } from '../../../core/seo/seo.service';

@Component({
  selector: 'app-guide-package',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './guide-package.component.html',
  styleUrl: './guide-package.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuidePackageComponent {
  private langService = inject(LanguageService);
  private seo = inject(SeoService);
  readonly page = computed(() => this.langService.translations().guides.package);

  constructor() {
    this.seo.setPageMeta({
      title: 'Package — Build & Publish with uv',
      description:
        'Build Python packages into wheel and source distributions with uv build, and publish them to PyPI with uv publish. Includes version management.',
      slug: '/guides/package',
    });
  }
}
