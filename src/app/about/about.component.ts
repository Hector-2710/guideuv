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
      url: 'https://x.com/RosalesHector27',
      icon: 'twitter',
      username: '@RosalesHector27'
    },
    
    {
      name: 'Email',
      url: 'mailto:h.rosales01@ufromail.cl',
      icon: 'email',
      username: 'h.rosales01@ufromail.cl'
    }
  ];

  ideas = [
    {
      title: 'Contribute',
      description: 'Found a bug? Have ideas to improve? Your contribution is welcome, How to contribute? Check the CONTRIBUTING.md file in the repository.',
      icon: 'code',
    },
  ];
}