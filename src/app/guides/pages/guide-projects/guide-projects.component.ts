import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { LanguageService } from '../../../core/i18n/language.service';

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
  readonly page = computed(() => this.langService.translations().guides.projects);
}
