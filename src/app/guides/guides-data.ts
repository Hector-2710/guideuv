export interface GuidesSection {
  items: GuidesItem[];
}

export interface GuidesItem {
  label: string;
  slug: string;
  route: string;
}

export const GUIDES_SECTIONS: GuidesSection[] = [
  {
    items: [
      {
        label: 'Introduction',
        slug: 'introduction',
        route: '/guides/introduction'
      },
      {
        label: 'Projects',
        slug: 'projects',
        route: '/guides/projects'
      },
      {
        label: 'Python version',
        slug: 'python-version',
        route: '/guides/python-version'
      },
      {
        label: 'Package',
        slug: 'package',
        route: '/guides/package'
      },
      {
        label: 'Scripts',
        slug: 'scripts',
        route: '/guides/scripts'
      },
      {
        label: 'Tools',
        slug: 'tools',
        route: '/guides/tools'
      },
      {
        label: 'The pip interface',
        slug: 'pip-interface',
        route: '/guides/pip-interface'
      },
      {
        label: 'Utility',
        slug: 'utility',
        route: '/guides/utility'
      }
    ]
  }
];
