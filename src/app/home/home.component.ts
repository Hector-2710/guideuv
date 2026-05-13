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

  /** Copy button feedback for installation section */
  copyInstallFeedback = signal('');

  /** Copy button feedback for start section */
  copyStartFeedback = signal('');

  /** Copies text to clipboard for installation section */
  copyInstall(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.copyInstallFeedback.set('Copied!');
      setTimeout(() => this.copyInstallFeedback.set(''), 2000);
    });
  }

  /** Copies text to clipboard for start section */
  copyStart(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.copyStartFeedback.set('Copied!');
      setTimeout(() => this.copyStartFeedback.set(''), 2000);
    });
  }

  /** Get the active install command based on selected platform */
  getActiveCommand(): string {
    const commands = this.data().installCommands;
    return this.activePlatform() === 'linux' ? commands[0].command : commands[1].command;
  }
}
