// portfolio.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Project One',
      description: 'Description of Project One.',
      image: 'assets/project-one.jpg',
      link: 'https://github.com/yourusername/project-one',
    },
    {
      title: 'Project Two',
      description: 'Description of Project Two.',
      image: 'assets/project-two.jpg',
      link: 'https://github.com/yourusername/project-two',
    },
    // Add more projects as needed
  ];
}
