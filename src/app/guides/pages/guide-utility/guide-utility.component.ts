import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { LanguageService } from '../../../core/i18n/language.service';

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
  readonly page = computed(() => this.langService.translations().guides.utility);
}
