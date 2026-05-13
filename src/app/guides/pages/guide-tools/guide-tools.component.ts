import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guide-tools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide-tools.component.html',
  styleUrl: './guide-tools.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuideToolsComponent {}
