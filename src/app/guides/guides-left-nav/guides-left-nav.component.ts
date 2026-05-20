import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
  computed
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GuidesSection } from '../guides-data';

@Component({
  selector: 'app-guides-left-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './guides-left-nav.component.html',
  styleUrl: './guides-left-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuidesLeftNavComponent {
  sections = input<ReadonlyArray<GuidesSection>>([]);
  activeSlug = input('');
  isOpen = input(false);
  toggle = output<void>();

  readonly activeSectionIndex = computed(() =>
    this.sections().findIndex(section =>
      section.items.some(item => item.slug === this.activeSlug())
    )
  );

  readonly hasSections = computed(() => this.sections().length > 0);
  readonly navLabel = signal('Guides');
  readonly toggleLabel = computed(() =>
    this.isOpen() ? 'Close menu' : 'Open menu'
  );

  onToggle(): void {
    this.toggle.emit();
  }
}
