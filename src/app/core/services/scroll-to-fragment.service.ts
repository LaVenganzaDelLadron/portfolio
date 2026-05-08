import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollToFragmentService {
  scrollToId(fragment: string) {
    if (!fragment) return;

    // Handle leading '#'
    const id = fragment.startsWith('#') ? fragment.slice(1) : fragment;

    // SSR safety: document/window are not defined on the server
    if (typeof document === 'undefined' || typeof window === 'undefined') return;

    const el = document.getElementById(id);

    if (!el) return;

    // Use scrollIntoView and account for fixed navbar by offsetting with scrollBy
    const top = el.getBoundingClientRect().top + window.scrollY;
    const navOffset = 80;

    window.scrollTo({ top: top - navOffset, behavior: 'smooth' });
  }
}

