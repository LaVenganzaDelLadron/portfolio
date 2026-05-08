import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Prerender only static routes
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '404',
    renderMode: RenderMode.Prerender,
  },

  // Server render for dynamic routes / everything else
  {
    path: 'projects/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];


