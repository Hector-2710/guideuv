import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guide-package',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide-package.component.html',
  styleUrl: './guide-package.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuidePackageComponent {}
