import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { ProjectDetailsPageComponent } from './features/project-details/project-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects/:id', component: ProjectDetailsPageComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];
