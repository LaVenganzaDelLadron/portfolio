import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';

interface BugBountyProgram {
  id: number;
  name: string;
  image: string;
  severity: string;
  vulnsFound: number;
  totalRewards: string;
  icon: string;
  focus: string;
  description: string;
  featured?: boolean;
}

@Component({
  selector: 'app-bug-bounty',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './bug-bounty.component.html'
})
export class BugBountyComponent {
  programs: BugBountyProgram[] = [

    {
      id: 1,
      name: 'WEMIS',
      image: 'assets/images/bugbounty/wemis.png',
      severity: 'High',
      vulnsFound: 12,
      totalRewards: '$1,900',
      icon: 'fas fa-network-wired',
      focus: 'API security and sensitive data exposure',
      description: 'Security research and vulnerability assessment',
      featured: true
    },
    {
      id: 2,
      name: 'Job Portal',
      image: 'assets/images/bugbounty/jobportal.png',
      severity: 'High',
      vulnsFound: 22,
      totalRewards: '$2,800',
      icon: 'fas fa-user-lock',
      focus: 'Authentication and business logic testing',
      description: 'Security research and vulnerability assessment',
      featured: true
    },
    {
      id: 3,
      name: 'Adastra',
      image: 'assets/images/bugbounty/adastra.png',
      severity: 'Critical',
      vulnsFound: 3,
      totalRewards: '$4,500',
      icon: 'fas fa-shield-halved',
      focus: 'Access control and account takeover research',
      description: 'Security research and vulnerability assessment',
      featured: true
    },
    {
      id: 4,
      name: 'JP Connect',
      image: 'assets/images/bugbounty/jpconnect.png',
      severity: 'Critical',
      vulnsFound: 12,
      totalRewards: '$5,200',
      icon: 'fas fa-bug',
      focus: 'Critical web vulnerability disclosure',
      description: 'Security research and vulnerability assessment',
      featured: true
    },
  ];

  get featuredPrograms(): BugBountyProgram[] {
    return this.programs
      .filter((program) => program.severity === 'Critical' || program.severity === 'High')
      .slice(0, 3);
  }

  getTotalRewards(): string {
    const total = this.featuredPrograms.reduce((sum, prog) => {
      const amount = parseInt(prog.totalRewards.replace(/[$,]/g, ''));
      return sum + amount;
    }, 0);
    return `$${total.toLocaleString()}`;
  }

  getTotalVulns(): number {
    return this.programs.reduce((sum, prog) => sum + prog.vulnsFound, 0);
  }

  getSeverityClass(severity: string): string {
    return severity.toLowerCase().replace(' ', '-');
  }
}
