import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../core/i18n/translate.pipe';
import { LanguageService } from '../core/i18n/language.service';
import { SeoService } from '../core/seo/seo.service';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private langService = inject(LanguageService);
  private seo = inject(SeoService);

  constructor() {
    this.seo.setPageMeta({
      title: 'About — GuideUV',
      description:
        'About GuideUV, the interactive guide for uv Python package manager. Open source project built with Angular to help developers learn uv.',
      slug: '/about',
    });
  }

  developerName = 'Hector';

  readonly tagline = computed(() => this.langService.t('about.tagline'));

  readonly ideas = computed(() => this.langService.translations().about.ideas);

  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/Hector-2710',
      icon: 'github',
      username: 'Hector-2710',
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/RosalesHector27',
      icon: 'twitter',
      username: '@RosalesHector27',
    },
    {
      name: 'Email',
      url: 'mailto:h.rosales01@ufromail.cl',
      icon: 'email',
      username: 'h.rosales01@ufromail.cl',
    },
  ];
}
