import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  navLinks = [
    { name: 'Home', path: '/', fragment: 'home' },
    { name: 'About', path: '/', fragment: 'about' },
    { name: 'Skills', path: '/', fragment: 'skills' },
    { name: 'Projects', path: '/', fragment: 'projects' },
    { name: 'Bug Bounty', path: '/', fragment: 'bug-bounty' },
    { name: 'Experience', path: '/', fragment: 'experience' },
    { name: 'Contact', path: '/', fragment: 'contact' }
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
