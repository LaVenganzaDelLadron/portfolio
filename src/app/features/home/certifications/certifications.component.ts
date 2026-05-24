import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';
import { Certificate } from '../../../core/models/certificate.model';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './certifications.component.html',
})
export class CertificationsComponent implements OnInit {
  certificates: Certificate[] = [];

  constructor(private dataService: PortfolioDataService) {}

  ngOnInit(): void {
    this.certificates = this.dataService.getCertificates();
  }

  onCertificateImageError(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.style.display = 'none';
  }
}
