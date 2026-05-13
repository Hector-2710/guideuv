import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guide-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide-projects.component.html',
  styleUrl: './guide-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuideProjectsComponent {}
