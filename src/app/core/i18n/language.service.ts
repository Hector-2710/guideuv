import { Injectable, signal, computed, effect } from '@angular/core';
import { Translations, TranslationKey } from './translations';
import { EN_TRANSLATIONS } from './en';
import { ES_TRANSLATIONS } from './es';

export type SupportedLanguage = 'en' | 'es';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly STORAGE_KEY = 'guideuv-lang';

  readonly currentLang = signal<SupportedLanguage>(
    this.loadInitialLanguage()
  );

  private readonly translationMap: Record<SupportedLanguage, Translations> = {
    en: EN_TRANSLATIONS,
    es: ES_TRANSLATIONS,
  };

  readonly translations = computed<Translations>(() =>
    this.translationMap[this.currentLang()]
  );

  constructor() {
    effect(() => {
      try {
        localStorage.setItem(this.STORAGE_KEY, this.currentLang());
      } catch {
        // localStorage unavailable (private mode, etc.) — silently ignore
      }
    });
  }

  private loadInitialLanguage(): SupportedLanguage {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY) as SupportedLanguage | null;
      if (stored === 'en' || stored === 'es') return stored;
    } catch {
      // localStorage unavailable
    }
    return 'en';
  }

  t(key: TranslationKey): string {
    const translation = this.translations();
    const keys = key.split('.');
    let result: unknown = translation;
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        console.warn(`[i18n] Missing translation key: ${key} in ${this.currentLang()}`);
        return `{${key}}`;
      }
    }
    return typeof result === 'string' ? result : `{${key}}`;
  }

  setLanguage(lang: SupportedLanguage): void {
    this.currentLang.set(lang);
  }

  toggleLanguage(): void {
    this.currentLang.update(lang => (lang === 'en' ? 'es' : 'en'));
  }
}
