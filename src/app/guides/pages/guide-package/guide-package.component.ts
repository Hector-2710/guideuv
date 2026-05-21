import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { LanguageService } from '../../../core/i18n/language.service';

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
  readonly page = computed(() => this.langService.translations().guides.package);
}
