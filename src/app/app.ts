import { Component, signal, inject, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './guides/footer/footer';
import { LanguageService } from './core/i18n/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('guideuv');
  private languageService = inject(LanguageService);

  constructor() {
    effect(() => {
      const lang = this.languageService.currentLang();
      document.documentElement.lang = lang;
      document.title = this.languageService.t('app.title');
    });
  }
}
