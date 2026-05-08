import { Component, OnInit } from '@angular/core';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';
import { Certificate } from '../../../core/models/certificate.model';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent implements OnInit {
  certificates: Certificate[] = [];

  constructor(private readonly data: PortfolioDataService) {}

  ngOnInit(): void {
    this.certificates = this.data.getCertificates();
  }
}

