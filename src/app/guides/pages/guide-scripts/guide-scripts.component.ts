import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guide-scripts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide-scripts.component.html',
  styleUrl: './guide-scripts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuideScriptsComponent {}
