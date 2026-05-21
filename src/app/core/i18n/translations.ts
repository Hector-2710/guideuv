export interface Translations {
  app: {
    title: string;
    description: string;
    langLabel: string;
  };
  navbar: {
    home: string;
    guides: string;
    about: string;
    searchPlaceholder: string;
    searchAria: string;
    mobileMenuAria: string;
    navAria: string;
    logoAria: string;
    externalLinkAria: string;
    seeAllResults: string;
  };
  home: {
    title: string;
    subtitle: string;
    description: string;
    descriptionSection: string;
    featuresTitle: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    installationTitle: string;
    installTabLinux: string;
    installTabWindows: string;
    terminalLabel: string;
    copyAria: string;
    copied: string;
    startTitle: string;
    startDescription: string;
    projectFilesLabel: string;
    projectFiles: Array<{
      name: string;
      description: string;
      isDirectory: boolean;
    }>;
    ctaButtons: Array<{
      label: string;
      url: string;
      variant: 'primary' | 'secondary';
    }>;
  };
  about: {
    title: string;
    tagline: string;
    whatIsTitle: string;
    whatIsText1: string;
    whatIsText2: string;
    whatIsText3: string;
    connectTitle: string;
    ideasTitle: string;
    ideas: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
    footer: string;
    footerSub: string;
  };
  guides: {
    badge: string;
    leftNav: {
      title: string;
      toggleClose: string;
      toggleOpen: string;
      empty: string;
      navAria: string;
    };
    shell: {
      mobileNav: string;
      navStateClose: string;
      navStateOpen: string;
    };
    toc: {
      aria: string;
      onThisPage: string;
      withoutSubtitles: string;
    };
    sections: Array<{
      label: string;
      slug: string;
    }>;
    introduction: {
      title: string;
      lead: string;
      overviewTitle: string;
      overviewText: string;
      features: Array<{
        title: string;
        description: string;
        icon: string;
      }>;
    };
    projects: GuidePageTranslations;
    pythonVersion: GuidePageTranslations;
    package: GuidePageTranslations;
    scripts: GuidePageTranslations;
    tools: GuidePageTranslations;
    pipInterface: GuidePageTranslations;
    utility: GuidePageTranslations;
  };
  search: {
    modalAria: string;
    title: string;
    closeAria: string;
    emptyText: string;
    emptyHint: string;
    page: string;
    of: string;
    results: string;
    previous: string;
    next: string;
    resultAria: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    connect: string;
    copyright: string;
    logoAria: string;
    navAria: string;
    home: string;
    guides: string;
    about: string;
    socialGitHub: string;
    socialX: string;
    socialUvDocs: string;
  };
}

export interface GuidePageTranslations {
  title: string;
  lead: string;
  sections: Array<{
    title: string;
    text: string;
    exampleTitle: string;
  }>;
  summary: {
    title: string;
    text: string;
    whatTitle: string;
    whatItems: string[];
    howTitle: string;
    howItems: string[];
    learnTitle: string;
    learnItems: string[];
    officialDocs: string;
  };
}

export type TranslationKey = string;
