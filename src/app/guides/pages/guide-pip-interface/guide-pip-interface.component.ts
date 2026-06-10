import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { LanguageService } from '../../../core/i18n/language.service';
import { SeoService } from '../../../core/seo/seo.service';

@Component({
  selector: 'app-guide-pip-interface',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './guide-pip-interface.component.html',
  styleUrl: './guide-pip-interface.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuidePipInterfaceComponent {
  private langService = inject(LanguageService);
  private seo = inject(SeoService);
  readonly page = computed(() => this.langService.translations().guides.pipInterface);

  constructor() {
    this.seo.setPageMeta({
      title: 'Pip Interface — Legacy Workflows with uv',
      description:
        'Use uv as a drop-in replacement for pip, venv, pip-compile, and pip-sync. Fine-grained control over virtual environments and package management.',
      slug: '/guides/pip-interface',
    });
  }
}
