import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guide-utility',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide-utility.component.html',
  styleUrl: './guide-utility.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuideUtilityComponent {}
