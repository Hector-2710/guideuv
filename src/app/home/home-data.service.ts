import { Injectable, signal } from '@angular/core';

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
  readonly data = signal<HomeData>({
    title: 'UV: Ultra-fast Python Package Manager',
    subtitle:
      'An extremely fast Python package and project manager, written in Rust',
    speedImage: '/install-cold.png',
    description:
      'uv is an all-in-one tool designed by Astral (the creators of Ruff). It is built to be a single, high-performance replacement for the entire Python ecosystem: pip, pip-tools, pipx, poetry, pyenv, twine, and virtualenv.',
    features: [
      {
        icon: '🚀',
        title: 'Performance',
        description: '10-100x faster than pip and pip-tools.',
      },
      {
        icon: '📦',
        title: 'Universal',
        description: 'Replaces multiple tools with a single binary.',
      },
      {
        icon: '🛠️',
        title: 'Rust-powered',
        description: 'Focused on reliability and extreme speed.',
      },
      {
        icon: '🐍',
        title: 'Python Management',
        description: 'Installs and manages Python versions automatically.',
      },
    ],
    installCommands: [
      {
        platform: 'Linux / MacOS',
        command: 'curl -LsSf https://astral.sh/uv/install.sh | sh',
      },
      {
        platform: 'Windows',
        command:
          'powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"',
      },
    ],
    startCode: 'uv init example',
    startDescription:
      'Unlike traditional managers, uv init sets up a modern, standardized Python environment instantly. Here is the generated structure:',
    projectFiles: [
      {
        name: 'pyproject.toml',
        description:
          'The heart of your project. It uses the latest standards (PEP 621) to manage metadata and dependencies.',
      },
      {
        name: '.python-version',
        description:
          "A specific file that tells uv exactly which Python version to use for this project (it will even download it for you if it's missing).",
      },
      {
        name: 'hello.py',
        description:
          'A boilerplate "Hello World" script so you can test your environment immediately.',
      },
      {
        name: '.gitignore',
        description:
          'Automatically configured to exclude environment folders and cache files from your repository.',
      },
      {
        name: 'README.md',
        description: 'A basic documentation file ready for your content.',
      },
    ],
    terminalLines: [
      '$ uv init my-project',
      'Initialized project `my-project` at /home/user/my-project',
      '$ cd my-project && uv add requests pandas',
      'Resolved 8 packages in 12ms',
      'Installed 8 packages in 45ms',
      ' + requests==2.32.3',
      ' + pandas==2.2.3',
      ' + certifi==2024.8.30',
      ' + charset-normalizer==3.4.0',
      ' + idna==3.10',
      ' + numpy==2.1.3',
      ' + python-dateutil==2.9.0',
      ' + urllib3==2.2.3',
    ],
    ctaButtons: [
      {
        label: 'Get Started',
        url: '/guides',
        variant: 'primary',
      },
      {
        label: 'View on GitHub',
        url: 'https://github.com/astral-sh/uv',
        variant: 'secondary',
      },
    ],
  });
}
