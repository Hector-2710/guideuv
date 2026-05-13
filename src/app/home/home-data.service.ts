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
      'In the Python ecosystem, uv is the "new kid on the block" that is rapidly changing how developers manage projects. Created by Astral (the same team behind the Ruff linter), it is an extremely fast Python package installer and resolver written in Rust.',
    features: [
      {
        icon: '🚀',
        title: 'Performance',
        description: '10-100x faster than pip and pip-tools.',
      },
      {
        icon: '📦',
        title: 'Universal',
        description:
          'A single tool to replace pip, pip-tools, pipx, poetry, pyenv, twine, virtualenv, and more.',
      },
      {
        icon: '🛠️',
        title: 'pip-compatible',
        description: 'Includes a pip-compatible interface for a performance boost with a familiar CLI.',
      },
      {
        icon: '💻',
        title: 'Cross-platform',
        description: 'Supports macOS, Linux, and Windows.',
      },
      
      {
        icon: '🐍',
        title: 'Python Management',
        description: 'Installs and manages Python versions automatically.',
      },
      {
        icon: '📜',
        title: 'Script Runner',
        description: 'Runs scripts, with support for inline dependency metadata.',
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
