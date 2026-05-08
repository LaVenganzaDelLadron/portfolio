import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectDetailsPageComponent } from './pages/project-details/project-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects/:id', component: ProjectDetailsPageComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];
