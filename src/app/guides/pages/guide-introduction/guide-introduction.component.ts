import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guide-introduction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide-introduction.component.html',
  styleUrl: './guide-introduction.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuideIntroductionComponent {}
