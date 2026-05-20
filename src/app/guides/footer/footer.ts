import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface FooterNavLink {
  label: string;
  route: string;
}

interface FooterSocialLink {
  label: string;
  url: string;
  iconPath: string;
  viewBox: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly navLinks: FooterNavLink[] = [
    { label: 'Home', route: '/' },
    { label: 'Guides', route: '/guides/introduction' },
    { label: 'About Us', route: '/about' },
  ];

  protected readonly socialLinks: FooterSocialLink[] = [
    {
      label: 'GitHub',
      url: 'https://github.com/Hector-2710/guideuv',
      iconPath: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .315.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
      viewBox: '0 0 24 24',
    },
    {
      label: 'X (Twitter)',
      url: 'https://x.com/RosalesHector27',
      iconPath: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
      viewBox: '0 0 24 24',
    },
    {
      label: 'UV Docs',
      url: 'https://docs.astral.sh/uv/',
      iconPath: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z',
      viewBox: '0 0 24 24',
    },
  ];

  protected readonly contactEmail = signal('h.rosales01@ufromail.cl');
  protected readonly currentYear = signal(new Date().getFullYear());
}
