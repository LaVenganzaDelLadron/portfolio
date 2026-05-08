import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { ScrollToFragmentService } from '../../core/services/scroll-to-fragment.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  isScrolled = false;
  isMobileMenuOpen = false;

  constructor(
    private readonly router: Router,
    private readonly scrollToFragment: ScrollToFragmentService
  ) {
    // After route navigation, scroll to fragment if present
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.router.routerState.snapshot.root.firstChild?.fragment;
        if (fragment) this.scrollToFragment.scrollToId(fragment);

        // Always scroll to hero when navigating to home
        if (this.router.url === '/' || this.router.url.startsWith('/?')) {
          this.scrollToFragment.scrollToId('hero');
        }

      });
  }


  navLinks = [
    { name: 'Home', path: '/', fragment: 'hero' },

    { name: 'Bug Bounty', path: '/', fragment: 'bug-bounty' },
    { name: 'Projects', path: '/', fragment: 'projects' },
    { name: 'Skills', path: '/', fragment: 'skills' }
  ];


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
