export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
  image: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    date: '2022',
    url: '#',
    image: 'assets/images/certs/ceh.png'
  },
  {
    name: 'AWS Certified Security - Specialty',
    issuer: 'Amazon Web Services',
    date: '2021',
    url: '#',
    image: 'assets/images/certs/aws-security.png'
  },
  {
    name: 'Offensive Security Certified Professional (OSCP)',
    issuer: 'OffSec',
    date: '2023',
    url: '#',
    image: 'assets/images/certs/oscp.png'
  }
];
