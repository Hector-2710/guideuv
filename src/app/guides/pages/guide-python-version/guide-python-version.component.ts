import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guide-python-version',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide-python-version.component.html',
  styleUrl: './guide-python-version.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuidePythonVersionComponent {}
