import { Component, signal, computed, output, input, inject, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

export interface NavbarLink {
  label: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private router = inject(Router);

  // Default links
  defaultLinks: NavbarLink[] = [
    { label: 'Home', route: '/' },
    { label: 'Introduction', route: '/introduction' },
    { label: 'Features', route: '/features' },
    { label: 'Guides', route: '/guides' },
    { label: 'Contact', route: '/contact' },
  ];

  // Inputs
  links = input<NavbarLink[]>(this.defaultLinks);
  fixed = input(true);

  // Outputs
  linkClick = output<NavbarLink>();

  // State signals
  isMobileMenuOpen = signal(false);
  isScrolled = signal(false);

  // Computed
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

  // Track active route for mobile menu
  isActive(route: string): boolean {
    return this.router.url === route;
  }
}