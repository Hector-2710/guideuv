import { Injectable, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../core/i18n/language.service';

export interface SearchResult {
  title: string;
  route: string;
  snippet: string;
  matchedText: string;
}

interface GuideIndex {
  title: string;
  route: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private langService = inject(LanguageService);

  private readonly guideIndexEn: GuideIndex[] = [
    {
      title: 'Introduction',
      route: '/guides/introduction',
      content: `Introduction uv covers the entire Python development cycle from installing the language itself and testing quick scripts to managing massive projects that need support for multiple platforms and versions of Python. Overview uv's interface can be broken down into sections which are usable independently or together. Each section handles a specific aspect of Python development. Python Version Management Install and manage multiple Python versions. Package Management Install update and remove packages. Project Management Create and work with Python projects. Tools Run and install CLI tools. Scripts Execute standalone Python scripts. Publishing Build and publish packages.`,
    },
    {
      title: 'Projects',
      route: '/guides/projects',
      content: `Projects uv simplifies Python project management by centralizing everything in the standard pyproject.toml file. Forget about manually setting up virtual environments or dealing with outdated requirements files. Initialize a new project Creates the basic structure of a Python project with uv init. Automatically generates essential files pyproject.toml main.py and Git configuration. uv init my-project. Add dependencies Installs and registers packages in your project with uv add. Automatically adds dependencies to pyproject.toml and installs them in the virtual environment. uv add requests flask. uv add pytest dev. Remove dependencies Uninstalls and removes packages from your project with uv remove. Cleans both the virtual environment and the references in pyproject.toml. uv remove requests. Sync environment Synchronizes project dependencies with the virtual environment using uv sync. Ensures the environment exactly matches what's defined in pyproject.toml. uv sync. Run commands Executes scripts or commands within the project virtual environment with uv run. Automatically activates the environment and runs the command without manual activation. uv run python main.py. View dependency tree Shows the complete dependency tree with uv tree. Displays all direct and indirect dependencies useful for resolving version conflicts. uv tree.`,
    },
    {
      title: 'Python version',
      route: '/guides/python-version',
      content: `Python version If Python is already installed on your system uv will detect and use it without configuration. However uv can also install and manage Python versions. uv automatically installs missing Python versions as needed. Install Python Install Python versions managed by uv. You don't need Python installed beforehand. uv python install. uv python install 3.12. List Python versions View available Python versions installed by uv and those available for installation. uv python list. Find Python version Find an installed Python version matching a specific requirement. uv python find 3.12. Uninstall Python version Uninstall a Python version that was installed by uv. uv python uninstall 3.11.9.`,
    },
    {
      title: 'Package',
      route: '/guides/package',
      content: `Package uv supports building Python packages into source and binary distributions via uv build and uploading them to a registry with uv publish. Build package Build your Python project and create distribution artifacts in the dist directory. uv build. Publish package Upload your built packages to a registry PyPI by default or a custom index. uv publish. Update version Update the version of your project in pyproject.toml. uv version. uv version bump patch.`,
    },
    {
      title: 'Scripts',
      route: '/guides/scripts',
      content: `Scripts A Python script is a file intended for standalone execution. Using uv to execute scripts ensures that script dependencies are managed without manually managing environments. Run a script Execute a Python script with uv. Dependencies are automatically managed in a temporary environment. uv run script.py. Run with dependencies Run a script with additional packages installed in a temporary environment. uv run with requests script.py. Add script dependency Add a dependency to a script that uses inline metadata. Updates the script's dependency declarations. uv add script requests script.py. Remove script dependency Remove a dependency from a script that uses inline metadata. uv remove script requests script.py.`,
    },
    {
      title: 'Tools',
      route: '/guides/tools',
      content: `Tools Running and installing tools published to Python package indexes like ruff or black. Run tool on demand Use uvx to run a tool in a temporary environment without installing it. Perfect for one-off commands. uvx ruff check. Run installed tool Run a tool that has been installed with uv tool install. uv tool run ruff check. Install tool Install a tool user-wide for persistent access across your system. uv tool install ruff. Uninstall tool Uninstall a tool that was installed with uv tool install. uv tool uninstall ruff. List tools List all tools installed user-wide. uv tool list. Update shell Update the shell to include tool executables in your PATH. Run this after installing tools. uv tool update-shell.`,
    },
    {
      title: 'The pip interface',
      route: '/guides/pip-interface',
      content: `The pip interface Manually managing environments and packages intended to be used in legacy workflows or cases where the high-level commands do not provide enough control. Create virtual environment Create a new virtual environment. Replaces venv and virtualenv. uv venv. uv venv python 3.12. Install packages Install packages into the current environment. Replaces pip install. uv pip install requests flask. uv pip install r requirements.txt. Show package info Show details about an installed package. Replaces pip show. uv pip show requests. List packages List all installed packages in the current environment. Replaces pip list. uv pip list. Freeze packages List installed packages and their versions in a format suitable for requirements files. uv pip freeze. Check packages Check that the current environment has compatible packages and no conflicts. uv pip check. Uninstall packages Uninstall packages from the current environment. Replaces pip uninstall. uv pip uninstall requests. Dependency tree View the dependency tree for the current environment. Replaces pipdeptree. uv pip tree. Compile requirements Compile requirements into a lockfile. Replaces pip-compile. uv pip compile requirements.in o requirements.txt. Sync environment Sync an environment with a lockfile. Replaces pip-sync. uv pip sync requirements.txt.`,
    },
    {
      title: 'Utility',
      route: '/guides/utility',
      content: `Utility Managing and inspecting uv's state such as the cache storage directories or performing a self-update. Clean cache Remove cache entries to free up disk space. uv cache clean. uv cache clean older 30d. Prune cache Remove outdated cache entries that are no longer needed. uv cache prune. uv cache prune dry-run. Cache directory Show the path to uv's cache directory. uv cache dir. Tool directory Show the path to uv's tool directory where installed tools are stored. uv tool dir. Python directory Show the path to uv's Python versions directory. uv python dir. Self-update Update uv to the latest version to get new features and bug fixes. uv self update.`,
    },
  ];

  private readonly guideIndexEs: GuideIndex[] = [
    {
      title: 'Introducción',
      route: '/guides/introduction',
      content: `Introducción uv cubre todo el ciclo de desarrollo de Python desde instalar el lenguaje y probar scripts rápidos hasta gestionar proyectos masivos. Visión general La interfaz de uv se divide en secciones que se pueden usar de forma independiente o conjunta. Gestión de Versiones de Python Instala y gestiona múltiples versiones de Python. Gestión de Paquetes Instala actualiza y elimina paquetes. Gestión de Proyectos Crea y trabaja con proyectos Python. Herramientas Ejecuta e instala herramientas CLI. Scripts Ejecuta scripts Python independientes. Publicación Construye y publica paquetes.`,
    },
    {
      title: 'Proyectos',
      route: '/guides/projects',
      content: `Proyectos uv simplifica la gestión de proyectos Python centralizando todo en el archivo pyproject.toml. Olvídate de configurar entornos virtuales manualmente. Inicializar un nuevo proyecto Crea la estructura básica de un proyecto Python con uv init. Genera automáticamente pyproject.toml main.py y configuración de Git. uv init my-project. Agregar dependencias Instala y registra paquetes con uv add. Añade dependencias a pyproject.toml. uv add requests flask. Eliminar dependencias Desinstala y elimina paquetes con uv remove. Limpia el entorno virtual y las referencias en pyproject.toml. uv remove requests. Sincronizar entorno Sincroniza las dependencias con el entorno virtual usando uv sync. uv sync. Ejecutar comandos Ejecuta scripts con uv run. Activa el entorno automáticamente. uv run python main.py. Ver árbol de dependencias Muestra el árbol completo de dependencias con uv tree. uv tree.`,
    },
    {
      title: 'Versión de Python',
      route: '/guides/python-version',
      content: `Versión de Python Si Python ya está instalado uv lo detectará y usará sin configuración. uv también puede instalar y gestionar versiones de Python. Instalar Python Instala versiones de Python gestionadas por uv. No necesitas tener Python instalado previamente. uv python install. uv python install 3.12. Listar versiones de Python Ve las versiones instaladas y disponibles. uv python list. Buscar versión de Python Encuentra una versión instalada que coincida con un requisito. uv python find 3.12. Desinstalar versión de Python Desinstala una versión instalada por uv. uv python uninstall 3.11.9.`,
    },
    {
      title: 'Paquete',
      route: '/guides/package',
      content: `Paquete uv soporta la construcción de paquetes Python en distribuciones fuente y binarias mediante uv build y su subida a un registro con uv publish. Construir paquete Construye tu proyecto y crea artefactos en el directorio dist. uv build. Publicar paquete Sube tus paquetes a PyPI o un registro personalizado. uv publish. Actualizar versión Actualiza la versión del proyecto en pyproject.toml. uv version. uv version bump patch.`,
    },
    {
      title: 'Scripts',
      route: '/guides/scripts',
      content: `Scripts Un script Python es un archivo para ejecución independiente. Usar uv para ejecutar scripts asegura que las dependencias se gestionen automáticamente. Ejecutar un script Ejecuta un script Python con uv. Las dependencias se gestionan en un entorno temporal. uv run script.py. Ejecutar con dependencias Ejecuta un script con paquetes adicionales en un entorno temporal. uv run with requests script.py. Agregar dependencia al script Añade una dependencia a un script con metadatos en línea. uv add script requests script.py. Eliminar dependencia del script Elimina una dependencia de un script. uv remove script requests script.py.`,
    },
    {
      title: 'Herramientas',
      route: '/guides/tools',
      content: `Herramientas Ejecutar e instalar herramientas publicadas en índices de paquetes Python como ruff o black. Ejecutar herramienta bajo demanda Usa uvx para ejecutar una herramienta en un entorno temporal sin instalarla. uvx ruff check. Ejecutar herramienta instalada Ejecuta una herramienta instalada con uv tool install. uv tool run ruff check. Instalar herramienta Instala una herramienta a nivel de usuario. uv tool install ruff. Desinstalar herramienta Desinstala una herramienta. uv tool uninstall ruff. Listar herramientas Lista todas las herramientas instaladas. uv tool list. Actualizar shell Actualiza el shell para incluir ejecutables en tu PATH. uv tool update-shell.`,
    },
    {
      title: 'La interfaz pip',
      route: '/guides/pip-interface',
      content: `La interfaz pip Gestión manual de entornos y paquetes para flujos de trabajo heredados. Crear entorno virtual Crea un nuevo entorno virtual. Reemplaza venv y virtualenv. uv venv. uv venv python 3.12. Instalar paquetes Instala paquetes en el entorno actual. Reemplaza pip install. uv pip install requests flask. Mostrar información del paquete Muestra detalles de un paquete instalado. Reemplaza pip show. uv pip show requests. Listar paquetes Lista todos los paquetes instalados. Reemplaza pip list. uv pip list. Congelar paquetes Lista paquetes y versiones para archivos de requisitos. uv pip freeze. Verificar paquetes Verifica que no haya conflictos. uv pip check. Desinstalar paquetes Desinstala paquetes del entorno actual. Reemplaza pip uninstall. uv pip uninstall requests. Árbol de dependencias Ve el árbol de dependencias del entorno. Reemplaza pipdeptree. uv pip tree. Compilar requisitos Compila requisitos en un archivo lock. Reemplaza pip-compile. uv pip compile. Sincronizar entorno Sincroniza un entorno con un archivo lock. Reemplaza pip-sync. uv pip sync.`,
    },
    {
      title: 'Utilidades',
      route: '/guides/utility',
      content: `Utilidades Gestión e inspección del estado de uv como la caché directorios de almacenamiento o auto-actualización. Limpiar caché Elimina entradas de caché para liberar espacio. uv cache clean. uv cache clean older 30d. Podar caché Elimina entradas obsoletas. uv cache prune. Directorio de caché Muestra la ruta al directorio de caché. uv cache dir. Directorio de herramientas Muestra la ruta al directorio de herramientas. uv tool dir. Directorio de Python Muestra la ruta al directorio de versiones de Python. uv python dir. Auto-actualización Actualiza uv a la última versión. uv self update.`,
    },
  ];

  private readonly guideIndex = computed<GuideIndex[]>(() =>
    this.langService.currentLang() === 'en' ? this.guideIndexEn : this.guideIndexEs
  );

  search(query: string): SearchResult[] {
    if (!query || query.trim().length === 0) {
      return [];
    }

    const normalizedQuery = query.toLowerCase().trim();
    const index = this.guideIndex();
    const results: SearchResult[] = [];

    for (const guide of index) {
      const normalizedContent = guide.content.toLowerCase();
      const normalizedTitle = guide.title.toLowerCase();

      if (
        normalizedTitle.includes(normalizedQuery) ||
        normalizedContent.includes(normalizedQuery)
      ) {
        let matchedText = '';
        const queryIndex = normalizedContent.indexOf(normalizedQuery);

        if (queryIndex !== -1) {
          const start = Math.max(0, queryIndex - 30);
          const end = Math.min(guide.content.length, queryIndex + normalizedQuery.length + 50);
          matchedText = guide.content.substring(start, end).trim();
        } else if (normalizedTitle.includes(normalizedQuery)) {
          matchedText = guide.content.substring(0, 80).trim();
        }

        results.push({
          title: guide.title,
          route: guide.route,
          snippet: this.createSnippet(guide.content, normalizedQuery),
          matchedText,
        });
      }
    }

    return results;
  }

  private createSnippet(content: string, query: string): string {
    const index = content.toLowerCase().indexOf(query);
    if (index === -1) {
      return content.substring(0, 100) + '...';
    }

    const start = Math.max(0, index - 40);
    const end = Math.min(content.length, index + query.length + 60);
    let snippet = content.substring(start, end).trim();

    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet = snippet + '...';

    return snippet;
  }
}
