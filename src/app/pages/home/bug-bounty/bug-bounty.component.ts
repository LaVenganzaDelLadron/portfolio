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
}

@Component({
  selector: 'app-bug-bounty',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './bug-bounty.component.html',
  styleUrls: ['./bug-bounty.component.scss']
})
export class BugBountyComponent {
  programs: BugBountyProgram[] = [
    {
      id: 1,
      name: 'Adastra Security',
      image: 'assets/images/bugbounty/adastra.png',
      severity: 'Critical',
      vulnsFound: 12,
      totalRewards: '$4,500'
    },
    {
      id: 2,
      name: 'JobPortal',
      image: 'assets/images/bugbounty/jobportal.png',
      severity: 'High',
      vulnsFound: 8,
      totalRewards: '$2,800'
    },
    {
      id: 3,
      name: 'JPConnect',
      image: 'assets/images/bugbounty/jpconnect.png',
      severity: 'Critical',
      vulnsFound: 15,
      totalRewards: '$5,200'
    },
    {
      id: 4,
      name: 'WEMIS',
      image: 'assets/images/bugbounty/wemis.png',
      severity: 'High',
      vulnsFound: 6,
      totalRewards: '$1,900'
    }
  ];

  getTotalRewards(): string {
    const total = this.programs.reduce((sum, prog) => {
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
