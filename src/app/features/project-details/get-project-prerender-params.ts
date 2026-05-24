import { ProjectDetailsPageComponent } from './project-details.component';

/**
 * Prerendering helper for the SSR configuration.
 *
 * Angular SSR prerendering requires `getPrerenderParams` when a route includes
 * dynamic params like `:id`.
 */
export function getPrerenderParams() {
  // Starter: prerender a small set of known project IDs.
  // In production, you may fetch from an API/data source.
  return [{ id: 'codego' }, { id: 'hades' }];
}

