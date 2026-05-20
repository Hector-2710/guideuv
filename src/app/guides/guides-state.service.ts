import { Injectable, signal } from '@angular/core';
import { GUIDES_SECTIONS } from './guides-data';

@Injectable()
export class GuidesStateService {
  readonly sections = signal(GUIDES_SECTIONS);
  readonly isNavOpen = signal(false);
}
