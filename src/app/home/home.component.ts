import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDataService } from './home-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private homeDataService = inject(HomeDataService);
  
  readonly data = this.homeDataService.data;
}