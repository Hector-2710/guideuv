import { Component, signal, computed, output, input, inject, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

export interface NavbarLink {
  label: string;
  route: string;
}

export interface NavbarExternalLink {
  label: string;
  url: string;
}

export const REPO_LINKS: NavbarExternalLink[] = [
  { label: 'UV', url: 'https://github.com/astral-sh/uv' },
  { label: 'GuideUV', url: 'https://github.com/Hector-2710/guideuv.git' },
];

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private router = inject(Router);

  defaultLinks: NavbarLink[] = [
    { label: 'Home', route: '/' },
    { label: 'Guides', route: '/guides' },
    { label: 'About Us', route: '/about' },
  ];

  links = input<NavbarLink[]>(this.defaultLinks);
  externalLinks = input<NavbarExternalLink[]>(REPO_LINKS);
  fixed = input(true);

  linkClick = output<NavbarLink>();

  searchQuery = signal('');
  isMobileMenuOpen = signal(false);
  isScrolled = signal(false);

  navbarClasses = computed(() => ({
    'navbar--scrolled': this.isScrolled(),
    'navbar--fixed': this.fixed(),
  }));

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 10);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  onLinkClick(link: NavbarLink): void {
    this.linkClick.emit(link);
    this.isMobileMenuOpen.set(false);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
