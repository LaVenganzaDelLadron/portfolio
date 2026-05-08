import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home/home.component';

import { ProjectDetailsPageComponent } from './pages/project-details/project-details.component';

import { NotFoundPageComponent } from './pages/not-found/not-found.component';


export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  {
    path: 'projects/:id',
    component: ProjectDetailsPageComponent,
    // SSR prerendering disabled for now because SSR route typing requires
    // getPrerenderParams / renderMode integration.
    // (Angular SSR still renders the fallback page on navigation.)
    data: { ssrPrerender: false },
  },




  { path: '**', component: NotFoundPageComponent },
];

