import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { LanguageService } from '../../../core/i18n/language.service';
import { SeoService } from '../../../core/seo/seo.service';

@Component({
  selector: 'app-guide-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './guide-projects.component.html',
  styleUrl: './guide-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuideProjectsComponent {
  private langService = inject(LanguageService);
  private seo = inject(SeoService);
  readonly page = computed(() => this.langService.translations().guides.projects);

  constructor() {
    this.seo.setPageMeta({
      title: 'Projects — uv Package Manager Guide',
      description:
        'Learn how to create and manage Python projects with uv. Covers uv init, add, remove, sync, run, tree, build, and publish with step-by-step examples.',
      slug: '/guides/projects',
    });
  }
}
