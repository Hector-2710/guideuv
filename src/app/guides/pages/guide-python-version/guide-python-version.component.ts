import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { LanguageService } from '../../../core/i18n/language.service';
import { SeoService } from '../../../core/seo/seo.service';

@Component({
  selector: 'app-guide-python-version',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './guide-python-version.component.html',
  styleUrl: './guide-python-version.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuidePythonVersionComponent {
  private langService = inject(LanguageService);
  private seo = inject(SeoService);
  readonly page = computed(() => this.langService.translations().guides.pythonVersion);

  constructor() {
    this.seo.setPageMeta({
      title: 'Python Version Management — uv Guide',
      description:
        'Install, list, find, and uninstall Python versions using uv. No need to have Python pre-installed — uv handles everything automatically.',
      slug: '/guides/python-version',
    });
  }
}
