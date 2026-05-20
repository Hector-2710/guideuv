import { Component, signal, computed, input, inject, afterNextRender, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SearchService, SearchResult } from '../search/search.service';
import { SearchResultsComponent } from '../search/search-results.component';

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
  imports: [CommonModule, RouterLink, RouterLinkActive, SearchResultsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private router = inject(Router);
  private searchService = inject(SearchService);

  private searchDebounceTimer: ReturnType<typeof setTimeout> | null = null;

  defaultLinks: NavbarLink[] = [
    { label: 'Home', route: '/' },
    { label: 'Guides', route: '/guides' },
    { label: 'About Us', route: '/about' },
  ];

  links = input<NavbarLink[]>(this.defaultLinks);
  externalLinks = input<NavbarExternalLink[]>(REPO_LINKS);
  fixed = input(true);

  searchQuery = signal('');
  searchResults = signal<SearchResult[]>([]);
  isSearchDropdownOpen = signal(false);
  isSearchModalOpen = signal(false);
  isMobileMenuOpen = signal(false);
  isScrolled = signal(false);

  navbarClasses = computed(() => ({
    'navbar--scrolled': this.isScrolled(),
    'navbar--fixed': this.fixed(),
  }));

  constructor() {
    afterNextRender(() => {
      const onScroll = (): void => {
        this.isScrolled.set(window.scrollY > 10);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
    });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  onLinkClick(): void {
    this.isMobileMenuOpen.set(false);
  }

  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchQuery.set(value);

    if (value.trim().length > 0) {
      // Debounce de 300ms
      if (this.searchDebounceTimer) {
        clearTimeout(this.searchDebounceTimer);
      }

      this.searchDebounceTimer = setTimeout(() => {
        const results = this.searchService.search(value);
        this.searchResults.set(results);
        this.isSearchDropdownOpen.set(true);
      }, 300);
    } else {
      this.searchResults.set([]);
      this.isSearchDropdownOpen.set(false);
    }
  }

  onSearchEnter(): void {
    // Buscar con la query actual y abrir el modal
    const query = this.searchQuery();
    if (query.trim().length > 0) {
      const results = this.searchService.search(query);
      this.searchResults.set(results);
      this.isSearchDropdownOpen.set(false);
      this.isSearchModalOpen.set(true);
    }
  }

  closeSearchDropdown(): void {
    this.isSearchDropdownOpen.set(false);
  }

  closeSearchModal(): void {
    this.isSearchModalOpen.set(false);
  }

  navigateToResult(result: SearchResult): void {
    this.router.navigate([result.route]);
    this.isSearchModalOpen.set(false);
    this.isSearchDropdownOpen.set(false);
    this.searchQuery.set('');
    this.searchResults.set([]);
  }
}
