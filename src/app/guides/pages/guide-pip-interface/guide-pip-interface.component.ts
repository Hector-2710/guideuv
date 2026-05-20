import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guide-pip-interface',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide-pip-interface.component.html',
  styleUrl: './guide-pip-interface.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuidePipInterfaceComponent {}
