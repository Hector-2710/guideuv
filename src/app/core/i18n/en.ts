import { Translations } from './translations';

export const EN_TRANSLATIONS: Translations = {
  app: {
    title: 'GuideUV — Learn uv Python Package Manager',
    description:
      'GuideUV — Interactive guide for uv, the ultra-fast Python package manager. Learn uv with visual terminal mockups, step-by-step guides, and copy-pasteable commands.',
    langLabel: 'EN',
  },
  navbar: {
    home: 'Home',
    guides: 'Guides',
    about: 'About Us',
    searchPlaceholder: 'Search...',
    searchAria: 'Search the guide',
    mobileMenuAria: 'Navigation menu',
    navAria: 'Main navigation',
    logoAria: 'GuideUV - Home',
    externalLinkAria: ' - Opens in new tab',
    seeAllResults: 'See all results',
  },
  home: {
    title: 'UV: Ultra-fast Python Package Manager',
    subtitle:
      'An extremely fast Python package and project manager, written in Rust',
    description:
      'In the Python ecosystem, uv is the "new kid on the block" that is rapidly changing how developers manage projects. Created by Astral (the same team behind the Ruff linter), it is an extremely fast Python package installer and resolver written in Rust.',
    descriptionSection: 'Description',
    featuresTitle: 'Key Features',
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
        description:
          'Includes a pip-compatible interface for a performance boost with a familiar CLI.',
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
        description:
          'Runs scripts, with support for inline dependency metadata.',
      },
    ],
    installationTitle: 'Installation',
    installTabLinux: 'Linux / MacOS',
    installTabWindows: 'Windows',
    terminalLabel: 'Terminal',
    copyAria: 'Copy command to clipboard',
    copied: 'Copied!',
    startTitle: 'Start',
    startDescription:
      'Unlike traditional managers, uv init sets up a modern, standardized Python environment instantly. Here is the generated structure:',
    projectFilesLabel: 'Project Files',
    projectFiles: [
      {
        name: '.git/',
        description: 'Git repository data. Tracks all changes to your project.',
        isDirectory: true,
      },
      {
        name: '.gitignore',
        description: 'Specifies intentionally untracked files to ignore.',
        isDirectory: false,
      },
      {
        name: '.python-version',
        description:
          'Declares the exact Python version required for this project.',
        isDirectory: false,
      },
      {
        name: 'README.md',
        description:
          'The front page of your project with basic documentation.',
        isDirectory: false,
      },
      {
        name: 'main.py',
        description: 'The entry point of your application.',
        isDirectory: false,
      },
      {
        name: 'pyproject.toml',
        description:
          'The heart of your project. Uses PEP 621 standards for metadata and dependencies.',
        isDirectory: false,
      },
    ],
    ctaButtons: [
      { label: 'Get Started', url: '/guides', variant: 'primary' },
      {
        label: 'View on GitHub',
        url: 'https://github.com/astral-sh/uv',
        variant: 'secondary',
      },
    ],
  },
  about: {
    title: 'About Hector',
    tagline: 'Developer passionate about development tools and Python',
    whatIsTitle: 'What is GuideUV?',
    whatIsText1:
      '<strong>GuideUV</strong> is a website designed to help people understand and learn <strong>UV</strong>, the next-generation Python package manager.',
    whatIsText2:
      "My goal is to simplify the UV learning curve by translating technical documentation into clear, accessible content. Here you'll find step-by-step guides, practical examples, and tips to help you migrate from pip to UV without headaches.",
    whatIsText3:
      'This website is <strong>open source</strong> and built with Angular. Want to see the code or contribute? The link is in the navbar!',
    connectTitle: 'Connect with me',
    ideasTitle: 'More ideas',
    ideas: [
      {
        title: 'Contribute',
        description:
          'Found a bug? Have ideas to improve? Your contribution is welcome! Check the CONTRIBUTING.md file in the repository.',
        icon: 'code',
      },
    ],
    footer: 'Thanks for visiting GuideUV 🚀',
    footerSub: 'Made with ❤️ and ☕',
  },
  guides: {
    badge: 'Guide',
    leftNav: {
      title: 'Guides',
      toggleClose: 'Close menu',
      toggleOpen: 'Open menu',
      empty: 'No guides available.',
      navAria: 'Guide navigation',
    },
    shell: {
      mobileNav: 'Navigation',
      navStateClose: 'Close navigation',
      navStateOpen: 'Open navigation',
    },
    toc: {
      aria: 'Table of contents',
      onThisPage: 'On this page',
      withoutSubtitles: 'without subtitles.',
    },
    sections: [
      { label: 'Introduction', slug: 'introduction' },
      { label: 'Projects', slug: 'projects' },
      { label: 'Python version', slug: 'python-version' },
      { label: 'Package', slug: 'package' },
      { label: 'Scripts', slug: 'scripts' },
      { label: 'Tools', slug: 'tools' },
      { label: 'The pip interface', slug: 'pip-interface' },
      { label: 'Utility', slug: 'utility' },
    ],
    introduction: {
      title: 'Introduction',
      lead:
        'uv covers the entire Python development cycle: from installing the language itself and testing quick scripts, to managing massive projects that need support for multiple platforms and versions of Python.',
      overviewTitle: 'Overview',
      overviewText:
        "uv's interface can be broken down into sections, which are usable independently or together. Each section handles a specific aspect of Python development:",
      features: [
        {
          title: 'Python Version Management',
          description: 'Install and manage multiple Python versions',
          icon: '\u2699',
        },
        {
          title: 'Package Management',
          description: 'Install, update, and remove packages',
          icon: '\uD83D\uDCE6',
        },
        {
          title: 'Project Management',
          description: 'Create and work with Python projects',
          icon: '\uD83D\uDCC1',
        },
        {
          title: 'Tools',
          description: 'Run and install CLI tools',
          icon: '\uD83D\uDCBB',
        },
        {
          title: 'Scripts',
          description: 'Execute standalone Python scripts',
          icon: '\uD83D\uDCC5',
        },
        {
          title: 'Publishing',
          description: 'Build and publish packages',
          icon: '\uD83D\uDCB0',
        },
      ],
    },
    projects: {
      title: 'Projects',
      lead:
        'uv simplifies Python project management by centralizing everything in the standard <code class="code-inline">pyproject.toml</code> file. Forget about manually setting up virtual environments or dealing with outdated requirements files; uv automatically keeps everything synchronized.',
      sections: [
        {
          title: 'Initialize a new project',
          text:
            'Creates the basic structure of a Python project with <code class="code-inline">uv init</code>. Automatically generates essential files: <code class="code-inline">pyproject.toml</code>, <code class="code-inline">main.py</code>, and Git configuration.',
          exampleTitle: 'Example',
        },
        {
          title: 'Add dependencies',
          text:
            'Installs and registers packages in your project with <code class="code-inline">uv add</code>. Automatically adds dependencies to <code class="code-inline">pyproject.toml</code> and installs them in the virtual environment.',
          exampleTitle: 'Example',
        },
        {
          title: 'Remove dependencies',
          text:
            'Uninstalls and removes packages from your project with <code class="code-inline">uv remove</code>. Cleans both the virtual environment and the references in <code class="code-inline">pyproject.toml</code>.',
          exampleTitle: 'Example',
        },
        {
          title: 'Sync environment',
          text:
            'Synchronizes project dependencies with the virtual environment using <code class="code-inline">uv sync</code>. Ensures the environment exactly matches what\'s defined in <code class="code-inline">pyproject.toml</code>.',
          exampleTitle: 'Example',
        },
        {
          title: 'Run commands',
          text:
            'Executes scripts or commands within the project virtual environment with <code class="code-inline">uv run</code>. Automatically activates the environment and runs the command without manual activation.',
          exampleTitle: 'Example',
        },
        {
          title: 'View dependency tree',
          text:
            'Shows the complete dependency tree with <code class="code-inline">uv tree</code>. Displays all direct and indirect dependencies, useful for resolving version conflicts.',
          exampleTitle: 'Example',
        },
      ],
      summary: {
        title: 'Summary',
        text:
          'This guide covers the essential commands for managing Python projects with <strong>uv</strong>. With these tools, you can initialize projects, install and remove dependencies, synchronize environments, run scripts, and visualize dependency trees.',
        whatTitle: 'What this guide helps you with',
        whatItems: [
          'Create and configure new Python projects from scratch',
          'Add and remove packages while keeping <code class="code-inline">pyproject.toml</code> in sync',
          'Ensure your development environment matches production dependencies',
          'Run Python scripts without manually activating virtual environments',
          'Debug dependency conflicts by inspecting the complete dependency tree',
        ],
        howTitle: 'How to use these commands',
        howItems: [
          'Start every new project with <code class="code-inline">uv init</code> to set up the proper structure',
          'Use <code class="code-inline">uv add</code> whenever you need a new package — it handles both installation and registration',
          'Run <code class="code-inline">uv sync</code> after pulling changes from git to ensure your environment is up to date',
          'Prefer <code class="code-inline">uv run</code> over activating the environment manually — it\'s faster and safer',
          'Use <code class="code-inline">uv tree</code> when you encounter version conflicts or want to audit your dependencies',
        ],
        learnTitle: 'Learn more',
        learnItems: [
          '<code class="code-inline">uv --help</code> — Shows all available commands',
          '<a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer" class="summary-link">Official Documentation</a> — Complete reference and guides',
        ],
        officialDocs: 'Official Documentation',
      },
    },
    pythonVersion: {
      title: 'Python version',
      lead:
        'If Python is already installed on your system, uv will detect and use it without configuration. However, uv can also install and manage Python versions. uv automatically installs missing Python versions as needed — you do not need to install Python to get started.',
      sections: [
        {
          title: 'Install Python',
          text:
            'Install Python versions managed by uv. You do not need Python installed beforehand — uv handles everything.',
          exampleTitle: 'Example',
        },
        {
          title: 'List Python versions',
          text:
            'View available Python versions installed by uv and those available for installation.',
          exampleTitle: 'Example',
        },
        {
          title: 'Find Python version',
          text:
            'Find an installed Python version matching a specific requirement.',
          exampleTitle: 'Example',
        },
        {
          title: 'Uninstall Python version',
          text:
            'Uninstall a Python version that was installed by uv.',
          exampleTitle: 'Example',
        },
      ],
      summary: {
        title: 'Summary',
        text:
          'This guide covers the commands for managing Python versions with <strong>uv</strong>. You can install multiple Python versions, switch between them, and clean up versions you no longer need.',
        whatTitle: 'What this guide helps you with',
        whatItems: [
          'Install Python versions without needing Python pre-installed',
          'List all installed and available Python versions',
          'Find the path to a specific Python version',
          'Uninstall Python versions that are no longer needed',
        ],
        howTitle: 'How to use these commands',
        howItems: [
          'Run <code class="code-inline">uv python install</code> without arguments to install the latest version',
          'Specify a version like <code class="code-inline">uv python install 3.12</code> for a specific release',
          'Use <code class="code-inline">uv python find</code> to locate a specific version for your projects',
          'Check <code class="code-inline">uv python list</code> regularly to see what versions you have available',
        ],
        learnTitle: 'Learn more',
        learnItems: [
          '<code class="code-inline">uv python --help</code> — Shows all Python-related commands',
          '<a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer" class="summary-link">Official Documentation</a> — Complete reference and guides',
        ],
        officialDocs: 'Official Documentation',
      },
    },
    package: {
      title: 'Package',
      lead:
        'uv supports building Python packages into source and binary distributions via <code class="code-inline">uv build</code> and uploading them to a registry with <code class="code-inline">uv publish</code>.',
      sections: [
        {
          title: 'Build package',
          text:
            'Build your Python project and create distribution artifacts in the <code class="code-inline">dist/</code> directory.',
          exampleTitle: 'Example',
        },
        {
          title: 'Publish package',
          text:
            'Upload your built packages to a registry (PyPI by default or a custom index).',
          exampleTitle: 'Example',
        },
        {
          title: 'Update version',
          text:
            'Update the version of your project in <code class="code-inline">pyproject.toml</code>.',
          exampleTitle: 'Example',
        },
      ],
      summary: {
        title: 'Summary',
        text:
          'This guide covers the package building and publishing commands for <strong>uv</strong>. You can build your Python project into distribution artifacts and publish them to PyPI or a custom registry.',
        whatTitle: 'What this guide helps you with',
        whatItems: [
          'Build Python packages into wheel and source distributions',
          'Publish packages to PyPI or a custom registry',
          'Manage project versions directly from the command line',
          'Bump versions using semantic versioning (major, minor, patch)',
        ],
        howTitle: 'How to use these commands',
        howItems: [
          'Run <code class="code-inline">uv build</code> to create distribution artifacts in the <code class="code-inline">dist/</code> directory',
          'Run <code class="code-inline">uv publish</code> to upload your packages to PyPI',
          'Use <code class="code-inline">uv version 1.0.0</code> to set a specific version',
          'Use <code class="code-inline">uv version --bump patch</code> to increment the patch version',
          'Use <code class="code-inline">uv version --bump minor</code> or <code class="code-inline">--bump major</code> for larger bumps',
        ],
        learnTitle: 'Learn more',
        learnItems: [
          '<code class="code-inline">uv build --help</code> — Shows all build options',
          '<code class="code-inline">uv publish --help</code> — Shows all publish options',
          '<a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer" class="summary-link">Official Documentation</a> — Complete reference and guides',
        ],
        officialDocs: 'Official Documentation',
      },
    },
    scripts: {
      title: 'Scripts',
      lead:
        'A Python script is a file intended for standalone execution, e.g., with <code class="code-inline">python script.py</code>. Using uv to execute scripts ensures that script dependencies are managed without manually managing environments.',
      sections: [
        {
          title: 'Run a script',
          text:
            'Execute a Python script with uv. Dependencies are automatically managed in a temporary environment.',
          exampleTitle: 'Example',
        },
        {
          title: 'Run with dependencies',
          text:
            'Run a script with additional packages installed in a temporary environment.',
          exampleTitle: 'Example',
        },
        {
          title: 'Add script dependency',
          text:
            'Add a dependency to a script that uses inline metadata. Updates the script\'s dependency declarations.',
          exampleTitle: 'Example',
        },
        {
          title: 'Remove script dependency',
          text:
            'Remove a dependency from a script that uses inline metadata.',
          exampleTitle: 'Example',
        },
      ],
      summary: {
        title: 'Summary',
        text:
          'This guide covers the scripts interface for <strong>uv</strong>. Scripts are Python files intended for standalone execution, and uv manages their dependencies automatically without requiring a full project setup.',
        whatTitle: 'What this guide helps you with',
        whatItems: [
          'Run Python scripts with automatic dependency management',
          'Run scripts with temporary dependencies without modifying the script',
          'Add and remove dependencies directly in the script using inline metadata',
          'Keep scripts self-contained and portable',
        ],
        howTitle: 'How to use these commands',
        howItems: [
          'Use <code class="code-inline">uv run script.py</code> to execute a script',
          'Use <code class="code-inline">uv run --with package script.py</code> for temporary dependencies',
          'Add <code class="code-inline"># /// script</code> metadata to your script for persistent dependencies',
          'Use <code class="code-inline">uv add --script package script.py</code> to add dependencies to the script',
        ],
        learnTitle: 'Learn more',
        learnItems: [
          '<code class="code-inline">uv run --help</code> — Shows all run options',
          '<a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer" class="summary-link">Official Documentation</a> — Complete reference and guides',
        ],
        officialDocs: 'Official Documentation',
      },
    },
    tools: {
      title: 'Tools',
      lead:
        'Running and installing tools published to Python package indexes, e.g., <code class="code-inline">ruff</code> or <code class="code-inline">black</code>.',
      sections: [
        {
          title: 'Run tool on demand',
          text:
            'Use <code class="code-inline">uvx</code> to run a tool in a temporary environment without installing it. Perfect for one-off commands.',
          exampleTitle: 'Example',
        },
        {
          title: 'Run installed tool',
          text:
            'Run a tool that has been installed with <code class="code-inline">uv tool install</code>.',
          exampleTitle: 'Example',
        },
        {
          title: 'Install tool',
          text:
            'Install a tool user-wide for persistent access across your system.',
          exampleTitle: 'Example',
        },
        {
          title: 'Uninstall tool',
          text:
            'Uninstall a tool that was installed with <code class="code-inline">uv tool install</code>.',
          exampleTitle: 'Example',
        },
        {
          title: 'List tools',
          text:
            'List all tools installed user-wide.',
          exampleTitle: 'Example',
        },
        {
          title: 'Update shell',
          text:
            'Update the shell to include tool executables in your PATH. Run this after installing tools.',
          exampleTitle: 'Example',
        },
      ],
      summary: {
        title: 'Summary',
        text:
          'This guide covers the tools interface for <strong>uv</strong>. You can run tools on-demand without installation or install them globally for persistent access across your system.',
        whatTitle: 'What this guide helps you with',
        whatItems: [
          'Run tools like ruff, black, or httpie without installing them',
          'Install tools globally for persistent command-line access',
          'List and manage installed tools',
          'Update your shell PATH to use installed tools directly',
        ],
        howTitle: 'How to use these commands',
        howItems: [
          'Use <code class="code-inline">uvx</code> for one-off commands — no installation needed',
          'Use <code class="code-inline">uv tool install</code> for tools you use frequently',
          'Run <code class="code-inline">uv tool update-shell</code> after installing tools to update your PATH',
          'Use <code class="code-inline">uv tool list</code> to see what tools are installed',
          'Use <code class="code-inline">uv tool run</code> to execute installed tools',
        ],
        learnTitle: 'Learn more',
        learnItems: [
          '<code class="code-inline">uvx --help</code> — Shows all uvx options',
          '<code class="code-inline">uv tool --help</code> — Shows all tool commands',
          '<a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer" class="summary-link">Official Documentation</a> — Complete reference and guides',
        ],
        officialDocs: 'Official Documentation',
      },
    },
    pipInterface: {
      title: 'The pip interface',
      lead:
        'Manually managing environments and packages — intended to be used in legacy workflows or cases where the high-level commands do not provide enough control.',
      sections: [
        {
          title: 'Create virtual environment',
          text:
            'Create a new virtual environment. Replaces <code class="code-inline">venv</code> and <code class="code-inline">virtualenv</code>.',
          exampleTitle: 'Example',
        },
        {
          title: 'Install packages',
          text:
            'Install packages into the current environment. Replaces <code class="code-inline">pip install</code>.',
          exampleTitle: 'Example',
        },
        {
          title: 'Show package info',
          text:
            'Show details about an installed package. Replaces <code class="code-inline">pip show</code>.',
          exampleTitle: 'Example',
        },
        {
          title: 'List packages',
          text:
            'List all installed packages in the current environment. Replaces <code class="code-inline">pip list</code>.',
          exampleTitle: 'Example',
        },
        {
          title: 'Freeze packages',
          text:
            'List installed packages and their versions in a format suitable for requirements files.',
          exampleTitle: 'Example',
        },
        {
          title: 'Check packages',
          text:
            'Check that the current environment has compatible packages and no conflicts.',
          exampleTitle: 'Example',
        },
        {
          title: 'Uninstall packages',
          text:
            'Uninstall packages from the current environment. Replaces <code class="code-inline">pip uninstall</code>.',
          exampleTitle: 'Example',
        },
        {
          title: 'Dependency tree',
          text:
            'View the dependency tree for the current environment. Replaces <code class="code-inline">pipdeptree</code>.',
          exampleTitle: 'Example',
        },
        {
          title: 'Compile requirements',
          text:
            'Compile requirements into a lockfile. Replaces <code class="code-inline">pip-compile</code>.',
          exampleTitle: 'Example',
        },
        {
          title: 'Sync environment',
          text:
            'Sync an environment with a lockfile. Replaces <code class="code-inline">pip-sync</code>.',
          exampleTitle: 'Example',
        },
      ],
      summary: {
        title: 'Summary',
        text:
          'This guide covers the low-level pip-like interface for <strong>uv</strong>. These commands give you fine-grained control over virtual environments and package management, useful for legacy workflows or when you need more control than the high-level commands provide.',
        whatTitle: 'What this guide helps you with',
        whatItems: [
          'Create and manage virtual environments manually',
          'Install, list, and uninstall packages in a specific environment',
          'View package details and dependency trees',
          'Generate lockfiles and sync environments from them',
          'Check for package conflicts and compatibility issues',
        ],
        howTitle: 'How to use these commands',
        howItems: [
          'Start with <code class="code-inline">uv venv</code> to create a virtual environment',
          'Use <code class="code-inline">uv pip install</code> to add packages to that environment',
          'Use <code class="code-inline">uv pip compile</code> to generate a lockfile from requirements',
          'Use <code class="code-inline">uv pip sync</code> to ensure your environment matches the lockfile',
          'Use <code class="code-inline">uv pip check</code> to verify there are no conflicts',
        ],
        learnTitle: 'Learn more',
        learnItems: [
          '<code class="code-inline">uv pip --help</code> — Shows all pip-related commands',
          '<a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer" class="summary-link">Official Documentation</a> — Complete reference and guides',
        ],
        officialDocs: 'Official Documentation',
      },
    },
    utility: {
      title: 'Utility',
      lead:
        'Managing and inspecting uv\'s state, such as the cache, storage directories, or performing a self-update.',
      sections: [
        {
          title: 'Clean cache',
          text: 'Remove cache entries to free up disk space.',
          exampleTitle: 'Example',
        },
        {
          title: 'Prune cache',
          text: 'Remove outdated cache entries that are no longer needed.',
          exampleTitle: 'Example',
        },
        {
          title: 'Cache directory',
          text: "Show the path to uv's cache directory.",
          exampleTitle: 'Example',
        },
        {
          title: 'Tool directory',
          text: "Show the path to uv's tool directory where installed tools are stored.",
          exampleTitle: 'Example',
        },
        {
          title: 'Python directory',
          text: "Show the path to uv's Python versions directory.",
          exampleTitle: 'Example',
        },
        {
          title: 'Self-update',
          text:
            'Update uv to the latest version to get new features and bug fixes.',
          exampleTitle: 'Example',
        },
      ],
      summary: {
        title: 'Summary',
        text:
          'This guide covers the utility commands for <strong>uv</strong>. These commands help you manage uv\'s internal state, clean up disk space, and keep uv itself up to date.',
        whatTitle: 'What this guide helps you with',
        whatItems: [
          'Clean up cache to free up disk space',
          'Prune outdated cache entries automatically',
          'Find the paths to uv\'s storage directories',
          'Update uv to the latest version',
        ],
        howTitle: 'How to use these commands',
        howItems: [
          'Use <code class="code-inline">uv cache clean</code> to remove all cache entries',
          'Use <code class="code-inline">uv cache clean --older 30d</code> to remove old entries',
          'Use <code class="code-inline">uv cache prune</code> to remove outdated entries automatically',
          'Use <code class="code-inline">uv self update</code> to get the latest uv version',
          'Use <code class="code-inline">uv cache dir</code>, <code class="code-inline">uv tool dir</code>, and <code class="code-inline">uv python dir</code> to find storage locations',
        ],
        learnTitle: 'Learn more',
        learnItems: [
          '<code class="code-inline">uv cache --help</code> — Shows all cache commands',
          '<code class="code-inline">uv self --help</code> — Shows self-update options',
          '<a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer" class="summary-link">Official Documentation</a> — Complete reference and guides',
        ],
        officialDocs: 'Official Documentation',
      },
    },
  },
  search: {
    modalAria: 'Search results',
    title: 'Results for',
    closeAria: 'Close',
    emptyText: 'No results found for your search.',
    emptyHint: 'Try different keywords.',
    page: 'Page',
    of: 'of',
    results: 'results',
    previous: 'Previous',
    next: 'Next',
    resultAria: 'Search result',
  },
  footer: {
    description:
      'GuideUV — The modern guide for uv, the fast Python package manager.',
    quickLinks: 'Quick Links',
    connect: 'Connect',
    copyright: 'All rights reserved.',
    logoAria: 'GuideUV — Home',
    navAria: 'Footer navigation',
    home: 'Home',
    guides: 'Guides',
    about: 'About Us',
    socialGitHub: 'GitHub',
    socialX: 'X (Twitter)',
    socialUvDocs: 'UV Docs',
  },
};
