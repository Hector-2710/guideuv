import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

export interface TocItem {
  id: string;
  label: string;
  level: 2 | 3;
}

@Component({
  selector: 'app-guides-toc',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './guides-toc.component.html',
  styleUrl: './guides-toc.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuidesTocComponent {
  items = input<ReadonlyArray<TocItem>>([]);
  activeId = input('');
}
