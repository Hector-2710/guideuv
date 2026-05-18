import { ChangeDetectionStrategy, Component, input, output, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResult } from './search.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
  results = input<SearchResult[]>([]);
  query = input<string>('');

  closeModal = output<void>();
  navigateTo = output<SearchResult>();

  private readonly RESULTS_PER_PAGE = 8;

  currentPage = signal(1);

  totalPages = computed(() => Math.ceil(this.results().length / this.RESULTS_PER_PAGE));

  paginatedResults = computed(() => {
    const start = (this.currentPage() - 1) * this.RESULTS_PER_PAGE;
    const end = start + this.RESULTS_PER_PAGE;
    return this.results().slice(start, end);
  });

  hasNextPage = computed(() => this.currentPage() < this.totalPages());
  hasPrevPage = computed(() => this.currentPage() > 1);

  onClose(): void {
    this.closeModal.emit();
  }

  onResultClick(result: SearchResult): void {
    this.navigateTo.emit(result);
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('search-modal__overlay')) {
      this.onClose();
    }
  }

  nextPage(): void {
    if (this.hasNextPage()) {
      this.currentPage.update(p => p + 1);
    }
  }

  prevPage(): void {
    if (this.hasPrevPage()) {
      this.currentPage.update(p => p - 1);
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.onClose();
    }
  }
}