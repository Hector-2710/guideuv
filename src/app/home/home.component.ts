import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDataService } from './home-data.service';
import { TerminalMockupComponent } from './components/terminal-mockup/terminal-mockup.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TerminalMockupComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private homeDataService = inject(HomeDataService);

  readonly data = this.homeDataService.data;

  /** Tracks which install platform tab is active */
  activePlatform = signal<'linux' | 'windows'>('linux');

  /** Copy button feedback text */
  copyFeedback = signal('');

  /** Copies text to clipboard and shows feedback */
  copyCommand(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.copyFeedback.set('Copied!');
      setTimeout(() => this.copyFeedback.set(''), 2000);
    });
  }

  /** Get the active install command based on selected platform */
  getActiveCommand(): string {
    const commands = this.data().installCommands;
    return this.activePlatform() === 'linux' ? commands[0].command : commands[1].command;
  }
}
