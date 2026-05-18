import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  developerName = 'Hector';
  tagline = 'Developer passionate about development tools and Python';

  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/Hector-2710',
      icon: 'github',
      username: 'Hector-2710'
    },
    {
      name: 'Twitter/X',
      url: 'https://twitter.com',
      icon: 'twitter',
      username: '@hector_dev'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'linkedin',
      username: 'Hector Developer'
    },
    {
      name: 'Email',
      url: 'mailto:hector@example.com',
      icon: 'email',
      username: 'hector@example.com'
    }
  ];

  ideas = [
    {
      title: 'Contribute',
      description: 'Found a bug? Have ideas to improve? Your contribution is welcome!',
      icon: 'code',
    },
    {
      title: 'Donations',
      description: 'If you like this project, consider supporting me to keep it alive.',
      icon: 'heart',
    },
    {
      title: 'Newsletter',
      description: 'Subscribe to receive updates on new guides and features.',
      icon: 'mail',
    },
  ];
}