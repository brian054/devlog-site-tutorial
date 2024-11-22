import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CourseComponent } from './pages/course/course.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'course', component: CourseComponent },
    { path: '**', redirectTo: '' },
  ];
