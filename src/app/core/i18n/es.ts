import { Translations } from './translations';

export const ES_TRANSLATIONS: Translations = {
  app: {
    title: 'GuideUV — Aprende el gestor de paquetes uv',
    description:
      'GuideUV — Guía interactiva para uv, el gestor de paquetes Python ultrarrápido. Aprende uv con mockups visuales de terminal, guías paso a paso y comandos listos para copiar.',
    langLabel: 'ES',
  },
  navbar: {
    home: 'Inicio',
    guides: 'Guías',
    about: 'Nosotros',
    searchPlaceholder: 'Buscar...',
    searchAria: 'Buscar en la guía',
    mobileMenuAria: 'Menú de navegación',
    navAria: 'Navegación principal',
    logoAria: 'GuideUV - Inicio',
    externalLinkAria: ' - Abre en nueva pestaña',
    seeAllResults: 'Ver todos los resultados',
  },
  home: {
    title: 'UV: Gestor de Paquetes Python Ultrarrápido',
    subtitle:
      'Un gestor de paquetes y proyectos Python extremadamente rápido, escrito en Rust',
    description:
      'En el ecosistema Python, uv es el "nuevo en el bloque" que está cambiando rápidamente la forma en que los desarrolladores gestionan proyectos. Creado por Astral (el mismo equipo detrás del linter Ruff), es un instalador y resolvedor de paquetes Python extremadamente rápido escrito en Rust.',
    descriptionSection: 'Descripción',
    featuresTitle: 'Características principales',
    features: [
      {
        icon: '🚀',
        title: 'Rendimiento',
        description: '10-100x más rápido que pip y pip-tools.',
      },
      {
        icon: '📦',
        title: 'Universal',
        description:
          'Una sola herramienta para reemplazar pip, pip-tools, pipx, poetry, pyenv, twine, virtualenv y más.',
      },
      {
        icon: '🛠️',
        title: 'Compatible con pip',
        description:
          'Incluye una interfaz compatible con pip para mejorar el rendimiento con una CLI familiar.',
      },
      {
        icon: '💻',
        title: 'Multiplataforma',
        description: 'Soporta macOS, Linux y Windows.',
      },
      {
        icon: '🐍',
        title: 'Gestión de Python',
        description: 'Instala y gestiona versiones de Python automáticamente.',
      },
      {
        icon: '📜',
        title: 'Ejecutor de Scripts',
        description:
          'Ejecuta scripts con soporte para metadatos de dependencias en línea.',
      },
    ],
    installationTitle: 'Instalación',
    installTabLinux: 'Linux / MacOS',
    installTabWindows: 'Windows',
    terminalLabel: 'Terminal',
    copyAria: 'Copiar comando al portapapeles',
    copied: '¡Copiado!',
    startTitle: 'Comenzar',
    startDescription:
      'A diferencia de los gestores tradicionales, uv init configura un entorno Python moderno y estandarizado al instante. Esta es la estructura generada:',
    projectFilesLabel: 'Archivos del Proyecto',
    projectFiles: [
      {
        name: '.git/',
        description: 'Datos del repositorio Git. Registra todos los cambios de tu proyecto.',
        isDirectory: true,
      },
      {
        name: '.gitignore',
        description: 'Especifica archivos no rastreados intencionalmente para ignorar.',
        isDirectory: false,
      },
      {
        name: '.python-version',
        description:
          'Declara la versión exacta de Python requerida para este proyecto.',
        isDirectory: false,
      },
      {
        name: 'README.md',
        description:
          'La página principal de tu proyecto con documentación básica.',
        isDirectory: false,
      },
      {
        name: 'main.py',
        description: 'El punto de entrada de tu aplicación.',
        isDirectory: false,
      },
      {
        name: 'pyproject.toml',
        description:
          'El corazón de tu proyecto. Utiliza estándares PEP 621 para metadatos y dependencias.',
        isDirectory: false,
      },
    ],
    ctaButtons: [
      { label: 'Comenzar', url: '/guides', variant: 'primary' },
      {
        label: 'Ver en GitHub',
        url: 'https://github.com/astral-sh/uv',
        variant: 'secondary',
      },
    ],
  },
  about: {
    title: 'Acerca de Hector',
    tagline: 'Desarrollador apasionado por las herramientas de desarrollo y Python',
    whatIsTitle: '¿Qué es GuideUV?',
    whatIsText1:
      '<strong>GuideUV</strong> es un sitio web diseñado para ayudar a las personas a entender y aprender <strong>UV</strong>, el gestor de paquetes Python de nueva generación.',
    whatIsText2:
      'Mi objetivo es simplificar la curva de aprendizaje de UV traduciendo la documentación técnica en contenido claro y accesible. Aquí encontrarás guías paso a paso, ejemplos prácticos y consejos para migrar de pip a UV sin dolores de cabeza.',
    whatIsText3:
      'Este sitio web es <strong>código abierto</strong> y está construido con Angular. ¿Quieres ver el código o contribuir? ¡El enlace está en la barra de navegación!',
    connectTitle: 'Conéctate conmigo',
    ideasTitle: 'Más ideas',
    ideas: [
      {
        title: 'Contribuir',
        description:
          '¿Encontraste un error? ¿Tienes ideas para mejorar? ¡Tu contribución es bienvenida! Revisa el archivo CONTRIBUTING.md en el repositorio.',
        icon: 'code',
      },
    ],
    footer: 'Gracias por visitar GuideUV 🚀',
    footerSub: 'Hecho con ❤️ y ☕',
  },
  guides: {
    badge: 'Guía',
    leftNav: {
      title: 'Guías',
      toggleClose: 'Cerrar menú',
      toggleOpen: 'Abrir menú',
      empty: 'No hay guías disponibles.',
      navAria: 'Navegación de guías',
    },
    shell: {
      mobileNav: 'Navegación',
      navStateClose: 'Cerrar navegación',
      navStateOpen: 'Abrir navegación',
    },
    toc: {
      aria: 'Tabla de contenidos',
      onThisPage: 'En esta página',
      withoutSubtitles: 'sin subtítulos.',
    },
    sections: [
      { label: 'Introducción', slug: 'introduction' },
      { label: 'Proyectos', slug: 'projects' },
      { label: 'Versión de Python', slug: 'python-version' },
      { label: 'Paquete', slug: 'package' },
      { label: 'Scripts', slug: 'scripts' },
      { label: 'Herramientas', slug: 'tools' },
      { label: 'La interfaz pip', slug: 'pip-interface' },
      { label: 'Utilidades', slug: 'utility' },
    ],
    introduction: {
      title: 'Introducción',
      lead:
        'uv cubre todo el ciclo de desarrollo de Python: desde instalar el lenguaje y probar scripts rápidos, hasta gestionar proyectos masivos que necesitan soporte para múltiples plataformas y versiones de Python.',
      overviewTitle: 'Visión general',
      overviewText:
        'La interfaz de uv se divide en secciones, que se pueden usar de forma independiente o conjunta. Cada sección maneja un aspecto específico del desarrollo en Python:',
      features: [
        {
          title: 'Gestión de Versiones de Python',
          description: 'Instala y gestiona múltiples versiones de Python',
          icon: '\u2699',
        },
        {
          title: 'Gestión de Paquetes',
          description: 'Instala, actualiza y elimina paquetes',
          icon: '\uD83D\uDCE6',
        },
        {
          title: 'Gestión de Proyectos',
          description: 'Crea y trabaja con proyectos Python',
          icon: '\uD83D\uDCC1',
        },
        {
          title: 'Herramientas',
          description: 'Ejecuta e instala herramientas CLI',
          icon: '\uD83D\uDCBB',
        },
        {
          title: 'Scripts',
          description: 'Ejecuta scripts Python independientes',
          icon: '\uD83D\uDCC5',
        },
        {
          title: 'Publicación',
          description: 'Construye y publica paquetes',
          icon: '\uD83D\uDCB0',
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      lead:
        'uv simplifica la gestión de proyectos Python centralizando todo en el archivo estándar <code class="code-inline">pyproject.toml</code>. Olvídate de configurar entornos virtuales manualmente o lidiar con archivos de requisitos obsoletos; uv mantiene todo sincronizado automáticamente.',
      sections: [
        {
          title: 'Inicializar un nuevo proyecto',
          text:
            'Crea la estructura básica de un proyecto Python con <code class="code-inline">uv init</code>. Genera automáticamente los archivos esenciales: <code class="code-inline">pyproject.toml</code>, <code class="code-inline">main.py</code> y la configuración de Git.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Agregar dependencias',
          text:
            'Instala y registra paquetes en tu proyecto con <code class="code-inline">uv add</code>. Añade automáticamente las dependencias a <code class="code-inline">pyproject.toml</code> y las instala en el entorno virtual.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Eliminar dependencias',
          text:
            'Desinstala y elimina paquetes de tu proyecto con <code class="code-inline">uv remove</code>. Limpia tanto el entorno virtual como las referencias en <code class="code-inline">pyproject.toml</code>.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Sincronizar entorno',
          text:
            'Sincroniza las dependencias del proyecto con el entorno virtual usando <code class="code-inline">uv sync</code>. Asegura que el entorno coincida exactamente con lo definido en <code class="code-inline">pyproject.toml</code>.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Ejecutar comandos',
          text:
            'Ejecuta scripts o comandos dentro del entorno virtual del proyecto con <code class="code-inline">uv run</code>. Activa automáticamente el entorno y ejecuta el comando sin activación manual.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Ver árbol de dependencias',
          text:
            'Muestra el árbol completo de dependencias con <code class="code-inline">uv tree</code>. Muestra todas las dependencias directas e indirectas, útil para resolver conflictos de versiones.',
          exampleTitle: 'Ejemplo',
        },
      ],
      summary: {
        title: 'Resumen',
        text:
          'Esta guía cubre los comandos esenciales para gestionar proyectos Python con <strong>uv</strong>. Con estas herramientas, puedes inicializar proyectos, instalar y eliminar dependencias, sincronizar entornos, ejecutar scripts y visualizar árboles de dependencias.',
        whatTitle: 'Para qué te ayuda esta guía',
        whatItems: [
          'Crear y configurar nuevos proyectos Python desde cero',
          'Agregar y eliminar paquetes manteniendo <code class="code-inline">pyproject.toml</code> sincronizado',
          'Asegurar que tu entorno de desarrollo coincida con las dependencias de producción',
          'Ejecutar scripts Python sin activar entornos virtuales manualmente',
          'Depurar conflictos de dependencias inspeccionando el árbol completo',
        ],
        howTitle: 'Cómo usar estos comandos',
        howItems: [
          'Comienza cada proyecto nuevo con <code class="code-inline">uv init</code> para establecer la estructura adecuada',
          'Usa <code class="code-inline">uv add</code> cada vez que necesites un nuevo paquete — maneja tanto la instalación como el registro',
          'Ejecuta <code class="code-inline">uv sync</code> después de obtener cambios de git para mantener tu entorno actualizado',
          'Prefiere <code class="code-inline">uv run</code> sobre activar el entorno manualmente — es más rápido y seguro',
          'Usa <code class="code-inline">uv tree</code> cuando encuentres conflictos de versiones o quieras auditar tus dependencias',
        ],
        learnTitle: 'Más información',
        learnItems: [
          '<code class="code-inline">uv --help</code> — Muestra todos los comandos disponibles',
          '<a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer" class="summary-link">Documentación Oficial</a> — Referencia completa y guías',
        ],
        officialDocs: 'Documentación Oficial',
      },
    },
    pythonVersion: {
      title: 'Versión de Python',
      lead:
        'Si Python ya está instalado en tu sistema, uv lo detectará y usará sin configuración. Sin embargo, uv también puede instalar y gestionar versiones de Python. uv instala automáticamente las versiones faltantes según sea necesario — no necesitas instalar Python para empezar.',
      sections: [
        {
          title: 'Instalar Python',
          text:
            'Instala versiones de Python gestionadas por uv. No necesitas tener Python instalado previamente — uv se encarga de todo.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Listar versiones de Python',
          text:
            'Ve las versiones de Python instaladas por uv y aquellas disponibles para instalación.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Buscar versión de Python',
          text:
            'Encuentra una versión instalada de Python que coincida con un requisito específico.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Desinstalar versión de Python',
          text:
            'Desinstala una versión de Python que fue instalada por uv.',
          exampleTitle: 'Ejemplo',
        },
      ],
      summary: {
        title: 'Resumen',
        text:
          'Esta guía cubre los comandos para gestionar versiones de Python con <strong>uv</strong>. Puedes instalar múltiples versiones de Python, cambiar entre ellas y limpiar las versiones que ya no necesites.',
        whatTitle: 'Para qué te ayuda esta guía',
        whatItems: [
          'Instalar versiones de Python sin necesidad de tener Python preinstalado',
          'Listar todas las versiones de Python instaladas y disponibles',
          'Encontrar la ruta a una versión específica de Python',
          'Desinstalar versiones de Python que ya no necesitas',
        ],
        howTitle: 'Cómo usar estos comandos',
        howItems: [
          'Ejecuta <code class="code-inline">uv python install</code> sin argumentos para instalar la última versión',
          'Especifica una versión como <code class="code-inline">uv python install 3.12</code> para un lanzamiento concreto',
          'Usa <code class="code-inline">uv python find</code> para localizar una versión específica para tus proyectos',
          'Revisa <code class="code-inline">uv python list</code> regularmente para ver qué versiones tienes disponibles',
        ],
        learnTitle: 'Más información',
        learnItems: [
          '<code class="code-inline">uv python --help</code> — Muestra todos los comandos relacionados con Python',
          '<a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer" class="summary-link">Documentación Oficial</a> — Referencia completa y guías',
        ],
        officialDocs: 'Documentación Oficial',
      },
    },
    package: {
      title: 'Paquete',
      lead:
        'uv soporta la construcción de paquetes Python en distribuciones fuente y binarias mediante <code class="code-inline">uv build</code> y su subida a un registro con <code class="code-inline">uv publish</code>.',
      sections: [
        {
          title: 'Construir paquete',
          text:
            'Construye tu proyecto Python y crea artefactos de distribución en el directorio <code class="code-inline">dist/</code>.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Publicar paquete',
          text:
            'Sube tus paquetes construidos a un registro (PyPI por defecto o un índice personalizado).',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Actualizar versión',
          text:
            'Actualiza la versión de tu proyecto en <code class="code-inline">pyproject.toml</code>.',
          exampleTitle: 'Ejemplo',
        },
      ],
      summary: {
        title: 'Resumen',
        text:
          'Esta guía cubre los comandos de construcción y publicación de paquetes para <strong>uv</strong>. Puedes construir tu proyecto Python en artefactos de distribución y publicarlos en PyPI o un registro personalizado.',
        whatTitle: 'Para qué te ayuda esta guía',
        whatItems: [
          'Construir paquetes Python en distribuciones wheel y fuente',
          'Publicar paquetes en PyPI o un registro personalizado',
          'Gestionar versiones de proyecto directamente desde la línea de comandos',
          'Incrementar versiones usando versionado semántico (major, minor, patch)',
        ],
        howTitle: 'Cómo usar estos comandos',
        howItems: [
          'Ejecuta <code class="code-inline">uv build</code> para crear artefactos de distribución en el directorio <code class="code-inline">dist/</code>',
          'Ejecuta <code class="code-inline">uv publish</code> para subir tus paquetes a PyPI',
          'Usa <code class="code-inline">uv version 1.0.0</code> para establecer una versión específica',
          'Usa <code class="code-inline">uv version --bump patch</code> para incrementar la versión de parche',
          'Usa <code class="code-inline">uv version --bump minor</code> o <code class="code-inline">--bump major</code> para incrementos mayores',
        ],
        learnTitle: 'Más información',
        learnItems: [
          '<code class="code-inline">uv build --help</code> — Muestra todas las opciones de build',
          '<code class="code-inline">uv publish --help</code> — Muestra todas las opciones de publish',
          '<a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer" class="summary-link">Documentación Oficial</a> — Referencia completa y guías',
        ],
        officialDocs: 'Documentación Oficial',
      },
    },
    scripts: {
      title: 'Scripts',
      lead:
        'Un script Python es un archivo destinado a ejecución independiente, por ejemplo, con <code class="code-inline">python script.py</code>. Usar uv para ejecutar scripts asegura que las dependencias se gestionen sin necesidad de administrar entornos manualmente.',
      sections: [
        {
          title: 'Ejecutar un script',
          text:
            'Ejecuta un script Python con uv. Las dependencias se gestionan automáticamente en un entorno temporal.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Ejecutar con dependencias',
          text:
            'Ejecuta un script con paquetes adicionales instalados en un entorno temporal.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Agregar dependencia al script',
          text:
            'Añade una dependencia a un script que usa metadatos en línea. Actualiza las declaraciones de dependencias del script.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Eliminar dependencia del script',
          text:
            'Elimina una dependencia de un script que usa metadatos en línea.',
          exampleTitle: 'Ejemplo',
        },
      ],
      summary: {
        title: 'Resumen',
        text:
          'Esta guía cubre la interfaz de scripts para <strong>uv</strong>. Los scripts son archivos Python destinados a ejecución independiente, y uv gestiona sus dependencias automáticamente sin requerir una configuración completa de proyecto.',
        whatTitle: 'Para qué te ayuda esta guía',
        whatItems: [
          'Ejecutar scripts Python con gestión automática de dependencias',
          'Ejecutar scripts con dependencias temporales sin modificar el script',
          'Agregar y eliminar dependencias directamente en el script usando metadatos en línea',
          'Mantener los scripts autocontenidos y portátiles',
        ],
        howTitle: 'Cómo usar estos comandos',
        howItems: [
          'Usa <code class="code-inline">uv run script.py</code> para ejecutar un script',
          'Usa <code class="code-inline">uv run --with package script.py</code> para dependencias temporales',
          'Añade metadatos <code class="code-inline"># /// script</code> a tu script para dependencias persistentes',
          'Usa <code class="code-inline">uv add --script package script.py</code> para añadir dependencias al script',
        ],
        learnTitle: 'Más información',
        learnItems: [
          '<code class="code-inline">uv run --help</code> — Muestra todas las opciones de ejecución',
          '<a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer" class="summary-link">Documentación Oficial</a> — Referencia completa y guías',
        ],
        officialDocs: 'Documentación Oficial',
      },
    },
    tools: {
      title: 'Herramientas',
      lead:
        'Ejecutar e instalar herramientas publicadas en índices de paquetes Python, por ejemplo, <code class="code-inline">ruff</code> o <code class="code-inline">black</code>.',
      sections: [
        {
          title: 'Ejecutar herramienta bajo demanda',
          text:
            'Usa <code class="code-inline">uvx</code> para ejecutar una herramienta en un entorno temporal sin instalarla. Perfecto para comandos de uso único.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Ejecutar herramienta instalada',
          text:
            'Ejecuta una herramienta que ha sido instalada con <code class="code-inline">uv tool install</code>.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Instalar herramienta',
          text:
            'Instala una herramienta a nivel de usuario para acceso persistente en todo tu sistema.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Desinstalar herramienta',
          text:
            'Desinstala una herramienta que fue instalada con <code class="code-inline">uv tool install</code>.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Listar herramientas',
          text:
            'Lista todas las herramientas instaladas a nivel de usuario.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Actualizar shell',
          text:
            'Actualiza el shell para incluir los ejecutables de las herramientas en tu PATH. Ejecuta esto después de instalar herramientas.',
          exampleTitle: 'Ejemplo',
        },
      ],
      summary: {
        title: 'Resumen',
        text:
          'Esta guía cubre la interfaz de herramientas para <strong>uv</strong>. Puedes ejecutar herramientas bajo demanda sin instalación o instalarlas globalmente para acceso persistente en todo tu sistema.',
        whatTitle: 'Para qué te ayuda esta guía',
        whatItems: [
          'Ejecutar herramientas como ruff, black o httpie sin instalarlas',
          'Instalar herramientas globalmente para acceso persistente desde la línea de comandos',
          'Listar y gestionar herramientas instaladas',
          'Actualizar tu PATH del shell para usar las herramientas instaladas directamente',
        ],
        howTitle: 'Cómo usar estos comandos',
        howItems: [
          'Usa <code class="code-inline">uvx</code> para comandos de uso único — no necesita instalación',
          'Usa <code class="code-inline">uv tool install</code> para herramientas que usas frecuentemente',
          'Ejecuta <code class="code-inline">uv tool update-shell</code> después de instalar herramientas para actualizar tu PATH',
          'Usa <code class="code-inline">uv tool list</code> para ver qué herramientas están instaladas',
          'Usa <code class="code-inline">uv tool run</code> para ejecutar herramientas instaladas',
        ],
        learnTitle: 'Más información',
        learnItems: [
          '<code class="code-inline">uvx --help</code> — Muestra todas las opciones de uvx',
          '<code class="code-inline">uv tool --help</code> — Muestra todos los comandos de herramientas',
          '<a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer" class="summary-link">Documentación Oficial</a> — Referencia completa y guías',
        ],
        officialDocs: 'Documentación Oficial',
      },
    },
    pipInterface: {
      title: 'La interfaz pip',
      lead:
        'Gestión manual de entornos y paquetes — diseñada para usarse en flujos de trabajo heredados o casos donde los comandos de alto nivel no proporcionan suficiente control.',
      sections: [
        {
          title: 'Crear entorno virtual',
          text:
            'Crea un nuevo entorno virtual. Reemplaza <code class="code-inline">venv</code> y <code class="code-inline">virtualenv</code>.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Instalar paquetes',
          text:
            'Instala paquetes en el entorno actual. Reemplaza <code class="code-inline">pip install</code>.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Mostrar información del paquete',
          text:
            'Muestra detalles sobre un paquete instalado. Reemplaza <code class="code-inline">pip show</code>.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Listar paquetes',
          text:
            'Lista todos los paquetes instalados en el entorno actual. Reemplaza <code class="code-inline">pip list</code>.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Congelar paquetes',
          text:
            'Lista los paquetes instalados y sus versiones en un formato adecuado para archivos de requisitos.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Verificar paquetes',
          text:
            'Verifica que el entorno actual tenga paquetes compatibles y sin conflictos.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Desinstalar paquetes',
          text:
            'Desinstala paquetes del entorno actual. Reemplaza <code class="code-inline">pip uninstall</code>.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Árbol de dependencias',
          text:
            'Ve el árbol de dependencias del entorno actual. Reemplaza <code class="code-inline">pipdeptree</code>.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Compilar requisitos',
          text:
            'Compila requisitos en un archivo lock. Reemplaza <code class="code-inline">pip-compile</code>.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Sincronizar entorno',
          text:
            'Sincroniza un entorno con un archivo lock. Reemplaza <code class="code-inline">pip-sync</code>.',
          exampleTitle: 'Ejemplo',
        },
      ],
      summary: {
        title: 'Resumen',
        text:
          'Esta guía cubre la interfaz de bajo nivel similar a pip para <strong>uv</strong>. Estos comandos te dan control detallado sobre entornos virtuales y gestión de paquetes, útil para flujos de trabajo heredados o cuando necesitas más control del que proporcionan los comandos de alto nivel.',
        whatTitle: 'Para qué te ayuda esta guía',
        whatItems: [
          'Crear y gestionar entornos virtuales manualmente',
          'Instalar, listar y desinstalar paquetes en un entorno específico',
          'Ver detalles de paquetes y árboles de dependencias',
          'Generar archivos lock y sincronizar entornos a partir de ellos',
          'Verificar conflictos de paquetes y problemas de compatibilidad',
        ],
        howTitle: 'Cómo usar estos comandos',
        howItems: [
          'Comienza con <code class="code-inline">uv venv</code> para crear un entorno virtual',
          'Usa <code class="code-inline">uv pip install</code> para añadir paquetes a ese entorno',
          'Usa <code class="code-inline">uv pip compile</code> para generar un archivo lock a partir de requisitos',
          'Usa <code class="code-inline">uv pip sync</code> para asegurar que tu entorno coincida con el archivo lock',
          'Usa <code class="code-inline">uv pip check</code> para verificar que no hay conflictos',
        ],
        learnTitle: 'Más información',
        learnItems: [
          '<code class="code-inline">uv pip --help</code> — Muestra todos los comandos relacionados con pip',
          '<a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer" class="summary-link">Documentación Oficial</a> — Referencia completa y guías',
        ],
        officialDocs: 'Documentación Oficial',
      },
    },
    utility: {
      title: 'Utilidades',
      lead:
        'Gestión e inspección del estado de uv, como la caché, los directorios de almacenamiento o la auto-actualización.',
      sections: [
        {
          title: 'Limpiar caché',
          text: 'Elimina entradas de caché para liberar espacio en disco.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Podar caché',
          text: 'Elimina entradas de caché obsoletas que ya no son necesarias.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Directorio de caché',
          text: 'Muestra la ruta al directorio de caché de uv.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Directorio de herramientas',
          text: 'Muestra la ruta al directorio de herramientas de uv donde se almacenan las herramientas instaladas.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Directorio de Python',
          text: 'Muestra la ruta al directorio de versiones de Python de uv.',
          exampleTitle: 'Ejemplo',
        },
        {
          title: 'Auto-actualización',
          text:
            'Actualiza uv a la última versión para obtener nuevas funciones y correcciones de errores.',
          exampleTitle: 'Ejemplo',
        },
      ],
      summary: {
        title: 'Resumen',
        text:
          'Esta guía cubre los comandos de utilidad para <strong>uv</strong>. Estos comandos te ayudan a gestionar el estado interno de uv, limpiar espacio en disco y mantener uv actualizado.',
        whatTitle: 'Para qué te ayuda esta guía',
        whatItems: [
          'Limpiar la caché para liberar espacio en disco',
          'Podar entradas de caché obsoletas automáticamente',
          'Encontrar las rutas a los directorios de almacenamiento de uv',
          'Actualizar uv a la última versión',
        ],
        howTitle: 'Cómo usar estos comandos',
        howItems: [
          'Usa <code class="code-inline">uv cache clean</code> para eliminar todas las entradas de caché',
          'Usa <code class="code-inline">uv cache clean --older 30d</code> para eliminar entradas antiguas',
          'Usa <code class="code-inline">uv cache prune</code> para eliminar entradas obsoletas automáticamente',
          'Usa <code class="code-inline">uv self update</code> para obtener la última versión de uv',
          'Usa <code class="code-inline">uv cache dir</code>, <code class="code-inline">uv tool dir</code> y <code class="code-inline">uv python dir</code> para encontrar ubicaciones de almacenamiento',
        ],
        learnTitle: 'Más información',
        learnItems: [
          '<code class="code-inline">uv cache --help</code> — Muestra todos los comandos de caché',
          '<code class="code-inline">uv self --help</code> — Muestra las opciones de auto-actualización',
          '<a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer" class="summary-link">Documentación Oficial</a> — Referencia completa y guías',
        ],
        officialDocs: 'Documentación Oficial',
      },
    },
  },
  search: {
    modalAria: 'Resultados de búsqueda',
    title: 'Resultados para',
    closeAria: 'Cerrar',
    emptyText: 'No se encontraron resultados para tu búsqueda.',
    emptyHint: 'Intenta con otras palabras clave.',
    page: 'Página',
    of: 'de',
    results: 'resultados',
    previous: 'Anterior',
    next: 'Siguiente',
    resultAria: 'Resultado de búsqueda',
  },
  footer: {
    description:
      'GuideUV — La guía moderna para uv, el gestor de paquetes Python rápido.',
    quickLinks: 'Enlaces rápidos',
    connect: 'Conectar',
    copyright: 'Todos los derechos reservados.',
    logoAria: 'GuideUV — Inicio',
    navAria: 'Navegación del pie de página',
    home: 'Inicio',
    guides: 'Guías',
    about: 'Nosotros',
    socialGitHub: 'GitHub',
    socialX: 'X (Twitter)',
    socialUvDocs: 'Documentación de UV',
  },
};
