import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { LanguageService } from '../../../core/i18n/language.service';

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
  readonly page = computed(() => this.langService.translations().guides.pipInterface);
}
