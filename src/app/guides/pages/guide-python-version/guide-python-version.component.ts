import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { LanguageService } from '../../../core/i18n/language.service';

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
  readonly page = computed(() => this.langService.translations().guides.pythonVersion);
}
