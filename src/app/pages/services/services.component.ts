// services.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: '1:1 Programming Tutoring',
      description: 'Personalized tutoring sessions to help you learn programming.',
      link: '/contact?subject=Tutoring',
    },
    {
      title: 'Automated Subtitles for Videos',
      description: 'Get accurate subtitles for your videos and shorts.',
      link: '/contact?subject=Subtitles',
    },
    {
      title: 'Programming Troubleshooting',
      description: 'Assistance with debugging and fixing code issues.',
      link: '/contact?subject=Troubleshooting',
    },
    {
      title: 'Project Setup Assistance',
      description: 'Help with setting up programming projects.',
      link: '/contact?subject=Project%20Setup',
    },
  ];
}

