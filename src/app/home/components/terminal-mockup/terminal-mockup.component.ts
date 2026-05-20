import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-terminal-mockup',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './terminal-mockup.component.html',
  styleUrl: './terminal-mockup.component.scss',
})
export class TerminalMockupComponent {
  /** Terminal output lines to display — prompt lines start with `$` */
  lines = input.required<string[]>();

  /** Tab title shown in the mock title bar */
  title = input<string>('uv — terminal');

  /** Check if a line is a shell prompt (starts with `$`) */
  isPromptLine(line: string): boolean {
    return line.startsWith('$ ');
  }

  /** Check if a line displays a package installation */
  isPackageLine(line: string): boolean {
    return line.startsWith(' + ');
  }

  /** Strip the `$ ` prefix from prompt lines */
  stripPrompt(line: string): string {
    return line.replace('$ ', '');
  }
}
