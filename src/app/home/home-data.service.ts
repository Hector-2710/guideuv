import { Injectable, computed, inject } from '@angular/core';
import { LanguageService } from '../core/i18n/language.service';

export interface HomeData {
  title: string;
  subtitle: string;
  speedImage: string;
  description: string;
  features: HomeFeature[];
  installCommands: InstallCommand[];
  startCode: string;
  startDescription: string;
  projectFiles: ProjectFile[];
  terminalLines: string[];
  ctaButtons: CtaButton[];
}

export interface HomeFeature {
  icon: string;
  title: string;
  description: string;
}

export interface InstallCommand {
  platform: string;
  command: string;
}

export interface ProjectFile {
  name: string;
  description: string;
  isDirectory?: boolean;
}

export interface CtaButton {
  label: string;
  url: string;
  variant: 'primary' | 'secondary';
}

@Injectable({
  providedIn: 'root',
})
export class HomeDataService {
  private langService = inject(LanguageService);

  readonly data = computed<HomeData>(() => {
    const t = (key: string) => this.langService.t(key);
    const homeData = this.langService.translations().home;
    return {
      title: homeData.title,
      subtitle: homeData.subtitle,
      speedImage: '/install-cold.png',
      description: homeData.description,
      features: homeData.features,
      installCommands: [
        {
          platform: homeData.installTabLinux,
          command: 'curl -LsSf https://astral.sh/uv/install.sh | sh',
        },
        {
          platform: homeData.installTabWindows,
          command:
            'powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"',
        },
      ],
      startCode: 'uv init example',
      startDescription: homeData.startDescription,
      projectFiles: homeData.projectFiles,
      terminalLines: [
        '$ uv init example',
        'Initialized project `example` at /home/user/example',
        '$ cd example',
        '$ uv add ruff',
        'Created virtualenv at: venv',
        'Resolved 2 packages in 170ms',
        '   Built example @ file:///home/user/example',
        'Prepared 2 packages in 1ms',
        ' + example==0.1.0',
        ' + ruff==0.5.4',
        '$ uv run ruff check',
        'All checks passed!',
        '$ uv lock',
        'Resolved 2 packages in 0.33ms',
        '$ uv sync',
        'Resolved 2 packages in 0.70ms',
        'Checked 1 packages in 0.02ms',
      ],
      ctaButtons: homeData.ctaButtons,
    };
  });
}
